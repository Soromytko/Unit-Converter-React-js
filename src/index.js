import { thresholdFreedmanDiaconis } from "d3";
import React from "react";
import ReactDOM from "react-dom";

let items = [];
for(var i = 0; i < 3; i++) {
  items.push(<option value="lime">Lime</option>);
}


class DownDropList extends React.Component {
    constructor (props) {
        super(props)

        this.items = [];
    }

    addItem(name, value) {
      this.items.key = value;
    //   this.items.push({
    //     key: name,
    //     value: value
    // });
    }

    getReactItems() {
      let reactItems = []
      for(const [key, value] of Object.entries(this.items)) {
        reactItems.push(<option value={key}>{key}</option>);
      }
      return 
    }

    render () {
        return (
            <select>
              {/* <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option> */}
              {items} 
            </select>
            //<button>{this.props.value}</button>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.fromList = new DownDropList();
        for (let i = 0; i < 3; i++) {
          this.fromList.addItem("sd", i);
        }
         
    }

    render() {
        const  centerStryle = {
            display: 'table',
            margin: '0 auto',
            border: '1px solid black',
        };

        const  innerStyle = {
            display: 'table',
            verticalAlign: 'top',
            horizontalAligment: 'right',
            margin: '0 auto',
            border: '1px solid black',
            width: '40%',
        };

        const  rightStyle = {
            display: 'table',
            verticalAlign: 'top',
            margin: '0 auto',
            border: '1px solid black',
            width: '40%',
        };

        // const outerStyle = {
        //     border: '1px solid red',
        //     marginTop: '200px',
        //     width: '100%',
        // }

        return (
            <div>
                <div>
                    {/* <DownDropList value={"Button1"}>Button1</DownDropList>
                    <DownDropList value={'Button1'}>Button2</DownDropList> */}
                </div>
            </div>
            
        )
    }
}

class Fr extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'coconut'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your favorite flavor:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }


  class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }



ReactDOM.render(<App/>, document.querySelector("#root"))

// import * as d3 from "d3"
// import * as Geo from "./geo.json"

// import {React} from 'react'
// import ReactDOM from 'react-dom/client'
// import {App} from "./components/app";

// document.addEventListener("DOMContentLoaded", setup)

// function setup(){
//     const root = ReactDOM.createRoot(document.getElementById('root'));
//     const element = <App />;
//     root.render(element);

// }



