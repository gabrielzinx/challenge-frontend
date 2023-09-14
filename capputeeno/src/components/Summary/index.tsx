'use client'

import { formatPrice } from '@/utils/format-price';
import Link from 'next/link';
import styles from './styles.module.css';
import { useCart } from '@/contexts/cart-context';


export default function Summary() {

    const { cart } = useCart();

    const updatedListaDeItens = cart.map(item => ({
        ...item,
        total: item.price_in_cents * item.quantity,
    }));

    const coastTotal = updatedListaDeItens.reduce((total, item) => total + item.total, 0);

    return (
        <section className={styles.orderSummary}>
            <ul className={styles.summaryList}>

                <h1 className={styles.summaryHeading}>
                    Resumo do pedido
                </h1>

                <li className={styles.summaryItem}>
                    <p>Subtotal de produtos</p>
                    <p>{formatPrice(coastTotal)}</p>
                </li>
                <li className={styles.summaryItem}>
                    <p>Entrega</p>
                    <p>{formatPrice(coastTotal > 90000 ? 0 : 4000)}</p>
                </li>

                <span className={styles.divider}></span>

                <li className={styles.totalContent}>
                    <p>Total</p>
                    <p>{formatPrice(coastTotal > 90000 ? coastTotal : coastTotal + 4000)}</p>
                </li>

                <button className={styles.checkoutButton}>
                    Finalizar a compra
                </button>
            </ul>

            <ul className={styles.helpLinks}>
                <li className={styles.helpLink}>
                    <Link href={"#"}>Ajuda</Link>
                </li>
                <li className={styles.helpLink}>
                    <Link href={"#"}>Reembolsos</Link>
                </li>
                <li className={styles.helpLink}>
                    <Link href={"#"}>Entregas e Frete</Link>
                </li>
                <li className={styles.helpLink}>
                    <Link href={"#"}>Trocas e Devoluções</Link>
                </li>
            </ul>
        </section>
    )
}