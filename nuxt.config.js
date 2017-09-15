module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Foo Bar',
    titleTemplate: '%s - Janzen的博客',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Janzen的小博客' },
      { hid: 'keywords', name: 'keywords', content: 'blog，博客，个人，前端，nuxt' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /**
   * 组件缓存
   */
  cache: {
    max: 1000,  // 缓存组件数
    maxAge: 900000  // 缓存时间
  },
  /**
   * 配置全局 CSS 文件、模块、库（每个页面都会被引入）
   */
  css: [
    // 项目中的 Sass 文件
    { src: '~assets/scss/index.scss', lang: 'scss' } // 指定 scss 而非 sass
  ],
  /**
   * 配置在客户端和服务端共享的环境变量
   */
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  /*
  ** 编译配置
  */
  build: {
    /**
     * 自定义打包文件名
     */
    filenames: {
      app: 'index.[chunkhash].js'
    },
    /**
     * 自定义webpack加载器
     */
    loaders: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 10000, // 10KO
          name: 'img/[name].[hash].[ext]'
        }
      }
    ],
    /**
     * 配置webpack插件
     */
    plugins: [
      // new webpack.DefinePlugin({
      //   'process.VERSION': require('./package.json').version
      // })
    ],
    /**
     * 打包进 vendor bundle的第三方模块
     */
    vendor: ['axios'],
    /**
     * 当运行 nuxt build 时，.nuxt/dist/ 目录内的内容会被上传至指定的 CDN 路径
     */
    // publicPath: 'https://cdn.nuxtjs.org',
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
