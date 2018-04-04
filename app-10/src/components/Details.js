import React, { Component } from 'react'
import axios from 'axios'

export default class Details extends Component{
    constructor(){
        super()
        this.state = {
            details: {}
        }
    }
    componentDidMount(){
        axios.get(`https://swapi.co/api/people/${this.props.match.params.id}`).then(res => {
            console.log(res.data)
            this.setState({
                details: res.data
            })
        })
    }
    render(){
        return(
            <div>
                <p>Name: {this.state.details.name}</p>
                <p>Birth Year: {this.state.details.birth_year}</p>
                <p>Eye Color: {this.state.details.eye_color}</p>
                <p>Gender: {this.state.details.gender}</p>
                <p>Skin Color: {this.state.details.skin_color}</p>
                <p>Height: {this.state.details.height}</p>
            </div>
        )
    }
}