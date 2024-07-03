import React, { Fragment } from "react";

const DescriptionWithLink = (props) => {
    if(!props.description)
        return null

    if(props.link_url) {
        return (
            <Fragment> 
                <p>{props.description}</p>
                <p>
                    <a href={props.link_url}>{props.link_url}</a>
                </p>        
            </Fragment>
        )
    } else{
        return (
            <Fragment> 
                <p><u>{props.description}</u></p>
            </Fragment>
        )
    }
}

export default DescriptionWithLink