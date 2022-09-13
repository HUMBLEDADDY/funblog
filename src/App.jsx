// import logo from './logo.svg';
import './App.less';
import GetRoutes from './routes/route'
import {BrowserRouter} from 'react-router-dom'
import "antd/dist/antd.min.css";

function App() {

  return (
    <BrowserRouter>
      <GetRoutes></GetRoutes>
    </BrowserRouter>
  );
}

export default App;
