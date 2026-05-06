import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'uz-UZ',
  title: 'ERP Evolution',
  description: 'Biznes nuqtai nazaridan ERP tizimlarini tushunish — daftardan Odoo gacha',

  head: [
    ['meta', { name: 'author', content: 'Ibrohim Xalilov' }],
    ['meta', { name: 'keywords', content: 'ERP, Odoo, biznes, boshqaruv, darslik, tutorial' }],
    ['meta', { property: 'og:title', content: 'ERP Evolution — Biznes uchun ERP darslik' }],
    ['meta', { property: 'og:description', content: 'Kichik do\'kondan xalqaro bozorgacha — ERP evolyutsiyasi' }],
    ['meta', { property: 'og:type', content: 'website' }],
  ],

  themeConfig: {
    siteTitle: '📘 ERP Evolution',

    nav: [
      { text: 'Bosh sahifa', link: '/' },
      { text: 'Darslik', link: '/guide/01-biznes-asoslari' },
      { text: 'Odoo', link: '/odoo/' },
      {
        text: 'Muallif',
        link: 'https://linkedin.com/in/ibrohim_xalilov'
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '📦 I — Biznes Asoslari',
          collapsed: false,
          items: [
            { text: '1. Biznes Asoslari', link: '/guide/01-biznes-asoslari' },
            { text: '2. Sanoat Turlari', link: '/guide/02-sanoat-turlari' },
          ]
        },
        {
          text: '🔄 II — Evolyutsiya',
          collapsed: false,
          items: [
            { text: '3. Kichik Do\'kon (Daftar)', link: '/guide/03-kichik-dokon' },
            { text: '4. Excel Davri', link: '/guide/04-excel-davri' },
            { text: '5. Google Sheets', link: '/guide/05-google-sheets' },
            { text: '6. CRM va Toollar', link: '/guide/06-crm-va-toollar' },
          ]
        },
        {
          text: '🏗️ III — ERP Tizimi',
          collapsed: false,
          items: [
            { text: '7. ERP Nima?', link: '/guide/07-erp-nima' },
            { text: '8. ERP Modullari', link: '/guide/08-erp-modullari' },
          ]
        },
        {
          text: '🟣 IV — Odoo',
          collapsed: false,
          items: [
            { text: '9. Odoo Platformasi', link: '/guide/09-odoo-platformasi' },
            { text: '10. Odoo Modullari', link: '/guide/10-odoo-modullari' },
          ]
        },
        {
          text: '🚀 V — Scaling va Amaliyot',
          collapsed: false,
          items: [
            { text: '11. Scaling Jarayoni', link: '/guide/11-scaling-jarayoni' },
            { text: '12. ERP Joriy Etish', link: '/guide/12-erp-joriy-etish' },
            { text: '13. Xulosa', link: '/guide/13-xulosa' },
          ]
        },
      ],
      '/odoo/': [
        {
          text: '🟣 Odoo ga Chuqur Kirish',
          items: [
            { text: 'Kirish', link: '/odoo/' },
          ]
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/aliendevuz/erp-evolution' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/ibrohim_xalilov' },
    ],

    footer: {
      message: '🤖 Claude Opus 4.6 yordamida generatsiya qilingan | Pull Request orqali xissa qo\'shing!',
      copyright: '© 2026 Ibrohim Xalilov — ERP Evolution'
    },

    editLink: {
      pattern: 'https://github.com/aliendevuz/erp-evolution/edit/main/docs/:path',
      text: 'Bu sahifani tahrirlash'
    },

    lastUpdated: {
      text: 'Oxirgi yangilanish'
    },

    outline: {
      label: 'Mundarija',
      level: [2, 3]
    },

    docFooter: {
      prev: 'Oldingi',
      next: 'Keyingi'
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Qidirish',
            buttonAriaLabel: 'Qidirish'
          },
          modal: {
            noResultsText: 'Natija topilmadi',
            resetButtonTitle: 'Tozalash',
            footer: {
              selectText: 'tanlash',
              navigateText: 'navigatsiya',
              closeText: 'yopish'
            }
          }
        }
      }
    },

    returnToTopLabel: 'Yuqoriga qaytish',
    darkModeSwitchLabel: 'Mavzu',
    sidebarMenuLabel: 'Menyu',
  },

  lastUpdated: true,
})
