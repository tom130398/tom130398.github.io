import React, {Component} from "react";
import "./MainForm.css"
import EnergySliderBar from "../Footer/Slider/Slider";
class MainForm extends Component {
    constructor(props) {
        super(props);
        this.state = {sliderValue: [25, 20, 20, 35, 0], 
                      price: [6.20, 6.35, 5.80, 5.10, 4.95]};
        this.rebalance = this.rebalance.bind(this);
    }
    userPrice = () => {
        var ret = 0;
        for(var i = 0;i < this.state.sliderValue.length; i++) {
            ret += (this.state.sliderValue[i] / 100) * this.state.price[i];
        }
        return ret;
    }

    rebalance = (index, changedValue) => {
        let sliderValue = this.state.sliderValue;
        console.log("first:", sliderValue);
        var deltaI = changedValue - sliderValue[index];
        // the value is increase
        var remainder = deltaI % 4;
        console.log("remainder: ", remainder);
        var div = -Math.trunc(deltaI / 4);
        console.log("div: ", div);
        for(var i = 0; i < sliderValue.length; i++) {
            if(sliderValue[i] === 0 && div < 0)
                continue;
            if(i !== index) {
                sliderValue[i] += div;
            }
        }
        for(i = 0; i < sliderValue.length; i++) {
            if(remainder === 0)
                break;
            if(sliderValue[i] === 0 && remainder > 0)
                continue;
            if(i !== index) {
                if(remainder > 0) {
                    remainder--;
                    sliderValue[i]--;
                }
                if(remainder < 0) {
                    remainder++;
                    sliderValue[i]++;
                }
            }
        }
        sliderValue[index] = parseInt(changedValue);
        console.log("second", sliderValue);
        this.setState({sliderValue});
        this.forceUpdate();
    }

    render() {
        return (
            <div style={{height:"100%"}}>
                <div style={{width:"50%", display:"inline-block"}}>
                    <EnergySliderBar 
                        content="solar power" 
                        sliderValue={this.state.sliderValue[0]}
                        id={0}
                        onChange={this.rebalance}/>
                    <EnergySliderBar 
                        content="wind power" 
                        sliderValue={this.state.sliderValue[1]}
                        id={1}
                        onChange={this.rebalance}/>
                    <EnergySliderBar 
                        content="hydro power" 
                        sliderValue={this.state.sliderValue[2]}
                        id={2}
                        onChange={this.rebalance}/>
                    <EnergySliderBar 
                        content="nuclear power" 
                        sliderValue={this.state.sliderValue[3]}
                        id={3}
                        onChange={this.rebalance}/>
                    <EnergySliderBar 
                        content="fossil power" 
                        sliderValue={this.state.sliderValue[4]}
                        id={4}
                        onChange={this.rebalance}/>
                </div>
                <div className="price">
                    <p>The amount of money you need to pay: </p>
                    <h1>{this.userPrice().toFixed(2)} c/kWh</h1>
                </div>
                <img src="../">
                <button className="button">
                    I have made my choice
                </button>
            </div>
        );
    }
}

export default MainForm;