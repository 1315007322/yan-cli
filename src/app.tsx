import "./app.css";
import logo from './assets/logo.jpg'

const App = () => {
    const name:string = "yanhengfu"
    return (
        <div>
            <div className="title">hello world</div>
            <div className="logo">123</div>
            <img src={logo} alt="" />
        </div>
    );
};

export default App;