import { formatPrice } from "@/utils/format-price";
import Header from "@/components/Header";
import ButtonBack from "@/components/Buttons/Back";

import ProductCart from "@/components/ProductCart";
import Summary from "@/components/Summary";
import styles from './styles.module.css';

export default function CartPage() {
    return (
        <main className={styles.cartContainer}>
            <Header />

            <section className={styles.cartSection}>
                <section className={styles.cartItems}>
                    <nav className={styles.cartNav}>
                        <ButtonBack />
                    </nav>
                    <h1 className={styles.cartTitle}>Seu carrinho</h1>
                    <p className={styles.cartTotal}>Total (1 produtos) <strong>{formatPrice(41660)}</strong></p>
                    <ul className={styles.cartProductList}>
                        <ProductCart id="a2a4b327-7953-4768-8df3-d56984afe970" />
                    </ul>
                </section>
                <Summary />
            </section>
        </main>
    );
}
