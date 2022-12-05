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

  const handleAddToCart = (clickedItem: CartItemType) => null

  const handleRemoveFromCart = () => null

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
