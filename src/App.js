import './App.css';
import {Route, Routes} from "react-router-dom"
import Layout from './components/Layout';
// import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import Products from "./pages/Products"
import SingleProducts from "./pages/SingleProduct"


function App() {
  return (
   <Layout>
     <div className="App">
        <Routes>
           <Route path='/'  element={<Home/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/products' element={<Products/>}/>
           <Route path='/singleproducts' element={<SingleProducts/>}/>
        </Routes>
       </div>
   </Layout>
  );
}

export default App;
