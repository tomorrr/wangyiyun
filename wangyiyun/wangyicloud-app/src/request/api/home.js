/*
 * @Author: wangbyyds 1362872827@qq.com
 * @Date: 2023-05-26 21:02:21
 * @LastEditors: wangbyyds 1362872827@qq.com
 * @LastEditTime: 2023-05-26 21:12:08
 * @FilePath: \wangyiyun\wangyicloud-app\src\request\api\home.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import service from ".."
//获取轮播图
export function getBanner(){
    return service({
        method:'GET',
        url:"banner?type=2"
    })
}