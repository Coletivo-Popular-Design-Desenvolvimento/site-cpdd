import LogoFull from "./LogoFull";

const emailAddress = "coletivo@cpdd.com.br";

export default function Footer () {
  return (
    <footer className="flex flex-col py-8 md:py-0 bg-white md:bg-[#F34822] md:flex-col-reverse">
      <div className="bg-white text-black text-sm pb-3 md:py-18">
        <p className="font-semibold mb-1">Tecnologia nas mãos de quem trabalha</p>
        <p className="text-xs">Quer colaborar, sugerir ideias ou fazer parte dos nossos projetos?</p>
        <p className="mb-3 text-xs">Mande uma mensagem! Estamos sempre abertos a novas conexões e oportunidades.</p>
        <p className="mb-3 text-xs">&copy; 2024. CPDD - Coletivo Popular de Design e Desenvolvimento. Todos os direitos reservados.</p>
        <p>
          <span className="font-semibold">E-mail para contato e parcerias:</span>
          <br />
          <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
        </p>
      </div>
      <div className="bg-white self-end md:self-start md:py-8 md:pr-40 md:relative md:after:h-full md:after:left-full md:after:top-0 md:after:bg-inherit md:after:absolute md:after:clip-wave">
        <LogoFull className="w-40 md:w-80" width={320} height={64} />
      </div>
    </footer>
  );
}

