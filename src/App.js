import Header from './components/header';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './pages/home';
import Contact from './pages/contact';
import Blog from './pages/blog';
import Service from './pages/service';
import About from './pages/about';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer';
function App() {
  return (
    <div className="App m-auto">
      <Router>
        <Header />
        <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contact"element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
