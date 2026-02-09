import CpddLogo from "@src/components/common/CpddLogo";

const emailAddress = "coletivo@cpdd.com.br";

export default function Footer () {
  return (
    <footer className="layout-grid gap-y-3 py-8 bg-white md:py-0">
      <div className="bg-white text-black text-sm md:py-16 md:flex md:justify-between md:items-center md:gap-4">
        <div>
          <p className="font-semibold mb-1 md:text-3xl">Tecnologia nas mãos de quem trabalha</p>
          <p className="text-xs md:text-xl">Quer colaborar, sugerir ideias ou fazer parte dos nossos projetos?</p>
          <p className="mb-3 text-xs md:text-xl">Mande uma mensagem! Estamos sempre abertos a novas conexões e oportunidades.</p>
          <p className="mb-3 text-xs md:text-xl">&copy; 2024. CPDD - Coletivo Popular de Design e Desenvolvimento. Todos os direitos reservados.</p>
        </div>
        <div>
          <p className="md:text-2xl">
            <span className="font-semibold">E-mail para contato e parcerias:</span>
            <br />
            <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
          </p>
        </div>
      </div>
      <div
        className={
          'full-width layout-grid'
          + ' justify-items-end'
          + ' md:justify-items-normal md:-order-1 md:py-8 md:bg-[#F34822] md:relative'
          + ' md:before:absolute md:before:h-full md:before:w-1/2 md:before:bg-white'
          + ' md:after:absolute md:after:h-full md:after:left-1/2 md:after:bg-white md:after:clip-wave-right'
        }
      >
        <CpddLogo className="w-40 md:w-80 z-1" width={320} height={64} />
      </div>
    </footer>
  );
}
