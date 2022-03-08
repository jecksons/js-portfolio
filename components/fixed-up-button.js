import Image from "next/image";
import { Link } from "react-scroll";
import icon from '../media/up-arrow.webp';

export default function FixedUpButton({show}) {
    
    return (
        <Link 
            to={'home'} 
            smooth={true} 
            className={`btn btn-up-screen ${show ? 'show' : ''}`}>
                <Image src={icon}  height={16} width={16}  alt="up" />
        </Link>        
    )

}