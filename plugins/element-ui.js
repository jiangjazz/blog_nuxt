import Vue from 'vue'
// 按需引入 Element
import '~/assets/elementui/index.css'
// import 'element-ui/lib/theme-default/index.css'
import {
  Button,
  Select,
  Row,
  Col,
  Carousel,
  CarouselItem
} from 'element-ui'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import locale from 'element-ui/lib/locale'

// 设置语言
locale.use(zhLocale)

// 引入组件
Vue.use(Button)
Vue.use(Select)
Vue.use(Row)
Vue.use(Col)
Vue.use(Carousel)
Vue.use(CarouselItem)
