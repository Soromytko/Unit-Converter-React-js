import { react } from "@babel/types";
import { shouldInstrument } from "@jest/transform";
import { stackOffsetSilhouette, thresholdFreedmanDiaconis } from "d3";
import React from "react";
import ReactDOM from "react-dom";

var units = [];
units['м'] = 1;
units['см'] = 0.01;
units['км'] = 1000;

function renderUnits() {
  let result = []
  for(const [key, value] of Object.entries(units)) {
    result.push(<option key={key}>{key}</option>)
  }
  return result
  return (
    <select onChange={this.handleChange}>
      {result}
    </select>
  )
}

function conver(value, fromUnit, toUnit) {
  return value * units[fromUnit] / units[toUnit]
}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          fromInputValue: '0',
          fromSelectValue: 'м',
          toInputValue: '0',
          toSelectValue: 'км',
          newValue: '0',
          newUnit: 'unit',
          buttonClick: false
        };

        this.fromInputHandleChange = this.onFromInputFieldChanged.bind(this)
        this.toInputHandleChange = this.onToInputFieldChanged.bind(this)

        this.fromSelectHandleChange = this.onFromSelectHandleCnahged.bind(this)
        this.toSelectHandleChange = this.onToSelectHandleCnahged.bind(this)

        this.newValueHandleChange = this.onNewValueChange.bind(this)
        this.newUnitHandleChange = this.onNewUnitChange.bind(this)
        this.onAddHandle = this.onAdd.bind(this)
    }

    onFromInputFieldChanged(event) {
      this.setState({fromInputValue: event.target.value})
      var value = Number(event.target.value)
      if(value == NaN) return
      var newValue = conver(value, this.state.fromSelectValue, this.state.toSelectValue)
      this.setState({toInputValue: newValue})
    }

    onFromSelectHandleCnahged(event) {
      this.setState({fromSelectValue: event.target.value})
      var value = Number(this.state.fromInputValue)
      if(value == NaN) return
      console.log(value)
      var newValue = conver(value, event.target.value, this.state.toSelectValue)
      this.setState({toInputValue: newValue})
    }

    onToInputFieldChanged(event) {
      this.setState({toInputValue: event.target.value})
      var value = Number(event.target.value)
      if(value == NaN) return
      var newValue = conver(value, this.state.toSelectValue, this.state.fromSelectValue)
      this.setState({fromInputValue: newValue})
    }

    onToSelectHandleCnahged(event) {
      this.setState({toSelectValue: event.target.value})
      var value = Number(this.state.fromInputValue)
      if(value == NaN) return
      var newValue = conver(value, this.state.fromSelectValue, event.target.value)
      this.setState({toInputValue: newValue})
    }

    onNewValueChange(event) {
      this.setState({newValue: event.target.value})
    }

    onNewUnitChange(event) {
      this.setState({newUnit : event.target.value})
    }

    onAdd() {
      units[this.state.newUnit] = this.state.newValue
      this.setState({buttonClick: !this.state.buttonClick})
      console.log(Object.keys(units).length)
    }

    render() {
        return (
          <div>
            <div>
              <label>
                <input type="number" value={this.state.fromInputValue} onChange={this.fromInputHandleChange}/>
                <select value={this.state.fromSelectValue} onChange={this.fromSelectHandleChange}>
                  {renderUnits()}
                </select>
              </label>
              <label> = </label>
              <label>
                <input type="number" value={this.state.toInputValue} onChange={this.toInputHandleChange}/>
                <select value={this.state.toSelectValue} onChange={this.toSelectHandleChange}>
                  {renderUnits()}
                </select>
              </label>
            </div>
            <div>
              {/* <text>Значеине</text> */}
              <input type="number" value={this.state.newValue} onChange={this.newValueHandleChange}></input>
              {/* <text>Название</text> */}
              <input type="text" value={this.state.newUnit} onChange={this.newUnitHandleChange}></input>
              <button onClick={this.onAddHandle}>
                Добавить
              </button>
            </div>
          </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"))




