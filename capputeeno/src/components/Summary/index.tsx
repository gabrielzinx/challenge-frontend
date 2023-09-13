import { formatPrice } from '@/utils/format-price';
import Link from 'next/link';
import styles from './styles.module.css';

export default function Summary() {
    return (
        <section className={styles.orderSummary}>
            <ul className={styles.summaryList}>

                <h1 className={styles.summaryHeading}>
                    Resumo do pedido
                </h1>

                <li className={styles.summaryItem}>
                    <p>Subtotal de produtos</p>
                    <p>{formatPrice(41660)}</p>
                </li>
                <li className={styles.summaryItem}>
                    <p>Entrega</p>
                    <p>{formatPrice(41660 > 900 ? 0 : 40)}</p>
                </li>

                <span className={styles.divider}></span>

                <li className={styles.totalContent}>
                    <p>Total</p>
                    <p>{formatPrice(41660 > 900 ? 41660 : 41660 + 40)}</p>
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