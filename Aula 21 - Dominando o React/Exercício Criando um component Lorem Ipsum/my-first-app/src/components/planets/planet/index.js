import React, { Fragment } from "react";
import GrayImg from "../../shared/gray_img";
import DescriptionWithLink from "./DescriptionWithLink";


export async function getSatellites(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    let data = await response.json()
    return data
  }

class Planet extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            satellites: []
        }
    }
    
    componentDidMount() {
        getSatellites(this.props.id).then(data => {
            this.setState({
                satellites: data.satellites
            });
        })
    }

    render() {
        return (
            <Fragment>
                <DescriptionWithLink description={this.props.description} link_url={this.props.link_url} />
                <GrayImg img_url={this.props.img_url} />
                <ul>
                    {this.state.satellites.map((satellite, index) => 
                    <li key={index}>{satellite.name}</li> 
                    )}
                </ul>
                <hr />

            </Fragment>
        );
    }
}

export default Planet;