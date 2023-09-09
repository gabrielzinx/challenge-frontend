'use client'

import { useContext, useEffect } from "react";
import { FilterContext } from "../../../contexts/filter-context";
import { FilterType } from "@/types/filter-types";
import { SvgArrowLeft, SvgArrowRight } from "../../Icons";
import styles from './styles.module.css';

export default function Pagination() {

    const { type, page, setPage } = useContext(FilterContext);

    const pageNumbers = Array.from({ length: type === FilterType.ALL ? 5 : 3 }, (_, index) => index + 1);

    useEffect(() => {
        setPage(0);
    }, [type]);


    const incrementPage = () => {
        if (page < pageNumbers.length - 1) {
            setPage(page + 1);
        }
    };

    const decrementPage = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    }

    return (
        <ul className={styles.container}>
            {pageNumbers.map((i) => {
                return (
                    <li key={`pagination-item-${i}`}>
                        <button
                            className={`
                                ${styles.item}
                                ${page === i - 1 && styles.selected}
                            `}
                            onClick={() => setPage(i - 1)}
                        >
                            {i}
                        </button>
                    </li>
                )
            })}
            <li>
                <button className={styles.item} onClick={decrementPage}>
                    <SvgArrowLeft />
                </button>
            </li>
            <li>
                <button className={styles.item} onClick={incrementPage}>
                    <SvgArrowRight />
                </button>
            </li>
        </ul >
    )
}