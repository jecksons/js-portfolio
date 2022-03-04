import { t } from 'i18next';
import Image from 'next/image';
import { useEffect, useState, useRef, useCallback } from 'react';
import { useTranslation } from "next-i18next";
import styles from '../styles/Projects.module.css';
import jktrackerImg from '../media/jktracker.webp';
import tobyourselfImg from '../media/2byourself.webp';
import playImg from '../media/play.webp';
import githubImg from '../media/github.webp';
import reactImg from '../media/react.webp';
import jsImg from '../media/js.webp';
import mysqlImg from '../media/mysql.webp';
import figmaImg from '../media/figma.webp';
import nodeImg from '../media/node.webp';
import expressImg from '../media/express.webp';
import * as gtag from '../components/analytics-controller';

const ProjectItems = [
    {
        title: 'JkTracker',
        address: 'jktracker.jeckson.me',
        description: 'jktracker-description',
        sources: 'https://github.com/jecksons/jktracker',
        image: 0,
        features: [
            'track-worked-time',
            'task-creation',
            'task-management',
            'budget-time',
            'worked-time'
        ],
        repository: 'https://github.com/jecksons/jktracker',
        tools: [
            'react',
            'js',
            'node',
            'mysql',
            'express',
            'figma'
        ]
    },
    {
        title: '2BYourself',
        address: '2byourself.jeckson.me',
        description: '2byourself-description',
        sources: 'https://github.com/jecksons/2byourself',
        image: 1,
        features: [
            'product-categorizing',
            'offer-control',
            'coupon-control',
            'orders-control',
            'all-ecommerce-features'
        ],
        repository: 'https://github.com/jecksons/2byourself',
        tools: [
            'react',
            'js',
            'node',
            'mysql',
            'express',
            'figma'
        ]
    }
]

function getToolImg(tool) {
    if (tool === 'js') return jsImg;
    if (tool === 'mysql') return mysqlImg;
    if (tool === 'figma') return figmaImg;
    if (tool === 'node') return nodeImg;
    if (tool === 'express') return expressImg;
    return reactImg;
}

function ProjectCard({project, onPauseToggle}) {

    const onClickProjectLink = useCallback(() => {
        gtag.event({
            category: 'Projects',
            action: 'Access',
            label: project.title
        });
    }, [project]);

    const onClickSources = useCallback(() => {
        gtag.event({
            category: 'Projects',
            action: 'Sources',
            label: project.title
        });
    }, [project]);

    return (
        <article className={styles.projectCard}  onMouseEnter={() => onPauseToggle(true)} onMouseLeave={() => onPauseToggle(false)} >            
            <div className='col-05 align-start'>
                <h3 className='color-black-2 font-125 font-bold'>{t(project.title)}</h3>
                <a onClick={onClickProjectLink}  className='color-grey no-decoration font-bold font-87' target="_blank" rel='noopener noreferrer'  href={`https://${project.address}`} >{project.address}</a>
            </div>
            <div className={styles.imgPreview}>
                <div className={styles.imgPreviewContainer}>
                    <Image alt='project preview' layout='fill' objectFit='cover' src={project.image === 0 ? jktrackerImg : tobyourselfImg} />                
                </div>
                <div className={styles.imgPreviewOverlay}>
                    <label>{t('try-it')}  </label>
                </div>
                <a  onClick={onClickProjectLink} className={styles.playButton} target="_blank" rel='noopener noreferrer' href={`https://${project.address}`} >
                    <div> </div>
                    <Image className={styles.playImg} alt='access project' src={playImg} />
                </a>
            </div>            
            <p>{t(project.description)}</p>
            <div className='col color-black-2 align-start'>
                <p>{t('project-features')}</p>
                <ul className={styles.projectFeatures}>
                    {project.features.map((itm, idx) => <li key={idx}>{t(itm)};</li>)}
                </ul>
            </div>
            <div className='row-1 align-end flex-wrap flex-1'>
                <ul className={styles.toolList}>
                    {project.tools.map((itm, idx) => {
                        const img = getToolImg(itm);
                        return <li key={idx}><Image alt='tool' src={img} /> </li>;
                    } )}
                </ul>
                <a onClick={onClickSources} className={`btn ${styles.btnSource}`} target="_blank" rel='noopener noreferrer' href={project.sources} >
                    <Image className={styles.playImg} alt='access project' src={githubImg} />
                    {t('sources')}
                </a>                
            </div>
        </article>
    )
}


function ProjectThumb({project, selected, onSelect}) {

    return (
        <div className={styles.parentThumb}>
            <div className={`${styles.projectThumb} ${selected ? styles.projectThumbselected : ''}`}
            onMouseEnter={() => onSelect(project)}        
                >
                    <span></span>
                    <div style={{width: 400, height: 400}}>
                        <Image alt='project preview'  src={project.image === 0 ? jktrackerImg : tobyourselfImg} />                
                    </div>
                </div>
        </div>
    );
}

export default function Projects(props) {

    const { t } = useTranslation();
    const [currProject, setCurrProject] = useState(ProjectItems[0]);
    const refTimerToggle = useRef(null);

    const handlePauseToggle = useCallback((pause) => {
        if (refTimerToggle.current) {
            clearInterval(refTimerToggle.current);
            refTimerToggle.current = null;
        }
        if (!pause) {
            refTimerToggle.current = setInterval(
                () => setCurrProject(p => p === ProjectItems[0] ? ProjectItems[1] : ProjectItems[0] , 
                    ), 4000);            
        }
    }, [refTimerToggle]);

    useEffect(() => {
        handlePauseToggle(false);        
        return () => handlePauseToggle(true);
    }, [handlePauseToggle]);



    const manualSelectItem = useCallback((item) => {
        handlePauseToggle(false);
        setCurrProject(item);
    }, [refTimerToggle, setCurrProject]);

    return (
        <div className={`${styles.pageContent} parent-page-id `} id="projects" >
            <h1 className={styles.title}>{t('projects')}</h1>
            <div className={styles.centerContent} >                
                <div className={styles.normalContent}>
                    <div className={styles.parentProjectList}>
                        <ul className={styles.projectList}>                    
                            {ProjectItems.map((itm, idx) => <ProjectThumb key={idx} project={itm}  selected={itm.title === currProject.title}  onSelect={manualSelectItem}  /> )}
                        </ul>
                    </div>                
                    <div className={styles.parentProject}>
                        <ProjectCard project={currProject} onPauseToggle={handlePauseToggle} />                   
                    </div>                
                </div>
                <div className={styles.mobileContent}>
                    <ul className={styles.projectContinuousList}>                    
                        {ProjectItems.map((itm, idx) => <ProjectCard project={itm} key={idx} />  )}
                    </ul>
                </div>
            </div>
        </div>
    )
}