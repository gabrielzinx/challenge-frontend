import Header from "@/components/Header";
import Summary from "@/components/Summary";
import CartItems from "@/components/CartItems";
import styles from './styles.module.css';

export default function CartPage() {
    return (
        <main className={styles.cartContainer}>
            <Header />
            
            <section className={styles.cartSection}>
                <CartItems />
                <Summary />
            </section>
        </main>
    );
}