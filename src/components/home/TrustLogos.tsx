import styles from './TrustLogos.module.css';

export default function TrustLogos() {
  const logos = [
    { name: '深信服科技', label: '生态战略伙伴' },
    { name: '海康威视', label: '核心合作商' },
    { name: '阿里巴巴', label: '云生态伙伴' },
    { name: '天融信', label: '安全深度合作' },
  ];

  return (
    <section className={styles.trust}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>TRUSTED BY</h2>
          <p>精选顶级厂商资源，构筑高生态企业级底座</p>
        </div>
        
        <div className={styles.logoGrid}>
          {logos.map((logo, index) => (
            <div key={index} className={styles.logoItem}>
              <div className={styles.logoBox}>
                <span className={styles.name}>{logo.name}</span>
              </div>
              <span className={styles.label}>{logo.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
