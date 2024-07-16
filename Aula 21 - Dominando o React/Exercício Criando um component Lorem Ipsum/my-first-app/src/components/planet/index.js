import React, { Fragment, useEffect, useState } from "react";
import GrayImg from "../shared/gray_img";
import DescriptionWithLink from "../planets/planet/DescriptionWithLink";
import FormSatellites from "./form";

import { useParams, useNavigate, Navigate } from "react-router-dom";

export async function getPlanet(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`);
    let data = await response.json();
    return data;
}

const Planet = () => {
    const [satellites, setSatellites] = useState([]);
    const [planet, setPlanet] = useState({});
    const [redirect, setRedirect] = useState(false);


    let { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        getPlanet(id).then(data => {
            setSatellites(data['satellites']);
            setPlanet(data['data']);
        }, error => {
            setRedirect(true);
        })
    }, [id]);

    const goToPlanets = () => {
        navigate('/');
    };

    const addSatellites = (new_satellite) => {
        setSatellites([...satellites, new_satellite]);
    };

    let title = <h4><u>{planet.name}</u></h4>;

    if(redirect)
        return <Navigate to='/'/>

    return (
        <Fragment>
            {title}
            <DescriptionWithLink description={planet.description} link_url={planet.link_url} />
            <GrayImg img_url={planet.img_url} />
            <h4>Satélites</h4>
            <hr/>
            <FormSatellites addSatellites={addSatellites} />
            <hr/>
            <ul>
                {satellites.map((satellite, index) =>
                    <li key={index}>{satellite.name}</li>
                )}
            </ul>
            <hr />
            <button type="button" onClick={goToPlanets}>Voltar a listagem!</button>
        </Fragment>
    );
};

export default Planet;
