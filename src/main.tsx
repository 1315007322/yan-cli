import './assets/common.css'
import { render } from "react-dom";
import { history, HistoryRouter } from './utils/route'
import { Route, Routes } from 'react-router-dom';

// const getRoute = () => {
//     console.log(myRoutes);
    
//     const result:any = []
//     myRoutes.map(item => {
//         result.push(<Route path={item.path} element={item.ele}/>)
//     })
//     return result;
// }

render(
    <HistoryRouter history={history}>
        <Routes>
            {/* {getRoute()} */}
        </Routes>
    </HistoryRouter>,
    document.getElementById('root')
)