/*
 * @Author: wangbyyds 1362872827@qq.com
 * @Date: 2023-05-25 21:25:46
 * @LastEditors: wangbyyds 1362872827@qq.com
 * @LastEditTime: 2023-05-26 15:28:42
 * @FilePath: \wangyiyun\wangyicloud-app\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Button } from 'vant';


const app = createApp(App)

app.use(router)
app.use(Button);
// app.use(Swipe);
// app.use(SwipeItem);

app.mount('#app')
