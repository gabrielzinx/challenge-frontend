import Link from "next/link";
import ButtonShoppingBag from "@/components/Buttons/ShoppingBag";
import styles from './styles.module.css';
import SearchBar from "./SearchBar";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.limiter}>
                <div className={styles.logo}>
                    <Link href={"/"} className={styles.title}>Capputeeno</Link>
                </div>
                <div className={styles.actions}>
                    <SearchBar placeholder="Procurando por algo específico?" />
                    <ButtonShoppingBag />
                </div>
            </div>
        </header>
    )
}