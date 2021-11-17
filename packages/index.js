// 导入封装的组件
import fontChange from './components/font-change'
import Mt1 from './components/mt1'

const components = [Mt1,fontChange]

const install = function (Vue) {
  // 遍历注册所有的组件
  components.map(com=>{
    Vue.component(com.name,com)
  })
}

// 注意这里的判断，很重要
if(typeof windwo !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// 导出组件库
export default {
  install,
  // 组件列表
  ...components,
}