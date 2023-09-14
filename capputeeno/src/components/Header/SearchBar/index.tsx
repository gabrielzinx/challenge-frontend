'use client'

import { InputHTMLAttributes, useEffect, useState } from 'react';
import { SvgSearch } from '@/components/Icons';
import { ProductInfoType } from '@/types/product-types';
import { formatPrice } from '@/utils/format-price';
import { useRouter } from 'next/navigation';
import styles from './styles.module.css';

function SearchBar(props: InputHTMLAttributes<HTMLInputElement>) {

    const [inputText, setInputText] = useState("");
    const [products, setProducts] = useState<ProductInfoType[]>([]);

    useEffect(() => {
        async function getProductData() {
            const query = `{
                allProducts {
                    id
                    name
                    category
                    image_url
                    price_in_cents
                }
            }`;

            const encodedQuery = encodeURIComponent(query);
            const url = `${process.env.NEXT_PUBLIC_API_URL}/?query=${encodedQuery}`;

            const response = await fetch(url);
            const { data } = await response.json();

            setProducts(data.allProducts);

        }

        getProductData();
    }, []);

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(inputText.toLowerCase())
    );

    return (
        <div className={styles.container}>
            <input
                id="search-product"
                className={styles.input}
                type="text"
                onChange={(e) => setInputText(e.target.value)}
                {...props}
            />
            <span className={styles.icon}>
                <SvgSearch />
            </span>
            {inputText.length > 0 && <ul className={styles.productsList}>
                {filteredProducts.map(({ id, name, image_url, category, price_in_cents }: ProductInfoType) =>
                    <Item
                        key={`item-${id}`}
                        id={id}
                        name={name}
                        image_url={image_url}
                        category={category}
                        price_in_cents={price_in_cents}
                        description=''
                    />)}
            </ul>}
        </div>
    );
}

function Item({ id, name, category, image_url, price_in_cents }: ProductInfoType) {

    const router = useRouter();

    return (
        <li style={{ display: 'flex' }}>
            <button className={styles.itemContainer} onClick={() => router.push(`/product/${id}`)}>
                <img className={styles.itemImage} src={image_url} alt={`image-${name}`} />
                <div className={styles.itemInfo}>
                    <h1>{name}</h1>
                    <h2>{category}</h2>
                </div>
                <div className={styles.itemPrice}>
                    <p>{formatPrice(price_in_cents)}</p>
                </div>
            </button>
        </li>
    )
}

export default SearchBar;