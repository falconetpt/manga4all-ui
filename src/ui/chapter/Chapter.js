import React, {useEffect, useState} from 'react';
import useRouteProps from '../../utils/context/useRouteProps';
import {Link} from "react-router-dom";

function Chapter() {
    const {location} = useRouteProps();
    const [elements, setElements] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        console.log("env", process.env.REACT_APP_SERVER_URL);
        fetch(process.env.REACT_APP_SERVER_URL + '/api/v1/scrapper/chapters', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                    id: location.state.id,
                    name: location.state.name,
                    imageUrl: location.state.imageUrl,
                    mangaUrl: location.state.mangaUrl
                })
            })
            .then(response => response.json())
            .then(data => {
                setElements(data);
                setIsLoading(false);
            }).catch(console.log);
    });


    return(
        <div>
            {isLoading && <p>Wait I'm Loading things for you :)</p>}
            <ul>
                {elements.map(value =>
                    <li key={value.url}>
                        <Link key={value} to={{
                            pathname: "/reader",
                            state: {
                                number: value.number,
                                name: value.name,
                                url: value.url
                            }
                        }} style={ { textAlign: "center", textDecoration: "none" } }>
                            {value.name}
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Chapter;
