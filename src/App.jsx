// import logo from './logo.svg';
import './App.css';
import {default as routes} from './routes/route'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import "antd/dist/antd.min.css";
// import Home from './pages/Home/Home';

function App() {
  console.log(routes)
  return (
    <BrowserRouter>
      <Routes>
          {routes.map((route,idx)=>(
            <Route
            key={idx}
            path={route.path}
            element={route.component}
            // render={
            //   props=>{
            //     const {component:Component} = route;
            //     return <Component/>
            //   }
            // }
            />
          ))}
      </Routes>

  </BrowserRouter>
  );
}

export default App;
