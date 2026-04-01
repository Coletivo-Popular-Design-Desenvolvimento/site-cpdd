import CpddLogoTexto from "@src/components/common/CpddLogoTexto";

const emailAddress = "coletivo@cpdd.com.br";

export default function Footer () {
  return (
    <footer className="bg-white text-black py-7 md:py-17 relative">
      <div
        className={
            'top-0 hidden absolute h-25 w-full bg-[#F34822] md:block'
            + ' before:absolute before:h-full before:w-1/2 before:bg-white'
            + ' after:absolute after:h-full after:left-1/2 after:bg-white after:clip-wave-right'
        }
      />
      <div className="container flex flex-col gap-y-3 md:gap-y-10">
        <div className="text-sm flex flex-col gap-3 md:flex-row md:justify-between md:items-center md:order-1">
          <div>
            <p className="font-semibold mb-3 md:text-3xl">Tecnologia nas mãos de quem trabalha</p>
            <p className="text-xs md:text-xl">Quer colaborar, sugerir ideias ou fazer parte dos nossos projetos?</p>
            <p className="mb-3 text-xs md:text-xl">Mande uma mensagem! Estamos sempre abertos a novas conexões e oportunidades.</p>
            <p className="text-xs md:text-xl">&copy; 2024. CPDD - Coletivo Popular de Design e Desenvolvimento. Todos os direitos reservados.</p>
          </div>
          <div>
            <p className="md:text-2xl">
              <span className="font-semibold">E-mail para contato e parcerias:</span>
              <br />
              <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
            </p>
          </div>
        </div>
        <div className="flex justify-end md:justify-start z-0">
          <CpddLogoTexto className="fill-current w-40 md:w-80" />
        </div>
      </div>
    </footer>
  );
}
