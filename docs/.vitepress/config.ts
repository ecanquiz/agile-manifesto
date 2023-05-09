import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Manifiesto Ágil',
  description: 'Manifiesto Ágil',
  base: '/agile-manifesto/', //  The default path during deployment / secondary address / base can be used/
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/mylogo.png',  
    siteTitle: 'Manifiesto Ágil',
    nav: [
      { text: 'Inicio', link: '/' },           
      { text: 'Comenzar', link: '/start/project-management-methodology' },
      { text: 'ecanquiz', link: 'https://ecanquiz.github.io/' }, 
    ],
    sidebar: [
      {
        text: 'Comenzar',   // required
        path: '/comenzar/',      // optional, link of the title, which should be an absolute path and must exist        
        sidebarDepth: 1,    // optional, defaults to 1
        collapsible: true,
        collapsed: false, 
        items: [
          { text: 'Gestión de Proyectos', link: '/start/project-management-methodology' },
          { text: 'Antecedentes', link: '/start/background' },
          { text: 'Conocimiento en Continua Evolución', link: '/start/knowledge-in-continuous-evolution' },
          
                           
        ]
      }, {
        text: 'Conceptos',   // required
        path: '/concepts/',      // optional, link of the title, which should be an absolute path and must exist        
        sidebarDepth: 1,    // optional, defaults to 1
        collapsible: true,
        collapsed: false, 
        items: [
          { text: 'Gestión de Proyectos', link: '/concepts/project-managementm-concepts' },
        ]
      },{ 
        text: 'Manifiesto Ágil',   // required
        path: '/manifesto/',      // optional, link of the title, which should be an absolute path and must exist        
        sidebarDepth: 1,    // optional, defaults to 1
        collapsible: true,
        collapsed: false, 
        items: [          
          { text: 'Valores', link: '/manifesto/intro' },
          { text: '1. Individuos e Interacciones', link: '/manifesto/individuals-and-interactions' },
          { text: '2. Software Funcionando', link: '/manifesto/software-working' },
          { text: '3. Colaboración Cliente', link: '/manifesto/customer-collaboration' },
          { text: '4. Responder al Cambio', link: '/manifesto/respond-to-change' },
          { text: 'Los 12 Principios del Agilismo', link: '/manifesto/agilism-principles' },
          { text: 'Conclusión', link: '/manifesto/conclusion' }                           
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ecanquiz/agile-manifesto' }
    ]
  }
})
