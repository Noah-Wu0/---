import styles from '../solutions/page.module.css';

export default function About() {
  return (
    <main className={styles.main}>
      <header className={styles.banner}>
        <div className={styles.bannerContent}>
          <h1 className={styles.title}>关于我们 / ABOUT</h1>
          <p className={styles.subtitle}>扎根本地科技服务市场，凭借顶级大厂生态护航商业创新</p>
        </div>
        <div className={styles.glow}></div>
      </header>
      <section className={styles.content}>
        <div className={styles.placeholderBox}>
          <h2>企业价值观与顶级合伙伙伴矩阵全景</h2>
          <p>请返回首页或期待功能解锁</p>
        </div>
      </section>
    </main>
  );
}
