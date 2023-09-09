'use client'

import { useState, useRef, useEffect, useContext } from 'react';
import { SvgArrowDown } from '@/components/Icons';
import styles from './styles.module.css';
import { FilterContext } from '../../../contexts/filter-context';
import { PriorityTypes } from '@/types/priority-types';

export default function SelectPriority() {

    const [isOpen, setOpen] = useState(false);
    const { priority, setPriority } = useContext(FilterContext);
    const selectRef = useRef<HTMLDivElement | null>(null);

    const PriorityTexts = {
        [PriorityTypes.NEWS]: "Novidades",
        [PriorityTypes.BIGGEST_PRICE]: "Preço: Maior - Menor",
        [PriorityTypes.LOWEST_PRICE]: "Preço: Menor - Maior",
        [PriorityTypes.POPULARITY]: "Mais Vendidos"
    }

    const handlePriority = (value: PriorityTypes) => {
        setPriority(value);
        setOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.container} ref={selectRef}>
            <button
                className={styles.container}
                onClick={() => setOpen(!isOpen)}
            >
                <span className={styles.text}>{priority ? PriorityTexts[priority] : "Organizar por"}</span>
                <SvgArrowDown style={{ cursor: 'pointer' }} />
            </button>
            {isOpen && <ul className={styles.list}>
                <button onClick={() => handlePriority(PriorityTypes.NEWS)}>Novidades</button>
                <button onClick={() => handlePriority(PriorityTypes.BIGGEST_PRICE)}>Preço: Maior - Menor</button>
                <button onClick={() => handlePriority(PriorityTypes.LOWEST_PRICE)}>Preço: Menor - Maior</button>
                <button onClick={() => handlePriority(PriorityTypes.POPULARITY)}>Mais Vendidos</button>
            </ul>}
        </div>
    )
}