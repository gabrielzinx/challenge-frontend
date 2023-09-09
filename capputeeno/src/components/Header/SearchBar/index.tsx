import { InputHTMLAttributes } from 'react';
import { SvgSearch } from '@/components/Icons';
import styles from './styles.module.css';

function SearchBar(props: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div className={styles.container}>
            <input className={styles.input} type="text" {...props} />
            <span className={styles.icon}>
                <SvgSearch />
            </span>
        </div>
    );
}

export default SearchBar;