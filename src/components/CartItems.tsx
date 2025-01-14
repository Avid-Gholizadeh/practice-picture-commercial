import {ReactNode} from 'react'
import {useAppSelector, useCardDispatch} from '../store/hooks'
import {cartSliceActions, type CartItem as CartItemType} from '../store/cart-slice.ts'

export default function CartItems() {
    //

    const dispatch = useCardDispatch()
    const cartItems = useAppSelector(state => state.cart.items)
    const totalItemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

    function handleRemoveFromCart(id: string) {
        dispatch(cartSliceActions.removeFromCard(id))
    }
    function handleAddToCart(item: CartItemType) {
        const {id, price, title} = item
        dispatch(cartSliceActions.addToCart({id, price, title}))
    }

    const formattedTotalPrice = totalItemsPrice.toFixed(2) + '$'

    let content: ReactNode
    if (cartItems.length === 0) {
        content = <p>No items in cart!</p>
    } else {
        content = (
            <>
                <ul id="cart-items">
                    {cartItems.map(item => {
                        const formattedPrice = `$${item.price.toFixed(2)}`

                        return (
                            <li key={item.id}>
                                <div>
                                    <span>{item.title}</span>
                                    <span> ({formattedPrice})</span>
                                </div>
                                <div className="cart-item-actions">
                                    <button onClick={() => handleRemoveFromCart(item.id)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => handleAddToCart(item)}>+</button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                <p id="cart-total-price">
                    Cart Total: <strong>{formattedTotalPrice}</strong>
                </p>
            </>
        )
    }

    return <div id="cart">{content}</div>
}
