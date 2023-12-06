import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'pt-BR',
  title: 'West Limp 2023.2',
  description: 'Eae',

  themeConfig: {
    nav: [
      { text: 'Introducao', link: '/introducao' },
      { text: 'Descrição', link: '/Descricao' },
      { text: 'Principais recursos e funcionalidades', link: '/Recursos' },
      { text: 'Diagrama de caso de uso ', link: '/DiagramaC' },
      { text: 'Diagrama de Classes ', link: '/DiagramaD' },
      { text: 'Protótipo de Telas ', link: '/Prototipo' },
      { text: 'Cronograma e entrega ', link: '/Cronograma' },
      { text: 'Riscos e mitigações ', link: '/Riscos' },
      { text: 'Custos e orçamentos ', link: '/Custos' },
      { text: 'Considerações finais ', link: '/Consideracoes' },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],
    search: {
      provider: 'local',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },
    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: 'Example', link: '/example' },
          { text: 'Principal', link: '/Principal' },
          { text: 'Introdução', link: '/introducao' },
          { text: 'Descrição', link: '/Descricao' },
          { text: 'Principais recursos e funcionalidades', link: '/Recursos' },
          { text: 'Diagrama de caso de uso ', link: '/DiagramaC' },
          { text: 'Diagrama de Classes ', link: '/DiagramaD' },
          { text: 'Protótipo de Telas ', link: '/Prototipo' },
          { text: 'Cronograma e entrega ', link: '/Cronograma' },
          { text: 'Riscos e mitigações ', link: '/Riscos' },
          { text: 'Custos e orçamentos ', link: '/Custos' },
          { text: 'Considerações finais ', link: '/Consideracoes' },
          // ...
        ],
      },
    ],
    
  },
});
