'use client'

import ButtonBack from "@/components/Buttons/Back";
import Header from "@/components/Header";
import { formatPrice } from "@/utils/format-price";

import styles from './styles.module.css';
import Link from "next/link";
import ProductCart from "@/components/ProductCart";

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
                        <ProductCart id="a2a4b327-7953-4768-8df3-d56984afe970" />
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