'use client'

import { formatPrice } from '@/utils/format-price';
import { useCart } from '@/contexts/cart-context';
import { ProductLocalStorage } from '@/types/product-types';
import ProductCart from '../ProductCart';
import ButtonBack from '../Buttons/Back';
import styles from './styles.module.css';

export default function CartItems() {

    const { cart, updateQuantity } = useCart();

    const handleQuantityChange = (productId: string, newQuantity: number) => {
        updateQuantity(productId, newQuantity);
    };

    return (
        <section className={styles.cartItems}>
            <nav className={styles.cartNav}>
                <ButtonBack />
            </nav>
            <h1 className={styles.cartTitle} onClick={() => {
            }}>Seu carrinho</h1>
            <p className={styles.cartTotal}>Total (1 produtos) <strong>{formatPrice(41660)}</strong></p>
            <ul className={styles.cartProductList}>
                {cart.map(({ id, quantity }: ProductLocalStorage) => {
                    return (
                        <ProductCart
                            key={`product-cart-${id}`}
                            id={id}
                            quantity={quantity}
                            onQuantityChange={handleQuantityChange}
                        />
                    )
                })}
            </ul>
        </section>
    )
}