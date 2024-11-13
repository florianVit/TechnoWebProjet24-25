import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav} aria-label="Main Navigation">
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <Link href="/" className={styles.navLink}>
                            Home
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/authors" className={styles.navLink}>
                            Authors
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/books" className={styles.navLink}>
                            Books
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
