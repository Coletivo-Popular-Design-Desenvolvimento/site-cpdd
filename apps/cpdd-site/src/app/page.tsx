import { AboutUs } from "@src/components/Home/AboutUs";

export default function Home() {
    return (
        <main className='max-w-5xl mx-auto p-4 space-y-8'>
            <h1 className="text-4xl font-bold">Site do CPDD</h1>
            <AboutUs />
        </main>
    );
}
