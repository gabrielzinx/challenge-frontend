import { formatPrice } from "@/utils/format-price";
import Link from "next/link";
import styles from './styles.module.css';

export default function ProductCard() {
    return (
        <Link href={"#"} className={styles.card}>
            <img src="https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg" alt="Camiseta not today" className={styles.image} />
            <section className={styles.content}>
                <h3 className={styles.title}>Camiseta not today</h3>
                <div className={styles.divisor}></div>
                <p className={styles.priceText}>{formatPrice(5300)}</p>
            </section>
        </Link>
    )
}