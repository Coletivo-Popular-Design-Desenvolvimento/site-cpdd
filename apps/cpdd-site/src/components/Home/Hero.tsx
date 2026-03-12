export default function Hero() {
    return (
        <div className="h-200 flex items-center px-12 bg-cpdd-orange-500 text-black">
            <div className="w-sm flex flex-col gap-11">
                <h1 className="heading-lg">Lorem Ipsum</h1>
                <p className="body-sm">
                    Lorem ipsum dolor sit amet consectetur. Amet blandit leo imperdiet tristique
                    scelerisque turpis enim lorem id. Dui dui eu accumsan sit iaculis pretium morbi.
                    Velit volutpat dignissim ullamcorper amet eu at magna nec non.
                </p>
                <div className="flex flex-col items-start gap-4">
                    <button className="w-xs button-sm px-12 py-1 border-2 rounded-full border-black">
                        APOIA.se
                    </button>
                    <button className="w-xs button-sm px-12 py-1 border-2 rounded-full border-black">
                        JUNTE-SE À NÓS
                    </button>
                </div>
            </div>
        </div>
    );
}
