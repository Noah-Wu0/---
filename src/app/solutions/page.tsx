import styles from './page.module.css';

export default function Solutions() {
  return (
    <main className={styles.main}>
      <header className={styles.banner}>
        <div className={styles.bannerContent}>
          <h1 className={styles.title}>解决方案 / SOLUTIONS</h1>
          <p className={styles.subtitle}>定制化落地政务、医疗与公安数字化应用场景，重铸生产力</p>
        </div>
        <div className={styles.glow}></div>
      </header>
      <section className={styles.content}>
        <div className={styles.placeholderBox}>
          <h2>三大核心解决方案体系矩阵正在为您部署</h2>
          <p>请返回首页或期待功能解锁</p>
        </div>
      </section>
    </main>
  );
}
