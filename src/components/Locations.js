import "../App.css";

import { Component } from 'react'

class Locations extends Component {
    constructor(){
        super()
        this.state={
            locationsData:[]
        }

    }

    fetchLocationsData=()=>{
        fetch("https://ghibliapi.herokuapp.com/locations")
        .then(res=>res.json())
        .then((data)=>{
            this.setState({
                locationsData: data,
                showLocations: false,
            })
        })
    }

    componentDidMount(){
        this.fetchLocationsData()
    }

    handleShowHide=()=>{
        this.setState({
           showLocations: !this.state.showLocations,
        })
    }

    // handleButtonTitle=()=>{
    //     this.setState({
    //         buttonDisplay: "Hide Locations"
    //     })
    // }


    render() {

        let locationsList= this.state.locationsData.map((location)=>{
            return (
                <li className="location">  
                    <div>{location.name}</div>       
                    <div>{location.climate}</div>
                    <div>{location.terrain}</div>  
                </li>
            )
        })

        return (
            <div className="locations">
                <h1>List of Locations</h1>
                <button onClick={this.handleShowHide}>
                    {this.state.showLocations ? "Hide Locations": "Show Locations"}
                </button>
                <ul style={{display: this.state.showLocations ? "block" : "none"}}>
                    {locationsList}
                </ul>
                
            </div>
        )
    }
}

export default Locations