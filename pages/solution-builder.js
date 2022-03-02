import PageContent from "../components/page-content";
import styles from '../styles/SolutionBuilder.module.css';
import tableImg from '../media/table.webp';
import Image from "next/image";
import { useTranslation } from "react-i18next";

const SolutionSteps = [
    'solution-identify',
    'solution-solving',
    'solution-prototype',
    'solution-development',
    'solution-tests',
    'solution-delivery',
    'solution-post-delivery'
]

export default function SolutionBuilder(props) {

    const {t} = useTranslation();

    return (
        <div className={`${styles.parentPage} parent-page-id `}  id="solution-builder" >
            <div className={`${styles.wrapperImage} `} >
                <div className={styles.parentImage}>                    
                    <Image  src={tableImg} layout="fill" objectFit="cover"  />
                </div>
            </div>            
            <div className={styles.backArticle}>
                <article className={styles.contentArticle} >       
                    <h1 className="page-title color-black-2">{t('solution-builder')}</h1>             
                    <p className="color-black-2 font-125 text-justify">{t('solution-builder-text')}</p>
                    <div className="col align-center width-100">
                        <ul className={styles.stepList}>
                            {SolutionSteps.map((itm, idx) => <li  className={styles.solutionStep} key={idx}>{t(itm)}</li> )}                        
                        </ul>
                    </div>                    
                </article>
            </div>
            
        </div>
    )
}

