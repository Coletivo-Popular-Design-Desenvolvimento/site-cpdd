import Hero from '@components/Home/Hero';
import Projects from '@components/Home/Projects';
import About from '@components/Home/About';
import Manifest from '@components/Home/Manifest';
import Fields from '@components/Home/Fields';
import FAQ from '@components/Home/FAQ';
import { AboutUs } from "@src/components/Home/AboutUs";

export default function Home() {
    return (
        <>
            <Hero />
            <Projects />
            <AboutUs />
            <Manifest />
            <Fields />
            <FAQ />            
        </>
    );
}
