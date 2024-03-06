import { Link, Route, Routes } from 'react-router-dom'
import "./header.css"
import src from "../assets/logo.png"

const Header = () => {
    return (
        <div>
            <header className="container">
                <img src={src} alt="Little Lemon logo" />
            </header>

            <nav className="container">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/book">Book</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={null} />
                <Route path="/menu" element={null} />
                <Route path="/book" element={null} />
                <Route path="/about" element={null} />
            </Routes>
        </div>
    )
}

export default Header