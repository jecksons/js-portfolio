import PageContent from "../components/page-content";
import styles from "../styles/Apresentation.module.css";
import logo from '../media/logo.png';
import brazilFlag from '../media/brazil.webp';
import usFlag from '../media/usa.webp';
import photoBig from '../media/photo-big.webp';
import photoSmall from '../media/photo-small.webp';
import LinkNext from 'next/link';
import Link from "react-scroll/modules/components/Link";
import Image from 'next/image';
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";


export default function Apresentation(props) {

    const { t} = useTranslation('common');    
    const router = useRouter();

    return (
        <PageContent>
            <div className={`${styles.parentApresentation} parent-page-id`}  id="home" >
                <header className="row-1 just-start" >
                    <div className={styles.imgLogo}>
                        <Image  src={logo} width={75} height={75} alt="logo" />
                    </div>
                    <div className="col-05 align-start">
                        <h1 className={styles.title}>Jéckson Schwengber</h1>
                        <h3 className={styles.subtitle}>JAVASCRIPT FULLSTACK SOFTWARE ENGINEER</h3>
                        <section className={styles.languageSelection}>
                            <LinkNext  href="/" locale={'en'}>
                                <button className="btn">
                                    <Image src={usFlag} width={32}  alt="usa flag" />
                                </button>
                            </LinkNext>
                            <LinkNext className="btn" href="/" locale={'pt'}>
                                <button className="btn">
                                    <Image src={brazilFlag} width={32} alt="brazil flag" />
                                </button>
                            </LinkNext>
                        </section> 
                    </div>                    
                </header>
                <div className={styles.backImage}>
                    <Image src={photoBig} layout="responsive" alt="author" />
                </div>
                <div className="row width-100 just-center">
                    <div className={styles.photoSmall}>
                        <Image src={photoSmall} alt="author-small" />
                    </div>
                </div>                
                <div className={styles.backShadow}> </div>
                <article className={`col-1 align-start ${styles.initialArticle}`}>
                    <div className="col-1   align-start">
                        <h4 className={styles.secondName}>JÉCKSON SCHWENGBER</h4>
                        <h2 className="font-bold">{t('javascript-engineer')} </h2>
                    </div>
                    <p >{t('first-note')}</p>
                    <div className="row-1 width-100 just-start">
                        <Link  to={'about-me'} smooth={true} className="btn-action">{t('who-i-am')}</Link>                        
                        <Link  to={'projects'} smooth={true} className="btn-action">{t('projects')}</Link>                                                
                    </div>
                </article>                               
            </div>                        
        </PageContent>
    )

}