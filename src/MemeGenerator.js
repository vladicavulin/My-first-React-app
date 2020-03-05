import React, {Component} from 'react'

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state ={
            character:""
        }
    }
    
    componentDidMount() {
        fetch("https://swapi.co/api/people/1/")
        .then(response => response.json())
        .then(data => {
            this.setState({
                character:data
            })
        })
    }
    render() {
    return (
        <div>{this.state.character.name}</div>
        
    )
}
}

export default MemeGenerator