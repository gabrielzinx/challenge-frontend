'use client';

import { useContext } from 'react';
import { FilterType } from '@/types/filter-types';
import { FilterContext } from '../../contexts/filter-context';

import SelectPriority from '../SelectPriority';
import styles from './styles.module.css';

export default function Nav() {

    const { type, setType } = useContext(FilterContext);

    return (
        <nav className={styles.container}>
            <ul className={styles.list}>
                <li>
                    <button
                        className={type === FilterType.ALL ? styles.selected : ""}
                        onClick={() => setType(FilterType.ALL)}
                    >
                        Todos os produtos
                    </button>
                </li>
                <li>
                    <button
                        className={type === FilterType.SHIRT ? styles.selected : ""}
                        onClick={() => setType(FilterType.SHIRT)}
                    >
                        Camisetas
                    </button>
                </li>
                <li>
                    <button
                        className={type === FilterType.MUG ? styles.selected : ""}
                        onClick={() => setType(FilterType.MUG)}
                    >
                        Canecas
                    </button>
                </li>
            </ul>
            <div className={styles.actions}>
                <SelectPriority />
            </div>
        </nav>
    )
}