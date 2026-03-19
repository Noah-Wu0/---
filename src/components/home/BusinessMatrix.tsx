import Image from 'next/image';
import Link from 'next/link';
import styles from './BusinessMatrix.module.css';

export default function BusinessMatrix() {
  const matrix = [
    { label: 'GOV / TO G', title: '政务与垂管治理', desc: '打造横向到边、纵向到底的治理信息化中枢，助力数字政府建设。', img: '/gov_tech.png', link: '/solutions' },
    { label: 'HEALTHCARE', title: '医疗数字底座', desc: '智慧医院建设、医共体平台及核心业务数据全生命周期管理。', img: '/health_tech.png', link: '/solutions' },
    { label: 'PUBLIC SECURITY', title: '公安智防与巡检', desc: '依托无人机与安防物联生态，铸就立体化视觉防控大脑。', img: '/security_tech.png', link: '/solutions' },
  ];

  return (
    <section className={styles.matrix}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Core Matrix</h2>
          <p>主营业务架构：融合前沿科技，重塑产业动能</p>
        </div>
        <div className={styles.bentoGrid}>
          {matrix.map((m, i) => (
            <Link key={i} href={m.link} className={`bento-card ${styles.card} ${styles['card' + i]}`}>
              <div className={styles.cardContent}>
                <div className={styles.label}>{m.label}</div>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
                <div className={styles.action}>
                  <div className={styles.exploreBtn}>了解详情 <span>↗</span></div>
                </div>
              </div>
              <div className={styles.cardImage}>
                <Image src={m.img} alt={m.title} fill sizes="(max-width: 768px) 100vw, 800px" className={styles.img} priority={i === 0} />
                <div className={styles.photoFilter}></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
