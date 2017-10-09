const resolve = require('path').resolve

const isVueRule = (rule) => {
  return rule.test.toString() === '/\\.vue$/'
}
const isSASSRule = (rule) => {
  return ['/\\.sass$/', '/\\.scss$/'].indexOf(rule.test.toString()) !== -1
}
const sassResourcesLoader = {
  loader: 'sass-resources-loader',
  options: {
    resources: [
      resolve(__dirname, 'scss/var.scss')
    ]
  }
}

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Janzen的博客',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Janzen的小博客'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'blog，博客，个人，前端，nuxt'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /**
   * 组件缓存
   */
  cache: {
    max: 1000, // 缓存组件数
    maxAge: 900000 // 缓存时间
  },
  /**
   * 配置全局 CSS 文件、模块、库（每个页面都会被引入）
   */
  css: [
    // element-ui css文件
    '~/assets/elementui/index.css',
    // 项目中的 Sass 文件
    // '~/assets/scss/index.scss'
    {
      src: '~/assets/scss/index.scss',
      lang: 'scss'
    } // 指定 scss 而非 sass
  ],
  /**
   * 配置在客户端和服务端共享的环境变量
   */
  env: {
    baseUrl: process.env.BASE_URL || 'http://ifamily.kidphp.com/api/mobile/index.php?version=9&module='
  },
  /**
   * 页面切换的加载进度条
   */
  loading: {
    color: 'blue',
    height: '5px'
  },
  /**
   *  Vue.js 插件
   */
  plugins: [
    '~plugins/element-ui', {
      src: '~plugins/axios',
      ssr: false
    }
  ],

  modules: [
    '@nuxtjs/axios',
  ],
  /**
   * 中间件
   */
  router: {
    middleware: 'auth'
  },
  /**
   * babel配置
   */
  babel: {
    plugins: [
      ['component', [{
        libraryName: 'element-ui',
        styleLibraryName: 'theme-default'
      }]]
    ]
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
    loaders: [{
      test: /\.(png|jpe?g|gif|svg)$/,
      loader: 'url-loader',
      query: {
        limit: 10000, // 10KO
        name: 'img/[name].[hash].[ext]'
      }
    }],
    /**
     * 配置webpack插件
     */
    // plugins: [
    //   new webpack.DefinePlugin({
    //     'process.VERSION': require('./package.json').version
    //   })
    // ],
    /**
     * 打包进 vendor bundle的第三方模块
     */
    vendor: ['axios', 'element-ui'],
    /**
     * 当运行 nuxt build 时，.nuxt/dist/ 目录内的内容会被上传至指定的 CDN 路径
     */
    // publicPath: 'https://cdn.nuxtjs.org',
    /*
     ** Run ESLINT on save
     */
    extend(config, ctx) {
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
