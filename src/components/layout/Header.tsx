import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoGroup}>
          <Link href="/" className={styles.logoLink}>
            <Image 
              src="/logo.jpg" 
              alt="西传数字 Logo" 
              width={48} 
              height={48} 
              className={styles.logoImg}
            />
            <span className={styles.brandName}>西传数字</span>
          </Link>
        </div>
        
        <nav className={styles.nav}>
          <Link href="/">首 页</Link>
          <Link href="/solutions">解决方案</Link>
          <Link href="/cases">成功案例</Link>
          <Link href="/about">关于我们</Link>
        </nav>
        
        <div className={styles.cta}>
          <Link href="/contact" className={styles.contactBtn}>
            联系我们 <span className={styles.arrow}>↗</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
