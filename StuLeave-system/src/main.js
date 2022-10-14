import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
// 导入 ElementUI
import { Header, Container, Button, Aside, Main, Footer, Popover, Message, Notification, Alert, MessageBox, Drawer, TimelineItem, Timeline } from 'element-ui'

Vue.config.productionTip = false
// 使用 ElementUI
Vue.use(Header)
Vue.use(Container)
Vue.use(Button)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Popover)
Vue.use(Alert)
Vue.use(Drawer)
Vue.use(TimelineItem)
Vue.use(Timeline)
Vue.prototype.Notification
Vue.component(Message.name, Message)
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
new Vue({
  render: (h) => h(App),
  router
}).$mount('#app')
