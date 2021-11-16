// 导入封装的组件
import fontChange from './font-change.vue'

const components = {
  // 通过install来安装组件
  install(Vue) {
    Vue.component(
      'fontChange', fontChange
    )
  }
}

// 注意这里的判断，很重要
if(typeof windwo !== 'undefined' && window.Vue) {
  window.Vue.use(comment)
}

// 导出组件库
export default components