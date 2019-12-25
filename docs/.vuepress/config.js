module.exports = {
  title: 'Testing Cloud',
  description: '专注于云测试平台',
  head: [
    ['link', { rel: 'icon', href: '/assets/img/logo.png' }]
 ],
  themeConfig: {
      logo: '/assets/img/logo.png',
      nav: [
          {text: '主页', link: '/'},
          {
            text: '简介',
            items: [
              {text: '平台简介',
              items: [
                {'text': '基础简介',link: '/guide/introduce/BasicIntroduction.md'}
              ]}
            ]
          },
          { text: 'GitHub', link: 'https://github.com/liuzheng0920/vue_testing_cloud', target:'_self', rel:'' }
      ],
      displayAllHeaders: true 

    }
 }