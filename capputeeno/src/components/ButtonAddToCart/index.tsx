import { SvgShoppingBag } from "@/components/Icons";
import styles from './styles.module.css';

export default function ButtonAddToCart() {
    return (
        <>
            <button className={styles.addToCartButton}>
                <SvgShoppingBag path={{ stroke: '#FFF' }} />
                <span className={styles.buttonText}>Adicionar ao Carrinho</span>
            </button>
        </>
    )
}