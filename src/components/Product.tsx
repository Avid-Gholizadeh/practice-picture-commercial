import {cartSliceActions} from '../store/cart-slice'
import {useCardDispatch} from '../store/hooks'

type ProductProps = {
    id: string
    image: string
    title: string
    price: number
    description: string
}

export default function Product({image, title, price, description, id}: ProductProps) {
    //

    const dispatch = useCardDispatch()
    function handleAddToCart() {
        dispatch(cartSliceActions.addToCart({id, price, title}))
    }

    return (
        <article className="product">
            <img src={image} alt={title} />
            <div className="product-content">
                <div>
                    <h3>{title}</h3>
                    <p className="product-price">${price}</p>
                    <p>{description}</p>
                </div>
                <p className="product-actions">
                    <button onClick={handleAddToCart}>Add to Cart</button>
                </p>
            </div>
        </article>
    )
}
