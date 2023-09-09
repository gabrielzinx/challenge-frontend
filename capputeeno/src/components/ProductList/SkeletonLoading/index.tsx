import styles from './styles.module.css';

export default function Loading() {
    const items = Array.from({ length: 12 }, (_, index) => index + 1)
    return (
        <>
            {items.map((i) => {
                return (
                    <article key={`skeleton-${i}`} className={styles.container}>
                        <div className={`${styles.image} ${styles.skeleton}`}></div>
                        <section className={styles.content}>
                            <div className={`${styles.title} ${styles.skeleton}`}></div>
                            <div className={styles.divisor}></div>
                            <div className={`${styles.sales} ${styles.skeleton}`}></div>
                        </section>
                    </article>
                )
            })}
        </>
    )
}