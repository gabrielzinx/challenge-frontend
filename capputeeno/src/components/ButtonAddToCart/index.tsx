'use client'

import { SvgShoppingBag } from "@/components/Icons";
import { ProductLocalStorage } from "@/types/product-types";
import useLocalStorage from "@/hooks/useLocalStorage";
import styles from './styles.module.css';

export default function ButtonAddToCart({ id }: { id: string }) {

    const { value, updateLocalStorage } = useLocalStorage<[ProductLocalStorage?]>('cart-products', []);
    
    const addProductToCart = (id: string): void => {
        value.push({id: id, quantity: 1});
        updateLocalStorage(value);
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