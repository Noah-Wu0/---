import styles from '../solutions/page.module.css';

export default function Contact() {
  return (
    <main className={styles.main}>
      <header className={styles.banner}>
        <div className={styles.bannerContent}>
          <h1 className={styles.title}>联系我们 / CONTACT</h1>
          <p className={styles.subtitle}>新疆本地 7×24 小时金牌驻场支援，期待为您效劳</p>
        </div>
        <div className={styles.glow}></div>
      </header>
      <section className={styles.content}>
        <div className={styles.placeholderBox}>
          <h2>商务合作通道及服务网点地图正在接入</h2>
          <p>请返回首页或期待功能解锁</p>
        </div>
      </section>
    </main>
  );
}
