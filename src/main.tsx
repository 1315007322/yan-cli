/*
 * @Author: yanhengfu 1315007322@qq.com
 * @Date: 2022-11-10 12:20:16
 * @LastEditors: yanhengfu 1315007322@qq.com
 * @LastEditTime: 2022-11-12 13:10:22
 * @FilePath: \yan-cli\src\main.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import 'Assets/common.css'
import { createRoot } from "react-dom/client";
import { history, HistoryRouter } from 'Utils/route'
import { Route, Routes } from 'react-router-dom';
import myRoutes from 'Src/router/index';
import { Provider } from 'react-redux'
import store from './store'
import BaseLayout from './layout';

import './style/global.less'

const container = createRoot(document.getElementById('root'))

const getRoute = () => {
    const result: any = []
    myRoutes.map(item => {
        result.push(<Route path={item.path} key={item.path} element={item.ele} />)
    })
    return result;
}

container.render(
    <HistoryRouter history={history}>
        <Provider store={store}>
            <BaseLayout >
                <Routes>
                    {getRoute()}
                </Routes>
            </BaseLayout>
        </Provider>

    </HistoryRouter>,

)