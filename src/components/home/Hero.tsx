import Script from 'next/script';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Load Spline Vanilla Web Component for better performance */}
      <Script 
        type="module" 
        src="https://unpkg.com/@splinetool/viewer@1.12.69/build/spline-viewer.js" 
        strategy="lazyOnload"
      />

      <div className={styles.container}>
        {/* Left: Text Content */}
        <div className={styles.contentBox}>
          <div className={styles.badge}>
            <span className={styles.dot}></span>
            XINJIANG DIGITAL INTEGRATOR
          </div>
          <h1 className={styles.title}>
            传递<span className={styles.highlight}>温度</span><br />
            传递<span className={styles.highlight}>科技</span>
          </h1>
          <p className={styles.subtitle}>
            深耕新疆地区数字信息化建设。为政务垂管、医疗、公安行业提供硬核安全与秒级响应的本地化生态集成方案，构筑极稳数字底盘。
          </p>
          <div className={styles.action}>
            <a href="/solutions" className={styles.neonBtn}>
              探索解决方案 <span className={styles.arrowButton}>↗</span>
            </a>
          </div>
        </div>

        {/* Right: Spline 3D Scene */}
        <div className={styles.splineBox}>
          {/* @ts-ignore */}
          <spline-viewer url="https://prod.spline.design/oA-RxhKnyxtM8AUi/scene.splinecode"></spline-viewer>
        </div>
      </div>
    </section>
  );
}
