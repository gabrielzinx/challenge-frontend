'use client'

import { useRouter } from "next/navigation";
import { SvgButtonBack } from "@/components/Icons";
import styles from './styles.module.css';

export default function ButtonBack() {

    const router = useRouter();

    return (
        <button onClick={() => router.back()} className={styles.button}>
            <SvgButtonBack />
            <span className={styles.text}>Voltar</span>
        </button>
    )
}