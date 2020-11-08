import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Memo from './memo/Memo';
import AddForm from './memo/AddForm';
import FindForm from './memo/FindForm';
import DelForm from './memo/DelForm';


class App extends Component {
  td = {
    width: "250px",
  }

  constructor(props){
    super(props)
  }

  render() {
    return (
        <div>
          <h1>Memo</h1>
          <AddForm />
          <hr />
          <table>
              <tbody>
              <tr>
                  <td style={this.td}><FindForm /></td>
                  <td style={this.td}><DelForm /></td>
              </tr>
              </tbody>
          </table>
            <Memo />
        </div>
    )
  }
}

export default connect()(App);
