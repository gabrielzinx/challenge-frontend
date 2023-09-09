import styles from './styles.module.css';

export default function Loading() {
    return (
        <main className={styles.productInfo}>
            <div className={`${styles.productImage}`}>
                <span className={styles.skeleton}></span>
            </div>
            <article className={styles.productDetails}>
                <section>
                    <p className={`${styles.productCategory} ${styles.skeleton}`}></p>
                    <h1 className={`${styles.productName} ${styles.skeleton}`}></h1>
                    <h2 className={`${styles.productPrice} ${styles.skeleton}`}></h2>
                </section>

                <p className={`${styles.productShipping} ${styles.skeleton}`}></p>

                <section>
                    <h2 className={`${styles.productDescriptionTitle} ${styles.skeleton}`}></h2>
                    <p className={`${styles.productDescription} ${styles.skeleton}`}></p>
                    <p className={`${styles.productDescription} ${styles.skeleton}`}></p>
                    <p className={`${styles.productDescription2} ${styles.skeleton}`}></p>
                </section>

                <button className={`${styles.addToCartButton} ${styles.skeleton}`}>
                </button>
            </article>
        </main>
    )
}