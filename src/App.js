import { Link, Route, Routes } from 'react-router-dom';
import About from './About';
import './App.css';
import Blog from './Blog';
import BlogDetail from './BlogDetail';
import Home from './Home';
import Notfound from './NotFound';
import Welcome from './Welcome';
import Login from './Login';

function App() {
  return (

    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="welcome">Welcome</Link>
        <Link to="blogs">Blogs</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="welcome" element={<Welcome />} >
          <Route path="about" element={<About />} />
        </Route>
        <Route path="blogs" element={<Blog />} />
        <Route path="blogs/:slug" element={<BlogDetail />} />
        <Route path="login" element={<Login />} />
        {/* <Route path="blogs" element={<Blog />} >
          <Route path="/=:slug" element={<BlogDetail />} />
        </Route> */}
        <Route path="*" element={<Notfound />} />
      </Routes>

    </div>

  );
}

export default App;
