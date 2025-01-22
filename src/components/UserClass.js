import { Component } from "react";
class UserClass extends Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
            }
        };
        
    }
    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/beard-boy9934");
        const json=await data.json();
        this.setState({
            userInfo:json
        });
    }
    async componentDidUpdate(){
        
    }
    async componentWillUnmount(){
        
    }
    render(){
        const {login,id,avatar_url}=this.state.userInfo;
        return (
            <div className="user-card">
            <img src={avatar_url} alt="Loading" />
              <h2>Name: {login}</h2>
              <h3>Id:{id}</h3>
              <h4>Contact: kmr.sny913520@gmail.com</h4>
            
            </div>
          )
    }
}
export default UserClass