'use client'

import { formatPrice } from "@/utils/format-price";
import { ProductInfoType, ProductLocalStorage } from "@/types/product-types";
import { SvgButtonTrash, SvgCancelAction } from "@/components/Icons";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import QuantitySelector from "./QuantitySelector";
import { Modal } from "@/components/Modal";
import { useCart } from "@/contexts/cart-context";

export interface ProductLocalStorageClient extends ProductLocalStorage {
    onQuantityChange: (productId: string, newQuantity: number) => void;
}

export default function ProductCart({ id, quantity, price_in_cents, onQuantityChange }: ProductLocalStorageClient) {

    const [showModal, setShowModal] = useState(false);
    const { removeFromCart } = useCart();
    const [product, setProduct] = useState<ProductInfoType>({
        id: "",
        name: "",
        category: "",
        image_url: "",
        description: "",
        price_in_cents: 0
    });

    useEffect(() => {
        async function getProductData() {
            const query = `{
                Product (id: "${id}") {
                    id
                    name
                    category
                    image_url
                    description
                    price_in_cents
                }
            }`;

            const encodedQuery = encodeURIComponent(query);
            const url = `${process.env.NEXT_PUBLIC_API_URL}/?query=${encodedQuery}`;

            const response = await fetch(url);
            const { data } = await response.json();

            setProduct(data.Product);

        }

        getProductData();
    }, []);

    return (
        <li className={styles.productCart}>
            <figure className={styles.productImage}>
                <img
                    src={product.image_url}
                    alt={`foto-${product.name}`}
                />
            </figure>

            <article className={styles.productContent}>
                <header className={styles.productHeader}>
                    <h2 className={styles.productTitle}>{product.name}</h2>
                    <button className={styles.productDeleteButton} onClick={() => setShowModal(true)}>
                        <SvgButtonTrash />
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
                    }}>
                        <Modal.Root>
                            <Modal.Icon icon={<SvgCancelAction />} />
                            <Modal.Title>Deletar Produto?</Modal.Title>
                            <Modal.Content>Você realmente deseja deletar este produto?</Modal.Content>
                            <Modal.Actions>
                                <Modal.Action hoverStyle={{ backgroundColor: '#a8a8a8' }} onClick={() => setShowModal(false)}>Cancelar</Modal.Action>
                                <Modal.Action style={{ backgroundColor: '#f15e5e' }} hoverStyle={{ backgroundColor: '#ee3535' }} onClick={() => removeFromCart(id)}>Confirmar</Modal.Action>
                            </Modal.Actions>
                        </Modal.Root>
                    </div>}
                </header>

                <p className={styles.productDescription}>{product.description}</p>

                <div className={styles.productBottomSection}>
                    <QuantitySelector
                        id={id}
                        quantity={quantity}
                        onQuantityChange={onQuantityChange}
                        price_in_cents={0}
                    />
                    <p className={styles.productPrice}>{formatPrice(price_in_cents * quantity)}</p>
                </div>
            </article>
        </li>
    );
}