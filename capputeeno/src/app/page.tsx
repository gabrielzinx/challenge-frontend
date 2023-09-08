import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Pagination from "@/components/Pagination";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {

    const pageNumbers = Array.from({ length: 12 }, (_, index) => index + 1);

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
                backgroundColor: 'var(--shapes-light-92-gray)'
            }}>
                <Nav />
                <Pagination />
                <ul style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '84%',
                    flexWrap: 'wrap',
                    paddingBlock: '32px',
                    gap: '32px',
                    maxWidth: '1120px',
                }}>
                    {pageNumbers.map(() => {
                        return <ProductCard />
                    })}
                </ul>
            </div>
        </main>
    )
}