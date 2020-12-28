import React from "react"
import Autocomplete from "./autocomplete"

export default class Searchbox extends React.Component{
    constructor(props){
        super(props);
        this.state = {username:""};
    }

    render(){
        return(
            <form>
                <input 
                    name="username"
                    placeholder="GitHub Username"
                    value={this.state.username}
                    onChange={e => this.setState({username: e.target.value})}
                />
                <Autocomplete data={this.state}/>
            </form>
           
        );
    }
} 

// function Searchbox(){

// }