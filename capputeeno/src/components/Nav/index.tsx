'use client';

import { FilterType } from '@/types/filter-types';
import { FilterContext } from '../../contexts/filter-context';
import styles from './styles.module.css';
import { useContext } from 'react';

export default function Nav() {

    const { type, setType } = useContext(FilterContext);

    return (
        <nav className={styles.container}>
            <ul className={styles.list}>
                <li>
                    <button
                        className={type === FilterType.all ? styles.selected : ""}
                        onClick={() => setType(FilterType.all)}
                    >
                        Todos os produtos
                    </button>
                </li>
                <li>
                    <button
                        className={type === FilterType.shirt ? styles.selected : ""}
                        onClick={() => setType(FilterType.shirt)}
                    >
                        Camisetas
                    </button>
                </li>
                <li>
                    <button
                        className={type === FilterType.mug ? styles.selected : ""}
                        onClick={() => setType(FilterType.mug)}
                    >
                        Canecas
                    </button>
                </li>
            </ul>
            <div className={styles.actions}>
                <p>Em desenvolvimento...</p>
            </div>
        </nav>
    )
}