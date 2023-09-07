import Header from "@/components/Header";
import Nav from "@/components/Nav";

export default function HomePage() {
    return (
        <main style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100vw',
            height: '100vh',
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
            </div>
        </main>
    )
}