import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class MakeStuff extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    handleClick(){
        alert('How do I style this with CSS?')
    }

    render(){
        return (
        <div>
            <form>
                How does this work?
            </form>
            Hi there <br />
            <button onClick={this.handleClick}>Push This?</button>
        </div>
    );}
}