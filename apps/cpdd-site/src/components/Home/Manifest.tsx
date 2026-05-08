import Link from "next/link";

const paragraphs = 'Lorem ipsum dolor sit amet consectetur. Sed scelerisque dapibus pellentesque luctus nec faucibus sed. Nunc mauris mi et tincidunt est. Mauris sed tellus vestibulum pellentesque massa aliquam libero augue purus. Mi placerat volutpat fermentum in feugiat eget. Sodales senectus vitae rhoncus vitae dui aliquet phasellus sit. Quisque feugiat urna mollis ipsum convallis viverra. Lorem ipsum dolor sit amet consectetur. Sed scelerisque dapibus pellentesque luctus nec faucibus sed. Nunc mauris mi et tincidunt est. \nMauris sed tellus vestibulum pellentesque massa aliquam libero augue purus. Mi placerat volutpat fermentum in feugiat eget. Sodales senectus vitae rhoncus vitae dui aliquet phasellus sit. Quisque feugiat urna mollis ipsum convallis viverra.Lorem ipsum dolor sit amet consectetur. Sed scelerisque dapibus pellentesque luctus nec faucibus sed. Nunc mauris mi et tincidunt est.'
    .split('\n');

export default function Manifest() {
    return (
        <section className="bg-cpdd-neutral-50 text-cpdd-neutral-950">
            <div className="container py-8 md:py-16">
                <div className="md:px-27">
                    <h2 className="heading-sm mb-8 md:display-md md:mb-11">Manifesto</h2>
                    <div className="space-y-4 body-sm text-sm md:body-lg">
                        {paragraphs.map((text, i) => <p key={i}>{text}</p>)}
                    </div>
                    <Link
                        hidden
                        href="#"
                        className="block mx-auto max-w-2/3 mt-8 text-center rounded-lg button-sm text-sm py-3 border-2 border-cpdd-neutral-950 md:border-4 md:button-lg md:mt-11 md:max-w-2/5 md:mr-0"
                    >
                        Saiba mais
                    </Link>
                </div>
            </div>
        </section>
    );
}
