import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findMemo } from './Store';


class FindForm extends Component {
    input = {
        fontSize:"14pt",
        color:"#006",
        padding:"0px",
    }
    btn = {
        fontSize:"12pt",
        color:"#006",
        padding:"1px 10px",
    }

    constructor(props){
        super(props);
        this.state = {
            find:''
        }
        this.doChange = this.doChange.bind(this);
        this.doAction = this.doAction.bind(this);
    }

    doChange(e){
        this.setState({
            find: e.target.value
        });
    }

    doAction(e){
        e.preventDefault();
        let action = findMemo(this.state.find);
        this.props.dispatch(action);
    }

    render(){
        return (
            <form onSubmit={this.doAction}>
                <input type="text" size="10" onChange={this.doChange}
                       style={this.input} value={this.state.message} />
                <input type="submit" style={this.btn} value="Find"/>
            </form>
        );
    }
}
export default connect((state)=>state)(FindForm);