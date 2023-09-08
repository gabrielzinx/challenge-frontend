'use client'

import { useEffect, useState } from 'react';
import styles from './style.module.css';
import { ProductInfoType } from '@/types/product-types';
import { formatPrice } from '@/utils/format-price';
import ButtonAddToCart from '@/components/ButtonAddToCart';

export default function ProductInfo({ id }: { id: string }) {

    const [product, setProduct] = useState<ProductInfoType>({
        id: "",
        name: "",
        category: "",
        description: "",
        price_in_cents: 0,
        image_url: ""
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
    }, [])


    return (
        <main className={styles.productInfo}>
            <div className={styles.productImage}>
                <img src={product.image_url} alt={`foto-${product.name}`} />
            </div>
            <article className={styles.productDetails}>
                <section>
                    <p className={styles.productCategory}>{product.category === "mugs" ? "Caneca" : "Camiseta"}</p>
                    <h1 className={styles.productName}>{product.name}</h1>
                    <h2 className={styles.productPrice}>{formatPrice(product.price_in_cents)}</h2>
                </section>

                <p className={styles.productShipping}>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>

                <section>
                    <h2 className={styles.productDescriptionTitle}>Descrição</h2>
                    <p className={styles.productDescription}>{product.description}</p>
                </section>

                <ButtonAddToCart id={product.id} />

            </article>
        </main>
    )
}