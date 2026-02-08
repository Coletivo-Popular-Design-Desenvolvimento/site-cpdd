import FAQ from "@src/components/Home/FAQ";
import Footer from "./ui/Footer";

export default function Home() {
    return (
        <>
            <main className='max-w-5xl mx-auto p-4 space-y-8'>
                <h1 className="text-4xl font-bold">Site do CPDD</h1>
                <FAQ />
                <h2>EXEMPLO MANERÃO</h2>
            </main>
            <Footer/>
        </>
    );
}
