import "../App.css";
import { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <Link to="/">
                    <img 
                    className="totoro-logo"
                    src="https://upload.wikimedia.org/wikipedia/sco/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png" 
                    alt="totoro-logo" 
                    />
                </Link>
                <Link to="/movies" className="link">Movies</Link>
                <Link to="/people" className="link">People</Link>
                <Link to="/locations" className="link">Locations</Link>
            </nav>
        )
    }
}

export default Navbar