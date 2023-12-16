import './App.css';
import Home from "./component/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
// "homepage": "https://rgcbrajesh.github.io/vip2",
