import Link from "next/link";
import { SvgShoppingBag } from "../Icons";
import SearchBar from "../SearchBar";
import styles from './styles.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href={"/"} className={styles.title}>Capputeeno</Link>
            </div>
            <div className={styles.actions}>
                <SearchBar placeholder="Procurando por algo específico?" />
                <SvgShoppingBag />
            </div>
        </header>

    )
}