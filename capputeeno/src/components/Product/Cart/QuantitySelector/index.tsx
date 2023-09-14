'use client'

import { useEffect, useRef, useState } from "react";
import { SvgArrowDown } from "@/components/Icons";
import { ProductLocalStorageClient } from "..";
import styles from "./styles.module.css";

export default function QuantitySelector({ id, quantity, onQuantityChange }: ProductLocalStorageClient) {
    
    const [selectVisible, setSelectVisible] = useState(false);
    const selectRef = useRef<HTMLDivElement | null>(null);

    const numberList = Array.from({ length: 10 }, (_, index) => index + 1);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setSelectVisible(false);
            }
        }

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const handleQuantityClick = (selectedQuantity: number) => {
        setSelectVisible(false);
        onQuantityChange(id, selectedQuantity);
    };

    return (
        <div ref={selectRef} style={{ display: "flex" }}>
            <button className={styles.container} onClick={() => setSelectVisible(!selectVisible)}>
                <p>{quantity}</p>
                <SvgArrowDown />
            </button>
            {selectVisible && (
                <ul className={styles.numberList}>
                    {numberList.map((i) => (
                        <li key={`number-select-${i}-from-${id}`}>
                            <button onClick={() => handleQuantityClick(i)}>{i}</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
