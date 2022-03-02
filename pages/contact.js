import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Contact.module.css';
import linkedinImg from '../media/linkedin-logo.webp';
import emailImg from '../media/email.webp';

export default function Contact(props) {

    const { t } = useTranslation();


    return (
        <div className={`${styles.pageContent} parent-page-id `} id="contact" >
            <div className="col gap-2 align-center">
                <h1 className={styles.title}>{t('work-together')}</h1>
                <div className="row flex-wrap just-center pad-1 align-start">
                    <a href='https://www.linkedin.com/in/jecksonschwengber/' className={styles.contactLink}>
                        <div>
                            <Image src={linkedinImg} />
                        </div>
                        @jecksonschwengber
                    </a>
                    <a href='mailto:jeckson.es@gmail.com' className={styles.contactLink}>
                        <div>
                            <Image src={emailImg} />
                        </div>
                        jeckson.es@gmail.com
                    </a>
                </div>
            </div>
        </div>
    )
}