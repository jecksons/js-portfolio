import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import FixedMenu from "../components/fixed-menu";
import AboutMe from "./about-me";
import Apresentation from "./apresentation";
import Contact from "./contact";
import Experience from "./experience";
import SolutionBuilder from "./solution-builder";
import ReactGA from 'react-ga';
import Projects from "./projects";

ReactGA.initialize('G-KL372Z16P3');

export default function Home() {
        
    const refTimeoutCurrSection = useState(null);

    const [currSection, setCurrSection] = useState('home');

    useEffect(() => {
        ReactGA.pageview(currSection);        
    }, [currSection]);

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
            <Head>
                <title>Jéckson Schwengber</title>
                <meta name="description" content="JavaScript Fullstack Engineer Portfolio"  />
                <meta name="keywords" content="JavaScript, CSS, HTML, React, React Native, NodeJs, Freelancer"  />
                <meta name="author" content="Jéckson Schwengber" />
            </Head>
            <FixedMenu currentMenu={currSection} />
            <Apresentation />
            <AboutMe />
            <SolutionBuilder />
            <Experience />
            <Projects />
            <Contact />
        </div>
    )
}
