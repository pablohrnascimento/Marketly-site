# Marketly

![React](https://img.shields.io/badge/React_19-1f2937?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite_7-1f2937?style=flat-square&logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-1f2937?style=flat-square&logo=bootstrap&logoColor=white)
![EmailJS](https://img.shields.io/badge/EmailJS-1f2937?style=flat-square&logo=maildotru&logoColor=white)
![Status](https://img.shields.io/badge/status-Concluído-2ea44f?style=flat-square)

Landing page institucional da **Marketly**, agência de marketing digital, desenvolvida como projeto freelance.

## Problema e solução

A Marketly precisava de uma página única para apresentar a agência, seus serviços, equipe e depoimentos de clientes, e receber contatos sem depender de um back-end próprio. A solução é uma SPA em React + Vite, em que todo o conteúdo fica em um arquivo JSON e o formulário de contato envia e-mails diretamente do navegador via EmailJS.

## Meu papel

Desenvolvi o projeto sozinho, como freelancer: montagem das seções em React, todo o conteúdo da página, integração do formulário de contato com EmailJS e build com Vite.

## Decisões de engenharia

- **Conteúdo separado da apresentação.** Todos os textos, serviços, depoimentos, equipe e contatos ficam em [`src/data/data.json`](src/data/data.json). O `App.jsx` carrega o JSON e repassa cada bloco via props para componentes de seção (`Header`, `Features`, `About`, `Services`, `Gallery`, `Testimonials`, `Team`, `Contact`). Alterar o conteúdo não exige mexer em JSX.
- **Componentes de apresentação.** Cada seção em `src/components/` só renderiza os dados que recebe, sem estado global.
- **Contato sem back-end.** O formulário usa `emailjs-com` (`sendForm`) para disparar o e-mail pelo serviço EmailJS, eliminando a necessidade de servidor.
- **Navegação suave.** `smooth-scroll` aplicado a todos os links âncora (`a[href*="#"]`).
- **Estilo.** Bootstrap 3, Font Awesome e CSS próprio servidos a partir de `public/`.

## Demonstração

**Online:** https://pablohrnascimento.github.io/Marketly-site/

![Página inicial da Marketly](docs/assets/marketly-overview.png)

## Como executar

**Pré-requisitos:** Node.js 20+ e npm.

```bash
git clone https://github.com/pablohrnascimento/Marketly-site.git
cd Marketly-site
npm install
npm run dev       # servidor de desenvolvimento em http://localhost:5173
npm run build     # build de produção em dist/
npm run preview   # serve o build localmente
```

Não há variáveis de ambiente: as credenciais públicas do EmailJS estão em `src/components/contact.jsx`.

**Testes:** o projeto não possui testes automatizados.

## Estrutura de pastas

```
.
├── index.html
├── public/              # CSS, fontes, imagens e scripts estáticos (Bootstrap, Font Awesome)
└── src/
    ├── App.jsx          # carrega data.json e compõe as seções
    ├── components/      # uma seção da página por componente
    └── data/data.json   # todo o conteúdo textual da página
```
