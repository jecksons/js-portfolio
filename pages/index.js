import { useCallback, useEffect, useState } from "react";
import FixedMenu from "../components/fixed-menu";
import AboutMe from "./about-me";
import Apresentation from "./apresentation";
import Contact from "./contact";
import Experience from "./experience";
import SolutionBuilder from "./solution-builder";


export default function Home() {

    useEffect(() => {
        document.title = "Jéckson Schwengber"
    }, []);

    const refTimeoutCurrSection = useState(null);

    const [currSection, setCurrSection] = useState('home');

    const getCurrSection = useCallback(() => {

        if (refTimeoutCurrSection.current) {
            clearTimeout(refTimeoutCurrSection.current);
        }
        refTimeoutCurrSection.current = setTimeout(() => {
            const el = document.elementFromPoint(window.innerWidth / 2, 100);
            if (el) {
                const par = el.closest('div.parent-page-id');
                if (par) {
                    if (par.id) {
                        setCurrSection(par.id);
                    }
                }
            }            
        }, [200]);

        
    }, [refTimeoutCurrSection, setCurrSection]);

    useEffect(() => {
        getCurrSection();
        window.onscroll = () => getCurrSection();
        return () => window.onscroll = null;
    }, [getCurrSection]);


    return (
        <div className="pos-relative">
            <FixedMenu currentMenu={currSection} />
            <Apresentation />
            <AboutMe />
            <SolutionBuilder />
            <Experience />
            <Contact />
        </div>
    )
}
