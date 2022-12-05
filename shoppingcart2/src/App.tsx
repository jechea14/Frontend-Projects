import { useState } from 'react'
import { useQuery } from 'react-query'
//Components
import Item from './Item/Item';
import Cart from './Cart/Cart';
import { LinearProgress, Drawer, Grid, Container, Card, Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge'
import { color } from '@mui/system';
//Types
export type CartItemType = {
  id: number
  category: string
  description: string
  image: string
  price: number
  title: string
  amount: number
}

const getProducts = async (): Promise<CartItemType[]> => 
  await (await fetch('https://fakestoreapi.com/products')).json()


function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([] as CartItemType[])
  const {data, isLoading, error} = useQuery<CartItemType[]>('products', getProducts)
  console.log(data)

  const getTotalItems = (items: CartItemType[]) => 
    items.reduce((ack: number, item) => ack + item.amount, 0)

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      // 1. Is the item already added in the cart?
      const isItemInCart = prev.find(item => item.id === clickedItem.id) //check in prev state if this item exists

      if(isItemInCart) {
        return prev.map(item => (
          item.id === clickedItem.id
            ? {...item, amount: item.amount + 1}
            : item
        ))
      }
      // First time the item is added
      return [...prev, {...clickedItem, amount: 1}]
    })
  }

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev => (
      prev.reduce((ack, item) => {
        if(item.id === id) {
          if(item.amount === 1) return ack
          return [...ack, {...item, amount: item.amount - 1}]
        } else {
          return [...ack, item]
        }
      }, [] as CartItemType[])
    ))
  }

  if(isLoading) return <LinearProgress/>
  if(error) return <div>Something went wrong...</div>

  return (
    <Container>
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart cartItems={cartItems} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart}/>
      </Drawer>

      <Button onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)}  color='error'>
          <AddShoppingCartIcon/>
        </Badge>
      </Button>
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} md={4}>
            <Item item={item} handleAddToCart={handleAddToCart}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default App
