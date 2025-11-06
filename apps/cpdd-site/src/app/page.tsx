import Image from "next/image";
import Accordion from "@components/Preline/Accordion"

export default function Home() {

    return (
        <div className="flex flex-col gap-4 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <h1 className="text-4xl font-bold">Site do CPDD mt foda</h1>
            <div className="grid grid-cols-2 gap-4 bg-amber-900">
                <div className="flex flex-col gap-4">
                    <Image
                        src="/jones.png"
                        alt="a file"
                        width={205}
                        height={0}
                    />
                    <button className="bg-amber-600 text-black py-2 px-4">
                        Bota na tela Maquixueu
                    </button>
                </div>
                <div className="flex flex-col gap-4">
                    <Image
                        src="/jones.png"
                        alt="a file"
                        width={205}
                        height={0}
                    />
                    <button className="bg-amber-600 text-black py-2 px-4">
                        Bota na tela Maquixueu
                    </button>
                </div>
                <div className="flex flex-col gap-4">
                    <Image
                        src="/jones.png"
                        alt="a file"
                        width={205}
                        height={0}
                    />
                    <button className="bg-amber-600 text-black py-2 px-4">
                        Bota na tela Maquixueu
                    </button>
                </div>
                <div className="flex flex-col gap-4">
                    <Image
                        src="/jones.png"
                        alt="a file"
                        width={205}
                        height={0}
                    />
                    <button className="bg-amber-600 text-black py-2 px-4">
                        Bota na tela Maquixueu
                    </button>
                </div>
            </div>
            <div className="m-6">
                <Accordion />
            </div>
            
            <div className="hs-accordion-group w-200 p-6 bg-gray-700">
              <div className="hs-accordion active" id="hs-basic-heading-one">
                <button className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="true" aria-controls="hs-basic-collapse-one">
                  <svg className="hs-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                  <svg className="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                  </svg>
                  Accordion #1
                </button>
                <div id="hs-basic-collapse-one" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-heading-one">
                  <p className="text-gray-800 dark:text-neutral-200">
                    <em>This is the first item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>

              <div className="hs-accordion" id="hs-basic-heading-two">
                <button className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="false" aria-controls="hs-basic-collapse-two">
                  <svg className="hs-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                  <svg className="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                  </svg>
                  Accordion #2
                </button>
                <div id="hs-basic-collapse-two" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-heading-two">
                  <p className="text-gray-800 dark:text-neutral-200">
                    <em>This is the second item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>

              <div className="hs-accordion" id="hs-basic-heading-three">
                <button className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="false" aria-controls="hs-basic-collapse-three">
                  <svg className="hs-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                  <svg className="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                  </svg>
                  Accordion #3
                </button>
                <div id="hs-basic-collapse-three" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-heading-three">
                  <p className="text-gray-800 dark:text-neutral-200">
                    <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
            </div>
        </div>
    );
}
