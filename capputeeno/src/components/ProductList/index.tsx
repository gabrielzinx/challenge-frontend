'use client'

import { FilterContext } from "@/contexts/filter-context";
import { ProductCardType } from "@/types/product-types";
import { useState, useContext, useEffect } from "react";

import ProductCard from "@/components/ProductCard";
import graphqlQuery from "@/utils/graphql-query";

export default function ProductList() {

    const [products, setProducts] = useState<ProductCardType[]>([]);
    const { type, priority, page } = useContext(FilterContext);

    useEffect(() => {

        async function getProductsData() {

            const encodedQuery = encodeURIComponent(
                graphqlQuery({ type, priority, page })
            );
            const url = `${process.env.NEXT_PUBLIC_API_URL}/query?query=${encodedQuery}`;

            const response = await fetch(url);
            const { data } = await response.json();

            setProducts(data.allProducts);
        }

        getProductsData();
    }, [type, priority, page]);
    
    return (
        <ul style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '84%',
            flexWrap: 'wrap',
            paddingBlock: '32px',
            gap: '32px',
            maxWidth: '1120px',
        }}>
            {products.map(({ id, name, image_url, price_in_cents, created_at, sales }) => {
                return <ProductCard
                    key={`product-card-${type}-${id}`}
                    id={id}
                    name={name}
                    image_url={image_url}
                    price_in_cents={price_in_cents}
                    created_at={created_at}
                    sales={sales}
                />
            })}
        </ul>
    )
}