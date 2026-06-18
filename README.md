# Site CPDD
O site é a porta de entrada para nossos camaradas nos conhecerem.

- [Site CPDD](#site-cpdd)
  - [Dependências](#dependências)
  - [Instalando](#instalando)
    - [1. Clone o projeto do github:](#1-clone-o-projeto-do-github)
    - [2. Abra seu editor de código na pasta RAIZ do projeto](#2-abra-seu-editor-de-código-na-pasta-raiz-do-projeto)
    - [3. Instale as dependências abrindo o terminal a RAIZ do projeto e rode:](#3-instale-as-dependências-abrindo-o-terminal-a-raiz-do-projeto-e-rode)
  - [Rodando](#rodando)
      - [Rodando o site em modo desenvolvedor:](#rodando-o-site-em-modo-desenvolvedor)
      - [Para rodar o Storybooks:](#para-rodar-o-storybooks)
  - [Contribuindo](#contribuindo)
    - [Processo de desenvolvimento:](#processo-de-desenvolvimento)
      - [1. Abra o terminal na pasta raiz do projeto](#1-abra-o-terminal-na-pasta-raiz-do-projeto)
      - [2. Crie uma nova branch: ](#2-crie-uma-nova-branch-)
      - [3. Commit suas mudanças](#3-commit-suas-mudanças)
      - [4. Envie suas mudanças para o Github](#4-envie-suas-mudanças-para-o-github)
      - [5. Abra uma PR (Pull Request)](#5-abra-uma-pr-pull-request)
  - [Estrutura](#estrutura)
      - [Estrutura Detalhada:](#estrutura-detalhada)

## Dependências
- [Node.js](https://nodejs.org/docs/latest-v22.x/api/index.html) >= 22
- [Next.js](https://nextjs.org/docs)
- [Vite](https://pt.vite.dev/guide/)
- [React](https://pt-br.react.dev/reference/react)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [TailwindCSS](https://tailwindcss.com/docs/installation/using-vite)
- [Preline](https://www.preline.co/docs/index.html)
- [Storybooks](https://storybook.js.org/docs)
- [ESLint](https://eslint.org/docs/latest/)
- [Jest](https://jestjs.io/docs/getting-started)

## Instalando
Você precisa ter instalado na sua maquina: 
- [pnpm](https://pnpm.io/installation)
- [Node.js](https://nodejs.org/pt-br/download) 22 ou mais recente
- [Git](https://git-scm.com/install/linux)
- Editor de código:
    - [VS Code](https://code.visualstudio.com/) (recomendado)
    - [VS Codium](https://vscodium.com/) (VS Code sem tracker da Microsoft) 
    - [Zed](https://zed.dev/)
    - [Nvim](https://neovim.io/)
    - [Sublime](https://www.sublimetext.com/) 

### 1. Clone o projeto do github:
    - Com SSH:
        ```
        git clone git@github.com:Coletivo-Popular-Design-Desenvolvimento/site-cpdd.git
        ```
    - Com HTTPS:
        ```
        git clone https://github.com/Coletivo-Popular-Design-Desenvolvimento/site-cpdd.git
        ```

### 2. Abra seu editor de código na pasta RAIZ do projeto

### 3. Instale as dependências abrindo o terminal a RAIZ do projeto e rode:
```bash
pnpm install
```

## Rodando
Como o projeto tem 2 aplicações (Site e Design System) os comandos são divididos entre essas aplicações.

#### Rodando o site em modo desenvolvedor:
```bash
pnpm dev:site
```

#### Para rodar o Storybooks: 
```bash
pnpm dev:storybook
```

Demais scripts podem ser encontrados no package.json na pasta raiz do projeto.

## Contribuindo
No coletivo seguimos o [Commits Convencionais](https://www.conventionalcommits.org/pt-br/v1.0.0/) e [Branchs Convencionais](https://conventional-branch.github.io/pt-br/) para nomear commits/branchs.

Se ainda não clonou o repositório [clone o projeto do github](#1-clone-o-projeto-do-github).

### Processo de desenvolvimento:

#### 1. Abra o terminal na pasta raiz do projeto

#### 2. Crie uma nova branch: <br>
*Seguindo o padrão de nomeação de branch*
```bash
git switch -c tipo/id-nome-descrição-curta
```

#### 3. Commit suas mudanças
*Seguindo o padrão de nomeação de commits*
```bash
git add arquivo1 arquivo2 etc
```

```bash
git commit -m "tipo: descrição curta"
ou
git commit -m "tipo: descrição curta" -m "descrição longa"
```

#### 4. Envie suas mudanças para o Github
```bash
git push origin nome-da-sua-branch --set-upstream
```

#### 5. Abra uma PR (Pull Request)
1. Troque a branch para sua branch
2. Clique em Contribuir → Abrir Pull Request
3. Selecione base "homol" e o tipo de pull request 
   1. Draft PR: Se a feature ainda não estiver pronta para merge
   2. Pull Request: Se a feature estiver completa
4. Crie a pull request
  

## Estrutura
Monorepo com 2 aplicações: 
- apps/cpdd-site: Contém os arquivos, códigos e conteúdos do site. Criado com NextJS, Preline e Tailwind 
- apps/package/cpdd-ui: Componentes do Design System usados no site. Futuramente terá um repositório próprio. Criado com Vite, Preline, Tailwind e Storybooks

#### Estrutura Detalhada:
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

