import PageContent from "../components/page-content";
import styles from "../styles/Apresentation.module.css";
import logo from '../media/logo.png';
import brazilFlag from '../media/brazil.png';
import usFlag from '../media/united-states.png';
import photoBig from '../media/photo-big.webp';
import Image from 'next/image';
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

export default function Apresentation(props) {

    const { t, i18n } = useTranslation();    

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
                            <button className="btn" onClick={() => i18n.changeLanguage('en-US')}>
                                <Image src={usFlag} width={32}  alt="usa flag" />
                            </button>
                            <button className="btn" onClick={() => i18n.changeLanguage('pt-BR')}>
                                <Image src={brazilFlag} width={32} alt="brazil flag" />
                            </button>
                        </section> 
                    </div>                    
                </header>
                <div className={styles.backImage}>
                    <Image src={photoBig} layout="responsive" alt="author" />
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
                        <a className="btn-action">{t('my-projects')} </a>
                    </div>
                </article>                               
            </div>                        
        </PageContent>
    )

}