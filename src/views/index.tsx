import {Typography,Button} from 'antd'

const {Title} = Typography
const Index = () => {
    const name:string = "yanhengfu"
    return (
        <div>
            <Title level={2} >欢迎进入</Title>
            <Button>我</Button>
        </div>
    );
};

export default Index;