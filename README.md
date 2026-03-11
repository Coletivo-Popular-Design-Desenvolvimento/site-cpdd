# Site CPDD
O site é a porta de entrada para nossos camaradas nos conhecerem.
teste

## Dependências:
- Node.js >= 22
- Next.js
- Vite
- React
- TypeScript
- TailwindCSS
- Preline
- Storybooks
- ESLint
- Jest

## Instalando o Projeto
Você precisa ter instalado na sua maquina: 
- [pnpm](https://pnpm.io/installation)
- [Node.js](https://nodejs.org/pt-br/download) 22 ou mais recente
- [Git](https://git-scm.com/install/linux)
- [VS Code](https://code.visualstudio.com/) ou outro editor de código

1. Clone o projeto do github:
    - Com SSH:
        ```
        git clone git@github.com:Coletivo-Popular-Design-Desenvolvimento/site-cpdd.git
        ```
    - Com HTTPS:
        ```
        git clone https://github.com/Coletivo-Popular-Design-Desenvolvimento/site-cpdd.git
        ```

2. Abra seu editor de código na pasta RAIZ do projeto

3. Instale as dependências abrindo o terminal a RAIZ do projeto e rode:
    ```
    pnpm install
    ```

## Rodando o Projeto
Como o projeto tem 2 aplicações (Site e Design System) os comandos são divididos entre essas aplicações.
#### Rodando o site em modo desenvolvedor:
```
pnpm dev:site
```

#### Para rodar o Storybooks: 
```
pnpm dev:storybook
```

Demais scripts podem ser encontrados no packages.json na paz raiz do projeto

## Estrutura do Projeto
Monorepo com 2 aplicações: 
- apps/cpdd-site: Contém os arquivos, códigos e conteúdos do site. Criado com NextJS, Preline e Tailwind 
- apps/package/cpdd-ui: Componentes do Design System usados no site. Futuramente terá um repositório próprio. Criado com Vite, Preline, Tailwind e Storybooks

#### Estrutura:
```
|— apps/cpdd-site/          # Raiz do projeto (site) contém as configurações, arquivos e códigos da aplicação
|   |— public               # arquivos publicos que não serão otimizados (imagens, icones, etc)
|   |— src/
|   |   |— app/             # aplicação site, usando app router https://nextjs.org/docs/app
|   |   |— componenets/     # Componentes usados no site
|   |   |   |— common/      # Componentes mais usados (navbar, header, footer)
|   |   |   |— home/        # Componentes usados apenas na página inicial
|
|— package/cpdd-ui/
|   |— src/
|   |   |— componenets/     # Componentes do Design System do CPDD
|   |   |— stories/         # Importa componentes para visualização no storybooks
|   |   |— styles/          # Arquivos css com os estilos do Design System (cores, espaçamento, fontes, tamanho de fontes)
|   |   |— types/           # Definição de tipos para o TypeScript
|
|— .cspell.json             # Configurações do dicionário
|— .gitignore               # Configuração dos arquivos/pastas ignorados pelo git
|— package.json             # Configuração do pnpm, scripts e dependências
|— tsconfig.base.json       # Configuração base do TypeScript no monorepo
```
