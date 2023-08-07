
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index  element={<Home/>} />
          <Route path='/singleproduct'  element={<SingleProduct/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
