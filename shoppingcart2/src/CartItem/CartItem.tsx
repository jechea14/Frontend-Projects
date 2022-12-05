import { Button } from '@mui/material';
//Types
import { CartItemType } from '../App';
import Item from '../Item/Item';

type Props = {
    item: CartItemType
    addToCart: (clickedItem: CartItemType) => void
    removeFromCart: (id: number) => void
}

const CartItem: React.FC<Props> = ({item, addToCart, removeFromCart}) => {
    return (
        <div className='flex justify-between border-b-blue-400'>
            <div className=''>
                <h3>{item.title}</h3>
                <div className='flex justify-between'>
                    <p>Price: ${item.price}</p>
                    <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
                </div>
                <div className='flex justify-between'>
                    <Button size='small' disableElevation variant='contained' onClick={() => removeFromCart(item.id)} className='flex justify-between'>-</Button>
                    <p>{item.amount}</p>
                    <Button size='small' disableElevation variant='contained' onClick={() => addToCart(item)} className='flex justify-between'>+</Button>
                </div>
            </div>
            <img src={item.image} alt={item.title} className='max-w-xs object-cover ml-10'/>
        </div>
    )
}

export default CartItem