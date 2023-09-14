import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Pagination from "@/components/Nav/Pagination";
import ProductList from "@/components/Product/List";
import styles from './styles.module.css';

export default function HomePage() {
    return (
        <main className={styles.container}>
            <Header />
            <section className={styles.content}>
                <Nav />
                <Pagination />
                <ProductList />
                <Pagination />
            </section>
        </main>
    )
}