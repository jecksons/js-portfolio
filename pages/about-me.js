import { useTranslation } from "react-i18next";
import PageContent from "../components/page-content";
import styles from '../styles/AboutMe.module.css';
import laptopImg from '../media/laptop.webp';
import photoImg from '../media/photo-small.webp';
import Image from "next/image";

const ProfessionalStats = [
    'self-manageable',
    'best-practices',
    'inovational',
    'accessible',
    'focused',
    'easy-learning'
]

export default function AboutMe(props) {

    const { t } = useTranslation();

    return (
        <PageContent backColor={'#FAFAFA'} >
            <div className={`${styles.contentParent}  parent-page-id`} id='about-me' >
                <header>
                    <h1 className="page-title color-black-2">{t('about-me')}</h1>
                </header>
                <section className={styles.bodyParent}>
                    <div className={styles.imgParent}>
                        <div className={styles.imgLaptop}>
                            <Image src={laptopImg} alt="laptop" />
                        </div>
                        <div className={styles.imgPhoto}>
                            <Image src={photoImg} alt="author" />
                        </div>
                    </div>
                    <div className="flex-1 col-05">
                        <p className={`color-black-2 font-125 text-justify`}>{t('about-me-text')}</p>
                        <ul className={styles.profStats}>
                            {ProfessionalStats.map((itm, idx) => <li key={idx} className="color-black-2 line-height-2 font-125" >{t(itm)};</li> )}
                        </ul>
                    </div>
                </section>
            </div>
            
        </PageContent>
    )
}