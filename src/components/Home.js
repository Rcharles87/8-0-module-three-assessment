import "../App.css";
import { Component } from 'react'
import { Link } from "react-router-dom";



class Home extends Component {
    render() {
        return (
            <div className="home">
               
                <h1 className="title">Welcome to GhibliApp</h1>
                {/* <img 
                    className="ghibli-logo"
                    src="https://upload.wikimedia.org/wikipedia/sco/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png" 
                    alt="ghibli-logo" 
                    /> */}
               
            </div>
        )
    }
}

export default Home