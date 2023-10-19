
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './component/body/Body';
import Header from './component/header/Header';
import VideoContainer from './component/rightcontainer/VideoContainer';
import WatchPage from './component/rightcontainer/WatchPage';
import MainContainer from './component/rightcontainer/MainContainer';


const appRouter=createBrowserRouter([
  {
 path:'/',
 element: <Body/>,
 children:[
  {
  path:'/',
  element: <MainContainer/>,


 }
,  {
  path:'/watch',
  element: <WatchPage/>,
  

 }
]
}


])



function App() {


  



  return (
    <div className="App">
     <Header/>
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
