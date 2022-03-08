import Image from 'next/image';
import icon from '../media/menu-white.webp';
import iconClose from '../media/close.webp';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from "next-i18next";
import MenuItems from '../utils/menu-items';


export default function AppMenu({currentMenu, showSticky, onGoHome}) {

    const [isExpanded, setIsExpanded] = useState(false);    
    const { t }  = useTranslation();
    const [currMenuName, setCurrMenuName] = useState(() => t(MenuItems.find((itm) => itm.location === itm.currentMenu)?.caption));

    useEffect(() => {
        const itm = MenuItems.find((itm) => itm.location === currentMenu);
        setCurrMenuName(itm ? t(itm.caption) : '');
    }, [currentMenu, t])
    
    return (            
        <div className={`app-menu  ${showSticky ? 'sticky' : ''} `}>
            <div className='row-1 width-100 align-start pos-relative '>
                {showSticky && <label className='font-125 flex-1 font-bold' >{currMenuName}</label>}
                <button className={`btn app-menu-button ${isExpanded ? 'expanded' : ''}`}  onClick={() => setIsExpanded(p => !p)} >
                    <Image src={isExpanded ? iconClose : icon} height={24} width={24}  alt="menu" />
                </button>
                <div onClick={() => setIsExpanded(false)} className={`app-menu-overlay ${isExpanded ? 'expanded' : ''} ${showSticky ? 'sticky' : ''} `}> </div>
                <nav className={`app-menu-content ${isExpanded ? 'expanded' : ''}`}>
                    {MenuItems.map((itm, idx) => 
                        <Link 
                            key={idx} 
                            onClick={() => {                                
                                if (itm.location === 'home') {
                                    if (onGoHome) {
                                        onGoHome();                                    
                                    }                                    
                                }
                                setIsExpanded(false);
                            }}
                            to={itm.location} 
                            smooth={true} 
                            className={`btn btn-side-menu${currentMenu === itm.location ? '-current' : ''}`}>
                                {t(itm.caption)}
                        </Link> )}                    
                </nav>
            </div>
        </div>
    )
}