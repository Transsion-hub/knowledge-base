import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/knowledge-base/',
  title: '传音控股知识库',
  description: '行业动态 · 公司动态 · 基本面分析 · 会议纪要',
  
  themeConfig: {
    logo: '/logo.svg',
    
    nav: [
      { text: '首页', link: '/' },
      { text: '行业动态', link: '/industry/' },
      { text: '公司动态', link: '/company/' },
      { text: '基本面分析', link: '/analysis/' },
      { text: '会议纪要', link: '/meetings/' }
    ],

    sidebar: {
      '/industry/': [
        {
          text: '行业动态',
          items: [
            { text: '概述', link: '/industry/' },
            { text: '智能手机市场', link: '/industry/smartphone-market' },
            { text: '新兴市场趋势', link: '/industry/emerging-markets' },
            { text: '竞争格局', link: '/industry/competition' }
          ]
        }
      ],
      '/company/': [
        {
          text: '公司动态',
          items: [
            { text: '概述', link: '/company/' },
            { text: '品牌动态', link: '/company/brands' },
            { text: '产品发布', link: '/company/products' },
            { text: '市场拓展', link: '/company/expansion' }
          ]
        }
      ],
      '/analysis/': [
        {
          text: '基本面分析',
          items: [
            { text: '概述', link: '/analysis/' },
            { text: '财务分析', link: '/analysis/financial' },
            { text: '估值分析', link: '/analysis/valuation' },
            { text: '股东分析', link: '/analysis/shareholders' }
          ]
        }
      ],
      '/meetings/': [
        {
          text: '会议纪要',
          items: [
            { text: '概述', link: '/meetings/' },
            { text: '2026年会议', link: '/meetings/2026' },
            { text: '2025年会议', link: '/meetings/2025' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-org/knowledge-base' }
    ],

    footer: {
      message: '内部知识库 · 仅供团队使用',
      copyright: 'Copyright © 2026 传音控股'
    },

    search: {
      provider: 'local'
    }
  }
})
