
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Image1 from './components/Image1';
import Image2 from './components/Image2';
import Image5 from './components/Image5';
import Image6 from './components/Image6';
import Image8 from './components/Image8';
import Image9 from './components/Image9';
import Image10 from './components/Image10';
import Navigation from './components/navagation';



function App() {
  return (
    <Router>
      <div className="container">
        <h1 id="title"  className='text-center my-3'>Folklore Gallery</h1>
      </div>
      <Routes>
        <Route path="/photo1" element={<Image1 className="image-size"/>}/>
        <Route path="/photo2" element={<Image2 className="image-size"/>}/>
        <Route path="/photo5" element={<Image5 className="image-size"/>}/>
        <Route path="/photo6" element={<Image6 className="image-size"/>}/>
        <Route path="/photo8" element={<Image8 className="image-size"/>}/>
        <Route path="/photo9" element={<Image9 className="image-size"/>}/>
        <Route path="/photo10" element={<Image10 className="image-size"/>}/>
      </Routes>
      <Navigation></Navigation>
    </Router>
   
  );
}

export default App;
