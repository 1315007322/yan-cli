/*
 * @Author: yanhengfu 1315007322@qq.com
 * @Date: 2022-11-10 12:20:16
 * @LastEditors: yanhengfu 1315007322@qq.com
 * @LastEditTime: 2022-11-12 13:16:10
 * @FilePath: \yan-cli\src\router\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD
 */
import Home from 'Src/views/home';

const myRoutes = [
    {
        path: '/',
        ele: <Home />,
        children: [],
        label: "Home"
    },
    {
        path: '/',
        ele: <Home />,
        children: [],
        label: "Clubs"
    },
    {
        path: '/',
        ele: <Home />,
        children: [],
        label: "Events"
    },
    {
        path: '/',
        ele: <Home />,
        children: [],
        label: "Mentors"
    },
]

export default myRoutes;