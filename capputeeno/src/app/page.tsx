'use client'

import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Pagination from "@/components/Pagination";
import ProductCard from "@/components/ProductCard";

import { FilterContext } from "@/contexts/filter-context";
import { FilterType } from "@/types/filter-types";
import { PriorityTypes } from "@/types/priority-types";
import { ProductCardType } from "@/types/product-types";
import { useContext, useEffect, useState } from "react";

export default function HomePage() {

    const [products, setProducts] = useState<ProductCardType[]>([]);
    const { type, priority, page } = useContext(FilterContext);

    const pageNumbers = Array.from({ length: 12 }, (_, index) => index + 1);

    const categoryFilter =
        type !== FilterType.ALL ? (type === FilterType.MUG ? "mugs" : "t-shirts") : "";

    const sortField =
        priority === PriorityTypes.NEWS
            ? "created_at"
            : priority === PriorityTypes.POPULARITY
                ? "sales"
                : priority === PriorityTypes.BIGGEST_PRICE ||
                    priority === PriorityTypes.LOWEST_PRICE ? "price_in_cents": "_";

    const sortOrder = priority === PriorityTypes.BIGGEST_PRICE ? "CSA" : "ASC";

    const graphqlQuery = `{
        allProducts (
            filter: {
                ${categoryFilter ? `category: "${categoryFilter}"` : ""}
            }
            sortField: ${sortField && `"${sortField}"`}
            sortOrder: "${sortOrder}"
            page: ${page}
            perPage: ${type === FilterType.ALL ? 12 : 10}
        ) {
            id
            name
            image_url
            price_in_cents
            created_at
            sales
        }
    }`;

    useEffect(() => {

        async function getData() {

            const encodedQuery = encodeURIComponent(graphqlQuery);
            const url = `${process.env.NEXT_PUBLIC_API_URL}/query?query=${encodedQuery}`;

            const response = await fetch(url);
            const { data } = await response.json();

            setProducts(data.allProducts);
        }

        getData();
    }, [type, priority, page])

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
                <Nav />
                <Pagination />
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
            </div>
        </main>
    )
}