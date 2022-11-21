import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.js'
import SinglePost from './pages/SinglePost.js'
import AddPost from './pages/AddPost.js'
import './assets/styles.css'
import Header from './components/Header.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/single-post' element={<SinglePost />} />
      <Route path='/add-post' element={<AddPost />} />
      <Route path='*' element={<h2>Page Not Found 🥲 </h2>} />
    </Routes>
    <Footer />
    </BrowserRouter>

  );
}

export default App;
