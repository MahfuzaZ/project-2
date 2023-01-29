import './App.css';
// import {Route, Routes} from "react-router-dom"/
import Layout from './components/Layout';
// import Header from './components/Header';
import About from './pages/About';


function App() {
  return (
   <Layout>
     <div className="App">
        <About/>
       </div>
   </Layout>
  );
}

export default App;
