import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'

export default class Details extends Component{
    constructor(){
        super()
        this.state = {
            characters : []
        }
    }
    componentDidMount(){
        axios.get('https://swapi.co/api/people').then(res =>{
            console.log(res.data.results)
            this.setState({
                characters: res.data.results
            })
        })
    }
    render(){
        var charactersList = this.state.characters.map((e,i) => {
            return(
                <div key={i}>
                    <Link to={`/details/${i+1}`}><h2>{e.name}</h2></Link>
                </div>
            )
        })
        return(
            <div>
                <h1>Hit an api once you get the server setup</h1>
                {charactersList}
            </div>
        )
    }
}