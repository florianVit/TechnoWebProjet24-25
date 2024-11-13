import React from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.linksSection}>
                    <Link href="/terms" className={styles.footerLink}>
                        Terms of Service
                    </Link>
                    <Link href="/privacy" className={styles.footerLink}>
                        Privacy Policy
                    </Link>
                </div>
                <div className={styles.socialSection}>
                    <a
                        href="https://twitter.com"
                        className={styles.footerLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                    >
                        Twitter
                    </a>
                    <a
                        href="https://facebook.com"
                        className={styles.footerLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                    >
                        Facebook
                    </a>
                    <a
                        href="https://linkedin.com"
                        className={styles.footerLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        LinkedIn
                    </a>
                </div>
                <p className={styles.copyright}>
                    &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
