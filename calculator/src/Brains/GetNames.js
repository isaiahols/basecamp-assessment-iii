import React from 'react';
import ReactDOM from 'react-dom';

export class GetNames extends React.Component{
    constructor(props){
        super(props);
        this.state={
            firstname: 'unknown',
            lastname: 'unknown',
            value: 'unknown'
            //Do I put this here or should this be in the App.js?
        };
        //this.changeLastName = this.changeLastName.bind(this)
    }


    handleChange(event) {
        this.setState({ title: event.target.value })
    }
    //I want to make a form that you can fill out and
    //have the data available for printing somewhere else
    render(){
        return (
            <form>
                First name:<br/>
                <input type="text" name="firstname"/><br/>
                Last name:<br/>
                <input type="text" name="lastname"/><br/>
                something<br/>         
                <input type="text" name="title" value={this.state.title}
                onChange={this.handleChange.bind(this)}/>
                <input type="submit" value="submit"/>
            </form>
            //I got the last thing from the internet and do not know exatly what it does.
            
        );
    }
}
ReactDOM.render(<GetNames/>,document.getElementById('root'));