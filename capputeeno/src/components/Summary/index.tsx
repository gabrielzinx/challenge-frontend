'use client'

import { formatPrice } from '@/utils/format-price';
import { useCart } from '@/contexts/cart-context';
import { SvgConfirmAction } from '../Icons';
import { Modal } from '@/components/Modal';
import Link from 'next/link';
import router from 'next/router';
import styles from './styles.module.css';
import { useState } from 'react';

export default function Summary() {

    const { cart, clearCart } = useCart();
    const [showModal, setShowModal] = useState(false);

    const updatedListaDeItens = cart.map(item => ({
        ...item,
        total: item.price_in_cents * item.quantity,
    }));

    const coastTotal = updatedListaDeItens.reduce((total, item) => total + item.total, 0);

    return (
        <section className={styles.orderSummary}>
            <ul className={styles.summaryList}>

                <h1 className={styles.summaryHeading}>
                    Resumo do pedido
                </h1>

                <li className={styles.summaryItem}>
                    <p>Subtotal de produtos</p>
                    <p>{formatPrice(coastTotal)}</p>
                </li>
                <li className={styles.summaryItem}>
                    <p>Entrega</p>
                    <p>{formatPrice(coastTotal > 90000 || coastTotal === 0 ? 0 : 4000)}</p>
                </li>

                <span className={styles.divider}></span>

                <li className={styles.totalContent}>
                    <p>Total</p>
                    <p>{formatPrice(coastTotal > 90000 ? coastTotal : coastTotal === 0 ? 0 : coastTotal + 4000)}</p>
                </li>

                <button className={styles.checkoutButton} onClick={() => {
                    clearCart();
                    setShowModal(true);
                }}>
                    Finalizar a compra
                </button>
                {showModal && <div style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 9999,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}> <Modal.Root>
                        <Modal.Icon icon={<SvgConfirmAction />} />
                        <Modal.Title>Compra Finalizada!</Modal.Title>
                        <Modal.Actions>
                            <Modal.Action
                                style={{ backgroundColor: '#51B853' }}
                                hoverStyle={{ backgroundColor: '#23b526' }}
                                onClick={() => {
                                    setShowModal(false);
                                }}
                            >
                                Confirmar
                            </Modal.Action>
                        </Modal.Actions>
                    </Modal.Root>
                </div>}
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
    )
}