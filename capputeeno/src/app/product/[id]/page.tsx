import ButtonBack from "@/components/ButtonBack";
import Header from "@/components/Header";

export default function ProductPage() {
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
                <nav style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    width: '84%',
                    height: '60px',
                    maxWidth: '1120px'
                }}>
                    <ButtonBack />
                </nav>
            </div>
        </main >
    )
}