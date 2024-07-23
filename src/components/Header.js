import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => (
    <header className={styles.header}>
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href="/">Главная</Link>
                </li>
                <li>
                    <Link href="/about">О нас</Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;