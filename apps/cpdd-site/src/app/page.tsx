import Hero from '@components/Home/Hero';
import Projects from '@components/Home/Projects';
import About from '@components/Home/About';
import Manifest from '@components/Home/Manifest';
import { CollectiveAreas } from "@components/Home/CollectiveAreas";
import FAQ from '@components/Home/FAQ';


export default function Home() {
    return (
        <>
            <Hero />
            <Projects />
            <About />
            <Manifest />
            <CollectiveAreas />
            <FAQ />
        </>
    );
}
