import {useState} from 'react'

import Cart from './Cart.tsx'
import {useSelector} from 'react-redux'
import {useAppSelector} from '../store/hooks.ts'

export default function Header() {
    const [cartIsVisible, setCartIsVisible] = useState(false)
    const cartItems = useAppSelector(state => state.cart.items)
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0)

    function handleOpenCartClick() {
        setCartIsVisible(true)
    }

    function handleCloseCartClick() {
        setCartIsVisible(false)
    }

    return (
        <>
            {cartIsVisible && <Cart onClose={handleCloseCartClick} />}
            <header id="main-header">
                <div id="main-title">
                    <img src="logo.png" alt="Elegant model" />
                    <h1>Elegant Redux</h1>
                </div>
                <p>
                    <button onClick={handleOpenCartClick}>Cart ({totalItems})</button>
                </p>
            </header>
        </>
    )
}
