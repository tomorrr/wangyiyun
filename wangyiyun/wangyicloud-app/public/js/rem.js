/*
 * @Author: wangbyyds 1362872827@qq.com
 * @Date: 2023-05-24 17:58:35
 * @LastEditors: wangbyyds 1362872827@qq.com
 * @LastEditTime: 2023-05-24 18:24:53
 * @FilePath: \wangyiyun\wangyicloud-app\public\js\rem.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function remSize() {
  var deviceWidth = document.documentElement.clientWidth || window.innerWidth;
  if (deviceWidth >= 750) {
    deviceWidth = 750;
  }
  if (deviceWidth <= 320) {
    deviceWidth = 320;
  }
  document.documentElement.style.fontSize = (deviceWidth / 7.5) + "px";
  //设置字体大小
  document.querySelector("body").style.fontSize = 0.3 + "rem";
}
remSize();
// 当窗口变化开始调用
window.onresize = function () {
  remSize();
};
