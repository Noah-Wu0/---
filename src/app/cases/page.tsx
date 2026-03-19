import styles from '../solutions/page.module.css';

export default function Cases() {
  return (
    <main className={styles.main}>
      <header className={styles.banner}>
        <div className={styles.bannerContent}>
          <h1 className={styles.title}>成功案例 / CASES</h1>
          <p className={styles.subtitle}>百余个高净值项目经验，这是拿单验证过的真正交付实力</p>
        </div>
        <div className={styles.glow}></div>
      </header>
      <section className={styles.content}>
        <div className={styles.placeholderBox}>
          <h2>标杆级客户落地见证即刻上线</h2>
          <p>请返回首页或期待功能解锁</p>
        </div>
      </section>
    </main>
  );
}
