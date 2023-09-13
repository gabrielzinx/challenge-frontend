import { formatPrice } from "@/utils/format-price";
import { ProductInfoType } from "@/types/product-types";
import { SvgButtonTrash, SvgArrowDown } from "@/components/Icons";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

export default function ProductCart({ id }: { id: string }) {

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
                    alt={`foto de ${product.name}`}
                />
            </figure>

            <article className={styles.productContent}>
                <header className={styles.productHeader}>
                    <h2 className={styles.productTitle}>{product.name}</h2>
                    <button className={styles.productDeleteButton}>
                        <SvgButtonTrash />
                    </button>
                </header>

                <p className={styles.productDescription}>{product.description}</p>

                <div className={styles.productBottomSection}>
                    <button className={styles.productQuantityButton}>
                        5
                        <SvgArrowDown />
                    </button>
                    <p className={styles.productPrice}>{formatPrice(product.price_in_cents)}</p>
                </div>
            </article>
        </li>
    );
}