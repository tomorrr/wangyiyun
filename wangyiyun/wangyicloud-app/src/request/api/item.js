/*
 * @Author: wangbyyds 1362872827@qq.com
 * @Date: 2023-05-28 20:18:45
 * @LastEditors: wangbyyds 1362872827@qq.com
 * @LastEditTime: 2023-05-28 20:21:03
 * @FilePath: \wangyiyun\wangyicloud-app\src\request\api\item.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import service from "..";
//获取歌单详情页
export function getMusicItemList(data){
    return service({
        method:"GET",
        url:`/playlist/detail?id=${data}`
    })
}