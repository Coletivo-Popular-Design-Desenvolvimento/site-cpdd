import Image from "next/image";

export default function About() {
    return (
        <section className="bg-cpdd-neutral-950 text-cpdd-neutral-50">
            <div className="container min-h-12 md:min-h-25 flex items-center">
                <h2 className="heading-sm md:display-md text-cpdd-orange-500">Sobre nós</h2>
            </div>
            <div className="relative body-md lg:body-lg">
                <div className="container relative aspect-video md:aspect-auto md:h-250">
                    <Image
                        alt=""
                        src="https://picsum.photos/seed/about/1920/1080"
                        fill={true}
                        className="object-cover md:clip-about-image"
                    />
                </div>
                <div className="container py-6 grid gap-4 md:grid-cols-2 md:grid-rows-2 md:items-center md:gap-24 md:absolute md:inset-0">
                    <p className="md:col-2">
                        Lorem ipsum dolor sit amet consectetur. Sed scelerisque dapibus pellentesque luctus nec faucibus sed. Nunc mauris mi et tincidunt est. Mauris sed tellus vestibulum pellentesque massa aliquam libero augue purus. Mi placerat volutpat fermentum in feugiat eget. Sodales senectus vitae rhoncus vitae dui aliquet phasellus sit. Quisque feugiat urna mollis ipsum convallis viverra. Lorem ipsum dolor sit amet consectetur. Sed scelerisque dapibus pellentesque luctus nec faucibus sed. Nunc mauris mi et tincidunt est. Mauris sed tellus vestibulum pellentesque massa aliquam libero augue purus. Mi placerat volutpat fermentum in feugiat eget. Sodales senectus vitae rhoncus vitae dui aliquet phasellus sit. 
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Sed scelerisque dapibus pellentesque luctus nec faucibus sed. Nunc mauris mi et tincidunt est. Mauris sed tellus vestibulum pellentesque massa aliquam libero augue purus. Mi placerat volutpat fermentum in feugiat eget. Sodales senectus vitae rhoncus vitae dui aliquet phasellus sit. Quisque feugiat urna mollis ipsum convallis viverra. Lorem ipsum dolor sit amet consectetur. Sed scelerisque dapibus pellentesque luctus nec faucibus sed.
                    </p>
                </div>
            </div>
        </section>
    );
}
