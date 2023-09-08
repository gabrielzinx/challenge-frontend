import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Pagination from "@/components/Pagination";
import ProductList from "@/components/ProductList";

export default function HomePage() {
    return (
        <main style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100vw',
            height: '100%',
        }}>
            <Header />
            <div style={{
                display: "flex",
                flexDirection: 'column',
                alignItems: 'center',
                width: '100vw',
                height: '100%',
                paddingBottom: '32px',
                backgroundColor: 'var(--shapes-light-92-gray)'
            }}>
                <Nav />
                <Pagination />
                <ProductList />
                <Pagination />
            </div>
        </main>
    )
}