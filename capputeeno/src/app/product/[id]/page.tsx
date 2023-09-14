import ButtonBack from "@/components/Buttons/Back";
import Header from "@/components/Header";
import ProductInfo from "@/components/Product/Info";
import styles from './styles.module.css';

export default function ProductPage({ params }: { params: { id: string } }) {
    return (
        <main className={styles.container}>
            <Header />
            <div className={styles.content}>
                <nav className={styles.navbar}>
                    <ButtonBack />
                </nav>
                <ProductInfo id={params.id} />
            </div>
        </main>
    )
}