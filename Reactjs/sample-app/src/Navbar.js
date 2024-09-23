import './Navbar.css'
import './Sidebar.css'
function Navbar() {
    return (
      <nav className="navbar">
        <div className="logo">
          <a href="#">MyLogo</a>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    )
  
  }



function Sidebar() {
    return (
      <div class="sidebar">
        <h2>My Sidebar</h2>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
     
    )
  }

export {Navbar , Sidebar}