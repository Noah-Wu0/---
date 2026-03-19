import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h3>新疆西传数字科技有限公司</h3>
          <p>深耕新疆地区的数字信息化建设本地优质集成商</p>
        </div>
        <div className={styles.links}>
          <div className={styles.linkGroup}>
            <h4>快速链接</h4>
            <a href="/solutions">解决方案</a>
            <a href="/cases">成功案例</a>
            <a href="/about">关于我们</a>
          </div>
          <div className={styles.linkGroup}>
            <h4>联系我们</h4>
            <p>地 址：新疆维吾尔自治区</p>
            <p>电 话：400-XXX-XXXX</p>
            <p>邮 箱：contact@xcdigital.example.com</p>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} 新疆西传数字科技有限公司 版权所有</p>
      </div>
    </footer>
  );
}
