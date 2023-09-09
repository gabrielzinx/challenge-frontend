import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import { SvgShoppingBag } from "@/components/Icons";
import ButtonShoppingBag from "@/components/ButtonShoppingBag";
import styles from './styles.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href={"/"} className={styles.title}>Capputeeno</Link>
            </div>
            <div className={styles.actions}>
                <SearchBar placeholder="Procurando por algo específico?" />
                <ButtonShoppingBag />
            </div>
        </header>

    )
}