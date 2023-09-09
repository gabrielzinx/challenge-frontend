'use client'

import Link from 'next/link';
import { SvgShoppingBag } from '@/components/Icons';
import { useCart } from '@/contexts/cart-context';
import styles from './styles.module.css';

export default function ButtonShoppingBag() {

    const { cart } = useCart();

    return (
        <Link href="/cart" className={styles.container}>
            <SvgShoppingBag />
            <span className={styles.itemCount}>{cart.length}</span>
        </Link>
    );
}
