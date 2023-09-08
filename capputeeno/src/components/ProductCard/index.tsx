import { formatPrice } from "@/utils/format-price";
import Link from "next/link";
import styles from './styles.module.css';
import { ProductCardType } from "@/types/product-types";

export default function ProductCard({ id, name, image_url, price_in_cents }: ProductCardType) {
    return (
        <Link href={`/product/${id}`} className={styles.card}>
            <img src={image_url} alt={`image-${name}`} className={styles.image} />
            <section className={styles.content}>
                <h3 className={styles.title}>{name}</h3>
                <div className={styles.divisor}></div>
                <p className={styles.priceText}>{formatPrice(price_in_cents)}</p>
            </section>
        </Link>
    )
}