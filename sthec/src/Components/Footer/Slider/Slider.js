import React, {useState} from "react";
import "./Slider.css";
const EnergySliderBar = (props) => {
    const [sliderValue, setSliderValue] = useState(props.sliderValue);
    const handleChange = (event) => {
        props.onChange(props.id, event.target.value);
        setSliderValue(event.target.value);
    }
    return(
        <div>
            <p className="energyLabel">{props.content}: </p>
            <input type="range" min="1" max="100" defaultValue={sliderValue} step="1"
            onChange={handleChange} class="slider"></input>
        </div>
    );
}

export default EnergySliderBar;