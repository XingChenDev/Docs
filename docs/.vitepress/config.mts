import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "插件文档",
  description: "--星辰开发组",
  markdown: {
    container: {
      tipLabel: ' ',
      warningLabel: ' ',
      dangerLabel: ' ',
      infoLabel: ' ',
      detailsLabel: ' '
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '文档主页', link: '/' },
      { text: '工作室主页', link: 'https://www.mcmap.top' },
      { text: '加入群聊', link: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=1hh-XxHHnZ3Ljp-eEeZVgI-iRyLIMeHB&authKey=GtMz8hu1sMxLp5706YefERQ%2B1VSHJbdE1h%2F%2F7rIngoLpwH76kNokZC0Y58pxcMxO&noverify=0&group_code=639276103' }

    ],
    sidebar: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: 'LLSE插件',
        collapsed: true,
        link: '/plugins/LLSE/',
        items: [
          { text: 'PBank - 银行系统', link: '/plugins/LLSE/PBank' },
          { text: 'PCdk - 兑换码', link: '/plugins/LLSE/PCDK' },
          { text: 'PChat - 消息处理', link: '/plugins/LLSE/PChat' },
          { text: 'PCsvip - 会员[停更]', link: '/plugins/LLSE/PCSVIP' },
          { text: 'PLib - 插件数据库', link: '/plugins/LLSE/PLib' },
          { text: 'PMail - 邮箱&邮件系统', link: '/plugins/LLSE/PMail' },
          { text: 'PMenu - 菜单插件', link: '/plugins/LLSE/PMenu' },
          { text: 'PQuery - 多功能查询[停更]', link: '/plugins/LLSE/PQuery' },
          { text: 'PShop - 商店系统', link: '/plugins/LLSE/PShop' },
          { text: 'PSign - 签到', link: '/plugins/LLSE/PSign' },
          { text: 'PStop - 维护系统', link: '/plugins/LLSE/PStop' },
          { text: 'PStore - 维护系统[新]', link: '/plugins/LLSE/PStore' },
          { text: 'PTitle - 称号系统', link: '/plugins/LLSE/PTitle' },
          { text: 'PVip - VIP插件', link: '/plugins/LLSE/PVip' }
        ]
      },
      {
        text: 'Serein插件',
        collapsed: true,
        link: '/plugins/Serein/',
        items: [
          { text: 'PBind - 账号绑定', link: '/plugins/Serein/PBind' },
          { text: 'PQuery - 多功能查询', link: '/plugins/Serein/PQuery' }
        ]
      }, {
        text: 'PVip模块插件',
        collapsed: true,
        link: '/plugins/vipmod/',
        items: [
          { text: '进服&离开文本修改', link: '/plugins/vipmod/join_left_tip' }
        ]
      },
      {
        text: 'PAPI变量说明',
        link: '/plugins/PAPI_variant'
      },
      {
        text: '关于',
        link: '/About'
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://gitee.com/xingchendev/Docs' }
    ],
    footer: {
      message: 'Planet工作室',
      copyright: 'Copyright © 2021-2024'
    },
    search: {
      provider: 'local'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    returnToTopLabel: "回到顶部",
    outline: {
      label: '页面导航'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})