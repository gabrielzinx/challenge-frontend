'use client'

import { SvgCancelAction, SvgConfirmAction, SvgShoppingBag } from "@/components/Icons";
import styles from './styles.module.css';
import { useCart } from "@/contexts/cart-context";
import { useState } from "react";
import { Modal } from "@/components/Modal";
import { useRouter } from "next/navigation";

export default function ButtonAddToCart({ id, price_in_cents }: { id: string, price_in_cents: number }) {

    const router = useRouter();
    const { cart, addToCart } = useCart();
    const [showModal, setShowModal] = useState(false);
    const [showAlertModal, setShowAlertModal] = useState(false);

    const addProductToCart = (id: string): void => {
        addToCart({ id: id, price_in_cents: price_in_cents, quantity: 1 });
    }

    return (
        <>
            <button className={styles.addToCartButton} onClick={() => {

                if (showModal) {
                    return
                }

                for (const index in cart) {
                    if (cart[index].id === id) {
                        setShowAlertModal(true);
                        return
                    }
                }
                
                addProductToCart(id);
                setShowModal(true)
            }}>
                <SvgShoppingBag path={{ stroke: '#FFF' }} />
                <span className={styles.buttonText}>Adicionar ao Carrinho</span>
            </button>
            {showAlertModal && <div style={{
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
                    <Modal.Icon icon={<SvgCancelAction />} />
                    <Modal.Title>Produto já Adicionado!</Modal.Title>
                    <Modal.Actions>
                        <Modal.Action
                            style={{ backgroundColor: '#f15e5e' }}
                            hoverStyle={{ backgroundColor: '#ee3535' }}
                            onClick={() => setShowAlertModal(false)}
                        >
                            Cancelar
                        </Modal.Action>
                    </Modal.Actions>
                </Modal.Root>
            </div>}
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
                    <Modal.Title>Adicionado ao Carrinho!</Modal.Title>
                    <Modal.Actions>
                        <Modal.Action
                            style={{ backgroundColor: '#f15e5e' }}
                            hoverStyle={{ backgroundColor: '#ee3535' }}
                            onClick={() => setShowModal(false)}
                        >
                            Cancelar
                        </Modal.Action>
                        <Modal.Action
                            style={{ backgroundColor: '#51B853' }}
                            hoverStyle={{ backgroundColor: '#23b526' }}
                            onClick={() => {
                                setShowModal(false);
                                router.push('/cart');
                            }}
                        >
                            Ir ao carrinho
                        </Modal.Action>
                    </Modal.Actions>
                </Modal.Root>
            </div>}
        </>
    )
}