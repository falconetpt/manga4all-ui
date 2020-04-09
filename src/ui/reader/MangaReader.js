import React, {useEffect, useState} from 'react';
import useRouteProps from '../../utils/context/useRouteProps';

function Reader() {
    const {state} = useRouteProps();

    const {location} = useRouteProps();
    const [elements, setElements] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        fetch('http://localhost:8080/api/v1/scrapper/extract', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                number: location.state.number,
                name: location.state.name,
                url: location.state.url
            })
        })
            .then(response => response.json())
            .then(data => {
                setElements(data);
                setIsLoading(false);
            }).catch(console.log);
    });

    const imageStyle = {
        width: "90%",
        height: "100%"
    };

    return (
        <div style={{textAlign: "center", backgroundColor: "black"}}>
            {isLoading && <p>Wait I'm Loading things for you :)</p>}
            {
                elements.map(img =>
                    <div key={img}>
                        <img src={img} style={imageStyle}/>
                    </div>
                )
            }
        </div>
    );
}

export default Reader;