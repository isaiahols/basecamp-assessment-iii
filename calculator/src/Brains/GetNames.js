import React from 'react';
import ReactDOM from 'react-dom';

export class GetNames extends React.Component{
    constructor(props){
        super(props);
        this.state={
            firstname: 'unknown',
            lastname: 'unknown',
            value: 'unknown'
        };
        //this.changeLastName = this.changeLastName.bind(this)
    }


    handleChange(event) {
        this.setState({ title: event.target.value })
    }

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
        );
    }
}
ReactDOM.render(<GetNames/>,document.getElementById('root'));