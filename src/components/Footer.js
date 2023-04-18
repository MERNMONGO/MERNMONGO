import { Link } from "react-router-dom";

function Footer() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-bottom ">


  
    
    
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link"to="/contact">Contact</Link>
        </li>
       
      </ul>
    

</nav>
  );
}

export default Footer;
