import Image from "next/image";
import WaveDivider from "../common/WaveDivider";

const imageSrc = "https://picsum.photos/seed/about/1920/1080";
const text1 = "Lorem ipsum dolor sit amet consectetur. Sed scelerisque dapibus pellentesque luctus nec faucibus sed. Nunc mauris mi et tincidunt est. Mauris sed tellus vestibulum pellentesque massa aliquam libero augue purus. Mi placerat volutpat fermentum in feugiat eget. Sodales senectus vitae rhoncus vitae dui aliquet phasellus sit. Quisque feugiat urna mollis ipsum convallis viverra. Lorem ipsum dolor sit amet consectetur. Sed scelerisque dapibus pellentesque luctus nec faucibus sed. Nunc mauris mi et tincidunt est. Mauris sed tellus vestibulum pellentesque massa aliquam libero augue purus. Mi placerat volutpat fermentum in feugiat eget. Sodales senectus vitae rhoncus vitae dui aliquet phasellus sit.";
const text2 = "Lorem ipsum dolor sit amet consectetur. Sed scelerisque dapibus pellentesque luctus nec faucibus sed. Nunc mauris mi et tincidunt est. Mauris sed tellus vestibulum pellentesque massa aliquam libero augue purus. Mi placerat volutpat fermentum in feugiat eget. Sodales senectus vitae rhoncus vitae dui aliquet phasellus sit. Quisque feugiat urna mollis ipsum convallis viverra. Lorem ipsum dolor sit amet consectetur. Sed scelerisque dapibus pellentesque luctus nec faucibus sed.";

export default function About() {
    return (
        <section className="bg-cpdd-neutral-950 text-cpdd-neutral-50 relative">
            <div className="relative bg-cpdd-orange-500">
                <WaveDivider
                    backgroundClassName="bg-cpdd-neutral-950"
                    className="absolute inset-0"
                    widthClassName="min-w-42 w-5/12"
                    xPosition="left"
                    yPosition="bottom"
                />
                <div className="isolate container min-h-12 md:min-h-25 flex items-center">
                    <h2 className="heading-sm md:display-md text-cpdd-orange-500">Sobre nós</h2>
                </div>
            </div>
            <div className="relative body-md lg:body-lg">
                <div className="container relative aspect-video md:aspect-auto md:h-250">
                    <Image
                        alt=""
                        src={imageSrc}
                        fill={true}
                        className="object-cover md:clip-about-image"
                    />
                </div>
                <div className="container py-6 grid gap-4 md:grid-cols-2 md:grid-rows-2 md:items-center md:gap-24 md:absolute md:inset-0">
                    <p className="md:col-2">
                        {text1}
                    </p>
                    <p>
                        {text2}
                    </p>
                </div>
            </div>
            <WaveDivider
                backgroundClassName="bg-cpdd-neutral-950"
                className="absolute inset-x-0 top-full h-12 md:h-25"
                widthClassName="w-26 md:w-5/12"
                yPosition="top"
                xPosition="right"
            />
        </section>
    );
}
