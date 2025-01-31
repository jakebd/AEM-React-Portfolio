import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Article from './pages/Article/Article';
import './App.css';
import Category from './pages/Category/Category';
import ErrorPage from './pages/Error/ErrorPage';
import ContactPage from './pages/Contact/Contact';
import DynamicArticle from './pages/DynamicArticle/DynamicArticle';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:id" element={<Category />} /> 
      <Route path="/article/:id" element={<Article />} /> 
      <Route path="/dynamicarticle/:id" element={<DynamicArticle />} /> 
      <Route path="/contact" element={<ContactPage />} /> 
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Router>
);

export default App;