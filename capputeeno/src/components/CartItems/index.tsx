'use client'

import { formatPrice } from '@/utils/format-price';
import { useCart } from '@/contexts/cart-context';
import { ProductLocalStorage } from '@/types/product-types';
import ProductCart from '@/components/Product/Cart';
import ButtonBack from '@/components/Buttons/Back';
import styles from './styles.module.css';

export default function CartItems() {

    const { cart, updateQuantity } = useCart();

    const handleQuantityChange = (productId: string, newQuantity: number) => {
        updateQuantity(productId, newQuantity);
    };

    const updatedListaDeItens = cart.map(item => ({
        ...item,
        total: item.price_in_cents * item.quantity,
    }));

    const coastTotal = updatedListaDeItens.reduce((total, item) => total + item.total, 0);

    return (
        <section className={styles.cartItems}>
            <nav className={styles.cartNav}>
                <ButtonBack />
            </nav>
            <h1 className={styles.cartTitle} onClick={() => {
            }}>Seu carrinho</h1>
            <p className={styles.cartTotal}>Total ({cart.length} {cart.length > 1 ? "produtos" : "produto"}) <strong>{formatPrice(coastTotal)}</strong></p>
            <ul className={styles.cartProductList}>
                {cart.map(({ id, quantity, price_in_cents }: ProductLocalStorage) => {
                    return (
                        <ProductCart
                            key={`product-cart-${id}`}
                            id={id}
                            quantity={quantity}
                            onQuantityChange={handleQuantityChange}
                            price_in_cents={price_in_cents}
                        />
                    )
                })}
            </ul>
        </section>
    )
}