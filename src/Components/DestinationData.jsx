import { Component } from "react";
import "./Destination.css"
import night from "../assets/1.jpg"
import night2 from "../assets/2.jpg"
import night3 from "../assets/3.jpg"
import night4 from "../assets/4.jpg"

class DestinationData extends Component{
    render(){
        return(
            <div className={this.props.className}>
            <div className="desc-text">
                <h2>{this.props.heading}</h2>
                <p>{this.props.text} </p>
            </div>
            <div className="image">
              <img src={this.props.img1} alt="" />
              <img src={this.props.img2} alt="" />
            </div>
        </div>
        )
    }
}

export default DestinationData