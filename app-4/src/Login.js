import React, {Component} from 'react'

class Login extends Component{
    constructor(){
        super()

        this.state = {
            username: '',
            password: ''
        }
        this.handleUsername = this.handleUsername.bind( this )
        this.handlePassword = this.handlePassword.bind( this )
        this.alertUserPass = this.alertUserPass.bind( this )
    }
    handleUsername(val){
        this.setState({username: val})
    }
    handlePassword(val){
        this.setState({password: val})
    }
    alertUserPass(){
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render(){


        return(
            <div>
                <input placeholder="Username" onChange = {(e) => this.handleUsername(e.target.value)}/>
                <input placeholder="Password" onChange = {(e) => this.handlePassword(e.target.value)} />
                <button onClick = {this.alertUserPass}>Login</button>
            </div>
        )
    }
}

export default Login