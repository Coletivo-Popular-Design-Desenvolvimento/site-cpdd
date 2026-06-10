import CpddLogoTexto from "@src/components/common/CpddLogoTexto";
import WaveDivider from "./WaveDivider";
import Image from "next/image";

const emailAddress = "coletivo@cpdd.com.br";

const socialMedia = [
  {label: "Instagram", icon: "instagram.svg", url: "https://www.instagram.com/cpddbrasil/"},
  {label: "Youtube", icon: "youtube.svg", url: "https://www.youtube.com/@cpddbrasil"},
  {label: "Tiktok", icon: "tiktok.svg", url: "https://www.tiktok.com/@cpddbrasil"},
  {label: "Twitch", icon: "twitch.svg", url: "http://twitch.tv/cpddbrasil"},
];

export default function Footer () {
  return (
    <footer className="bg-cpdd-neutral-50 text-cpdd-neutral-950 py-7 md:py-17 relative font-footer">
      <WaveDivider
        className="absolute top-0 inset-x-0 h-25 max-md:hidden bg-cpdd-orange-500"
        backgroundClassName="bg-cpdd-neutral-50"
        widthClassName="w-2/5"
        xPosition="left"
        yPosition="bottom"
      />
      <div className="container flex flex-col gap-y-3 md:gap-y-10">
        <CpddLogoTexto className="isolate fill-current w-40 md:w-80" />
        <div className="flex flex-col gap-3 md:flex-row md:gap-50">
          <div>
            <p className="mb-3 font-semibold text-sm md:text-3xl">Tecnologia nas mãos de quem trabalha</p>
            <p className="text-xs md:text-xl">
              Quer colaborar, sugerir ideias ou fazer parte dos nossos projetos? <br />
              Mande uma mensagem! Estamos sempre abertos a novas conexões e oportunidades.
            </p>
          </div>
          <div>
            <p className="text-sm md:text-2xl mb-3">
              <span className="font-semibold">E-mail para contato e parcerias:</span>
              <br />
              <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
            </p>
            <p className="text-sm md:text-2xl font-semibold mb-1 md:mb-2">Sigam nossas redes!</p>
            <ul className="flex gap-3">
              {socialMedia.map(({ label, icon, url }) => (
                <li key={icon}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <Image className="size-7 md:size-9" width={32} height={32} src={icon} alt={label} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-xs md:text-xl">&copy; 2024. CPDD - Coletivo Popular de Design e Desenvolvimento. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
