import React,{Component} from 'react';

class User extends Component{
    render(){
        const {user}=this.props
        return(
            <div>
            <h3>Informacion del usuario</h3>
            <h4>Nombre del Usuario: {user.login}</h4>
            <h4>NOmbre de la persona: {user.name}</h4>
            <h4>followers: {user.followers}</h4>
            <h4>following: {user.following}</h4>
            </div>
        )
    }
}
// para mandar la informacion y se pueda ver 
export default User;