import React, { Fragment } from "react";
import GrayImg from "../../shared/gray_img";
import DescriptionWithLink from "./DescriptionWithLink";

import { Link } from "react-router-dom";
//esse é como um component a literalmente um link 
const Planet = (props) => {
    let title
    if (props.title_with_underline)
        title = <h4><u>{props.name}</u></h4>
    else
        title = <h4>{props.name}</h4>
        return (
            <Fragment>
                <Link to={`/planet/${props.id}`}>{title}</Link>
                <DescriptionWithLink description={props.description} link_url={props.link_url} />
                <GrayImg img_url={props.img_url} />
            </Fragment>
        );
    }


export default Planet;