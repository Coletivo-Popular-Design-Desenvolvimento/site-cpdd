import CpddLogo from "./CpddLogo";

const emailAddress = "coletivo@cpdd.com.br";

export default function Footer () {
  return (
    <footer className="flex flex-col py-8 md:py-0 bg-white md:bg-[#F34822] md:flex-col-reverse">
      <div className="bg-white text-black text-sm pb-3 md:py-18 md:flex md:justify-between md:items-center md:gap-4">
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
      <div className="bg-white self-end md:self-start md:py-8 md:pr-40 md:relative md:after:h-full md:after:left-full md:after:top-0 md:after:bg-inherit md:after:absolute md:after:clip-wave-right">
        <CpddLogo className="w-40 md:w-80" width={320} height={64} />
      </div>
    </footer>
  );
}
