import { react } from "@babel/types";
import { shouldInstrument } from "@jest/transform";
import { thresholdFreedmanDiaconis } from "d3";
import React from "react";
import ReactDOM from "react-dom";

var units = [];
units['см'] = 0.01;
units['м'] = 1;
units['км'] = 1000;

function render() {
  let result = []
  for(const [key, value] of Object.entries(units)) {
    result.push(<option key={key} value={key}>{key}</option>)
  }
  return (
    <select onChange={this.handleChange}>
      {result}
    </select>
  )
}

function conver(value, fromUnit, toUnit) {
  return value * units[fromUnit] / units[toUnit]
}

class DropDownList extends React.Component {
  constructor(props) {
    super(props)

    this.items = []
    this.handleChange = this.onValueChanged.bind(this)
  }

  onValueChanged(event) {
    console.log('onValueChanged', event.target.value)
  }

  addItem(name, value) {
    this.items[name] = value;
  }

  render() {
    let result = []
    for(const [key, value] of Object.entries(units)) {
      result.push(<option key={key} value={key}>{key}</option>)
    }
    return (
      <select onChange={this.handleChange}>
        {result}
      </select>
    )
  }
}

class FieldReact extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.onHandleChange.bind(this)
    this.dropDownList = new DropDownList();
  }

  onHandleChange(event) {
    console.log(event.target.value)
  }

  render () {
    return (
          <label>
            <input id={this.id} type="text" onChange={this.handleChange}></input>
            {this.dropDownList.render()}
          </label>
    )
  }
}

class App extends React.Component {
    constructor(props) {
        super(props);

        // this.fromDropDownList = new DropDownList();
        // this.toDropDownList = new DropDownList();

        // this.fromDropDownList.handleChange = this.onC.bind(this);

        // for (let i = 0; i < 3; i++) {
        //   this.fromDropDownList.addItem("item" + i, i);
        //   this.toDropDownList.addItem("item" + i, i);
        // }

        this.fromField = new FieldReact()
        this.fromField.id = "fromInput"
        this.fromField.handleChange = this.onFromInputFieldChanged.bind(this)
        this.fromField.dropDownList.handleChange = this.onFromDropListHandleCnahged.bind(this)

        this.toField = new FieldReact()
        this.toField.id = "toInput"
        this.toField.handleChange = this.onToInputFieldChanged.bind(this)
        this.toField.dropDownList.handleChange = this.onToDropListHandleCnahged.bind(this)

    }

    onFromInputFieldChanged(event) {
      var value = Number(event.target.value)
      if(value == NaN) return
      // console.log(this.toField)
      var newValue = conver(value, 'км', 'м')
      //var input = document.getElementById("toInput");
      //setNativeValue(input, newValue);
    }

    onFromDropListHandleCnahged(event) {
      console.log("from value", event.target.value);
    }

    onToInputFieldChanged(event) {
      console.log("to inputField changed", event.target.value)
    }

    onToDropListHandleCnahged(event) {
      console.log("to value", event.target.value);
    }

    render() {
        return (
            <div>
              {this.fromField.render()}
              <label> = </label>
              {this.toField.render()}
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


  //https://stackoverflow.com/questions/30683628/react-js-setting-value-of-input
  function setNativeValue(element, value) {
    let lastValue = element.value;
    element.value = value;
    let event = new Event("input", { target: element, bubbles: true });
    // React 15
    event.simulated = true;
    // React 16
    let tracker = element._valueTracker;
    if (tracker) {
        tracker.setValue(lastValue);
    }
    element.dispatchEvent(event);
}
//var input = document.getElementById("ID OF ELEMENT");
//setNativeValue(input, "VALUE YOU WANT TO SET");


ReactDOM.render(<App/>, document.querySelector("#root"))




