import styles from './Features.module.css';

export default function Features() {
  const features = [
    { num: '01', title: '硬核安全底座', desc: '深入等保与数据安全场景，为干系业务筑牢政企数字防线。' },
    { num: '02', title: '本地秒级响应', desc: '扎根新疆本土，提供 7×24 小时金牌驻场支援与全时护航。' },
    { num: '03', title: '强悍生态集成', desc: '与阿里、海康等头部大厂深度战略协同，全链路交付闭环。' },
  ];

  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Why Choose Us</h2>
          <p>为什么选择西传数字作为您的数字化转型合伙人？</p>
        </div>
        <div className={styles.bentoGrid}>
          {features.map((f, i) => (
            <div key={i} className={`bento-card ${styles.card}`}>
              <span className={styles.hugeNum}>{f.num}</span>
              <div className={styles.cardContent}>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
