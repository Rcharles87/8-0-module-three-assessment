import "../App.css";

import React, { Component } from 'react'

class People extends Component {
    constructor(){
        super()
        this.state={
            characterData:[],
            userInput: ""
        }

    }

    fetchCharacters=()=>{
        fetch("https://ghibliapi.herokuapp.com/people")
        .then(res=> res.json())
        .then((data)=>{
            this.setState({
                characterData: data
            })
        })
    }

    componentDidMount(){
        this.fetchCharacters()
    }

    handleUserInput=(event)=>{
        this.setState({
            userInput: event.target.value
        })
    }
    handleSubmit=(event)=>{
        event.preventDefault()
     
    }


    render() {
            let selectedCharactersObj = this.state.characterData.find((character)=>{
                return character.name.toLowerCase() === this.state.userInput.toLowerCase() 
            })

        return (
            <div className="people">
                <h1>Search for a Person</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    placeholder="Find Your Person" 
                    type="text" 
                    onInput={this.handleUserInput}
                    value={this.state.userInput} 
                    />
                    <button>Submit</button>
                </form>
                <div className="character-container">
                    <div>{selectedCharactersObj? selectedCharactersObj.name : "Not Found"}</div>
                    <div>{selectedCharactersObj?.age}</div>
                    <div>{selectedCharactersObj?.gender}</div>

                </div>
                


            </div>
        )
    }
}

export default People
