import ButtonBack from "@/components/Buttons/Back";
import Header from "@/components/Header";
import { SvgArrowDown, SvgButtonTrash } from "@/components/Icons";
import { formatPrice } from "@/utils/format-price";

import styles from './styles.module.css';
import Link from "next/link";

export default function CartPage() {
    return (
        <main style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: 'var(--shapes-light-92-gray)'
        }}>
            <Header />

            <section style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                width: '88%',
                maxWidth: '1120px'
            }}>

                <section style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    width: '66%',
                }}>

                    <nav style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        width: '100%',
                        height: '66px'
                    }}>
                        <ButtonBack />
                    </nav>

                    <h1 style={{
                        color: 'var(--text-dark, #41414D)',
                        fontFamily: 'var(--font-default)',
                        fontSize: '24px',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        lineHeight: '150%',
                        textTransform: 'uppercase'
                    }}>Seu carrinho</h1>
                    <p style={{
                        color: 'var(--text-dark, #41414D)',
                        fontFamily: 'var(--font-default)',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '300',
                        lineHeight: '150%',
                    }}>Total (1 produtos) <strong style={{
                        fontWeight: '600'
                    }}>{formatPrice(41660)}</strong></p>

                    <ul style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        marginTop: '20px',
                        gap: '16px'
                    }}>

                        <li style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                            height: '212px',
                            borderRadius: '8px',
                            backgroundColor: '#fff',
                        }}>

                            <figure style={{
                                width: '256px',
                                height: '100%'
                            }}>
                                <img src="https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg" alt="camiseta" style={{
                                    borderRadius: '8px 0 0 8px',
                                    height: '100%',
                                    objectFit: 'cover',
                                }} />
                            </figure>

                            <article style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                padding: '16px 28px',
                                height: '100%'
                            }}>

                                <header style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '100%'
                                }}>
                                    <h2 style={{
                                        color: 'var(--text-dark,#41414d)',
                                        fontFamily: 'var(--font-default)',
                                        fontSize: '26px',
                                        fontStyle: 'normal',
                                        fontWeight: '300',
                                        lineHeight: '150%',
                                    }}>Camiseta not today.</h2>
                                    <button style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: 'transparent',
                                        cursor: 'pointer',
                                        border: '0',
                                    }}>
                                        <SvgButtonTrash />
                                    </button>
                                </header>

                                <p style={{
                                    color: 'var(--text-dark,#41414d)',
                                    fontFamily: 'var(--font-default)',
                                    fontSize: '12px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: '150%'
                                }}>Eum est id amet vitae quia. Eum veniam veritatis. Voluptas error voluptatibus aliquam dolor. Ut dicta aliquid molestiae qui soluta. Enim quis suscipit minima.</p>

                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '100%'
                                }}>
                                    <button style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: '#f3f5f6',
                                        flexShrink: '0',
                                        width: '65px',
                                        height: '40px',
                                        paddingInline: '12px 4px',
                                        borderRadius: '8px',
                                        border: '2px solid #a8a8b3',
                                        gap: '8px',
                                        cursor: 'pointer',
                                        color: 'var(--support-text-dark,#737380)',
                                        textAlign: 'center',
                                        fontFamily: 'var(--font-default)',
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        lineHeight: '150%',
                                        textTransform: 'uppercase',
                                    }}>
                                        5
                                        <SvgArrowDown />
                                    </button>
                                    <p style={{
                                        color: 'var(--shapes-dark-tooltip, #09090a)',
                                        fontFamily: 'var(--font-default)',
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        lineHeight: '150%',
                                    }}>{formatPrice(41660)}</p>
                                </div>

                            </article>
                        </li>

                    </ul>

                </section>

                <section className={styles.orderSummary}>
                    <ul className={styles.summaryList}>
                        
                        <h1 className={styles.summaryHeading}>Resumo do pedido</h1>
                        
                        <li className={styles.summaryItem}>
                            <p>Subtotal de produtos</p>
                            <p>{formatPrice(41660)}</p>
                        </li>
                        <li className={styles.summaryItem}>
                            <p>Entrega</p>
                            <p>{formatPrice(41660 > 900 ? 0 : 40)}</p>
                        </li>

                        <span className={styles.divider}></span>
                        
                        <li className={styles.totalContent}>
                            <p>Total</p>
                            <p>{formatPrice(41660 > 900 ? 41660 : 41660 + 40)}</p>
                        </li>
                        
                        <button className={styles.checkoutButton}>
                            Finalizar a compra
                        </button>
                    </ul>
                    
                    <ul className={styles.helpLinks}>
                        <li className={styles.helpLink}>
                            <Link href={"#"}>Ajuda</Link>
                        </li>
                        <li className={styles.helpLink}>
                            <Link href={"#"}>Reembolsos</Link>
                        </li>
                        <li className={styles.helpLink}>
                            <Link href={"#"}>Entregas e Frete</Link>
                        </li>
                        <li className={styles.helpLink}>
                            <Link href={"#"}>Trocas e Devoluções</Link>
                        </li>
                    </ul>
                </section>

            </section>

        </main >
    )
}