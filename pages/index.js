import Head from "next/head";
import { useCallback, useEffect, useRef, useState } from "react";
import FixedMenu from "../components/fixed-menu";
import AboutMe from "./about-me";
import Apresentation from "./apresentation";
import Contact from "./contact";
import Experience from "./experience";
import SolutionBuilder from "./solution-builder";
import * as gtag from '../components/analytics-controller';
import Projects from "./projects";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import AppMenu from "../components/app-menu";
import FixedUpButton from "../components/fixed-up-button";


export async function getStaticProps({locale}) {
    return {
        props: {
            ...await serverSideTranslations(locale, ['common']),
        }
    }
}


export default function Home() {
        
    const refTimeoutCurrSection = useRef(null);

    const [currSection, setCurrSection] = useState('home');
    const [showStickyHeader, setShowStickHeader] = useState(false);   

    useEffect(() => {
        setTimeout(() => {
            try {
                gtag.pageview(currSection);        
            } catch (e) {
                console.log(e);
            }                        
        }, 5000);
        
    }, [currSection]);

    const processCurrPos = useCallback(() => {
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
            setShowStickHeader(window.scrollY > 200);                    
        }, [150]);        
    }, [refTimeoutCurrSection, setCurrSection, setShowStickHeader]);

    useEffect(() => {
        processCurrPos();
        window.onscroll = () => processCurrPos();
        return () => window.onscroll = null;
    }, [processCurrPos]);


    return (
        <div className="pos-relative">
            <Head>
                <title>Jéckson Schwengber</title>
                <meta name="description" content="JavaScript Fullstack Engineer Portfolio"  />
                <meta name="keywords" content="JavaScript, CSS, HTML, React, React Native, NodeJs, Freelancer"  />
                <meta name="author" content="Jéckson Schwengber" />
            </Head>
            <FixedMenu currentMenu={currSection} />
            {showStickyHeader && <AppMenu currentMenu={currSection}  showSticky={showStickyHeader} onGoHome={() => setShowStickHeader(false)}  />}
            <FixedUpButton  show={showStickyHeader}  />
            <Apresentation showSticky={showStickyHeader} currentMenu={currSection} />
            <AboutMe />
            <SolutionBuilder />
            <Experience />
            <Projects />
            <Contact />
        </div>
    )
}
