
module.exports = {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=1128' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel:'stylesheet', href:'https://fonts.googleapis.com/css2?family=Montserrat&display=swap'},
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/styles'
  ],
  plugins: [
    '@/plugins/element-ui',
    {src: '@/plugins/socket', ssr: false}
  ],
  buildModules: [
  ],
  modules: [
    '@nuxtjs/pwa',
  ],
  build: {
    transpile: [/^element-ui/],
    extend (config, ctx) {
    }
  }
}
