'use client'

import { SvgShoppingBag } from "@/components/Icons";
import styles from './styles.module.css';
import { useCart } from "@/contexts/cart-context";

export default function ButtonAddToCart({ id }: { id: string }) {

    const { addToCart } = useCart();

    const addProductToCart = (id: string): void => {
        addToCart({ id: id, quantity: 1 });
    }

    return (
        <>
            <button className={styles.addToCartButton} onClick={() => addProductToCart(id)}>
                <SvgShoppingBag path={{ stroke: '#FFF' }} />
                <span className={styles.buttonText}>Adicionar ao Carrinho</span>
            </button>
        </>
    )
}