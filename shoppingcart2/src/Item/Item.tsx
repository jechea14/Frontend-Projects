import {Button} from '@mui/material'
//Types
import {CartItemType} from '../App'

type Props = {
    item: CartItemType
    handleAddToCart: (clickedItem: CartItemType) => void
}

const Item: React.FC<Props> = ({item, handleAddToCart}) => (
    <div className='flex justify-between flex-col w-full h-full border rounded-2xl'>
        <img src={item.image} alt={item.title} className='max-h-64 object-cover rounded-t-2xl'/>
        <div className='p-2 h-full font-sans'>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>${item.price}</h3>
        </div>
        <Button onClick={() => handleAddToCart(item)} className='border rounded-b-2xl'>Add to cart</Button>
    </div>
)

export default Item;