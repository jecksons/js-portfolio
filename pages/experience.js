import styles from '../styles/Experience.module.css';
import backImg from '../media/milky-way.webp';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import rocketImg from '../media/rocket.webp';
import saturnImg from '../media/saturn.webp';
import { useState } from 'react';


const CurrentXpItem =  {
    current: true,
    place: 'Free Lancer',
    office: 'software-engineer',
    duration: 'ago-20-now',
    tasks: [
        'maintenance-management-solutions',
        'institutional-websites',
        'plantation-solution'
    ],
    techs: [
        'React',
        'Next.js',
        'React Native',
        'JavaScript',
        'HTML',
        'CSS',
        'Node.js',
        'My SQL',
        'PostgreSQL',
        'Jest',
        'MongoDB',
        'NGINX',
        'Git',
        'Docker',
        'Express'
    ]
};

const ExperienceItems = [
    CurrentXpItem,
    {
        current: false,
        place: 'Genesys Engenharia de Software LTDA',
        office: 'software-engineer',
        duration: 'sep-15-dec-21',
        tasks: [
            'tech-leader',
            'framework-building',
            'constant-inovation',
            'maintenance-products',
            'tech-planning',
            'acting-stacks'
        ],
        techs: [
            'React',
            'C#',
            'ASP.NET',
            'JavaScript',
            'HTML',
            'CSS',
            'Flutter',
            'PL/SQL',
            'Oracle',
            'Delphi',
            'Git',
            'SourceSafe'
        ]
    },
    {
        current: false,
        place: 'Altero Design',
        office: 'analyst-developer',
        duration: 'may-10-ago-15',
        tasks: [
            'dev-own-software',
            'sap-integration',
            'process-improvement',
            'dba-services'
        ],
        techs: [
            'SAP',
            'ABAP',
            'Oracle',
            'PL/SQL',
            'Delphi',
            'MS SQL Server',
            'SVN'
        ]
    },
    {
        current: false,
        place: 'Newgraph',
        office: 'analyst-developer',
        duration: 'nov-2009-mai-2010',
        tasks: [
            'dev-mechanical',
            'automation-g-code',
            'sigmanest'
        ],
        techs: [
            'Delphi',
            'VB.Net',
            'G-Code',
            'SigmaNEST',
            'SVN'
        ]
    },
    {
        current: false,
        place: 'Varkon Softwares',
        office: 'software-engineer',
        duration: 'jun-2009-nov-2009',
        tasks: [
            'delphi-outsource'
        ],
        techs: [
            'Delphi',
            'SAP',
            'SigmaNEST',
            'Oracle',
            'Java',
            'MS SQL Server',
            'SourceSafe'
        ]
    },
    {
        current: false,
        place: 'Rede Industrial',
        office: 'analyst-developer',
        duration: 'jan-2008-jun-2009',
        tasks: [
            'dev-maintenance-delphi',
        ],
        techs: [
            'Delphi',
            'Oracle',
            'Firebird'
        ]
    }
]


function ExperienceDetail({data}) {

    const { t } = useTranslation();

    return (
        <li className={styles.xpCard}>
            <div className={styles.xpTitle}>
                <label >{t(data.office)}</label>
            </div>
            <div className={styles.xpIcon}>
                <Image  src={data.current ? rocketImg : saturnImg} />
            </div>
            <section className='col-1 align-start '>
                <div className={`row-05 flex-wrap align-end `}>
                        <label className='color-black-2 font-bold'>{t(data.place)}</label>
                        <label className='color-grey font-75'>| {t(data.duration)}</label>
                </div>
                <div className={styles.xpCardContent}>
                    <ul className={styles.listTask} >
                        {data.tasks.map((itm, idx) =>  <li key={idx} className='color-black-2' >{t(itm)};</li>)}
                    </ul>
                    <ul className={styles.listTechs}>
                        {data.techs.map((itm, idx) => <li key={idx} className='color-black-2' >{itm}</li>)}
                    </ul>
                </div>
                
            </section>

        </li>
    )
}

function reduceItems(total, item, idx) {
    total[((idx+1) % 2)].push(item);
    return total;
}

export default function Experience(props) {

    const [splitItems] = useState( ExperienceItems.reduce(reduceItems, [[], []]) );   

    return (
        <div className={`${styles.parentPage} parent-page-id `} id="experience">
            <div className={styles.wrapperImage}>
                <div className={styles.parentImage}>                    
                    <Image  src={backImg} layout="fill" objectFit="cover"  />
                </div>
            </div>                       
            <div className='row just-center'>
                <ul className={`${styles.xpItems} ${styles.xpColA} `}>
                    {splitItems[0].map((itm, idx) => <ExperienceDetail key={idx} data={itm} /> )}
                </ul>
                <ul className={`${styles.xpItems} ${styles.xpColB} `}>
                    {splitItems[1].map((itm, idx) => <ExperienceDetail key={idx} data={itm} /> )}
                </ul>
                <ul className={`${styles.xpItems} ${styles.xpColSingle} `}>
                    {ExperienceItems.map((itm, idx) => <ExperienceDetail key={idx} data={itm} /> )}
                </ul>
            </div>             
        </div>
    )
}