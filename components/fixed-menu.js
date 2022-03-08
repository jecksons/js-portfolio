import Image from 'next/image';
import icon from '../media/fast-forward.webp';
import { useState } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from "next-i18next";
import MenuItems from '../utils/menu-items';


export default function FixedMenu({currentMenu}) {

    const [isExpanded, setIsExpanded] = useState(false);
    const { t }  = useTranslation();
    
    return (            
        <div className='fixed-menu'>
            <div className='pos-relative' onMouseEnter={() => setIsExpanded(true)} onMouseLeave={() => setIsExpanded(false)} >
                <button className={`fixed-menu-button ${isExpanded ? 'expanded' : ''}`}  onClick={() => setIsExpanded(p => !p)} >
                    <Image src={icon} alt="menu" />
                    Menu
                </button>
                <nav className={ `fixed-menu-content ${isExpanded ? 'expanded' : ''}`}>
                    {MenuItems.map((itm, idx) => 
                        <Link 
                            key={idx} 
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