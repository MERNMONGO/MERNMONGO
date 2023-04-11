import { Link } from 'react-router-dom';

export default function Navbar() {
  
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">


  
    
    
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link"to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/projects">Projects</Link>
        </li>
      </ul>
    

</nav>
  );
}


