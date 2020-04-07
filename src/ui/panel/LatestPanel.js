import React, {Component, useEffect, useState} from "react"
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper/Paper";

export default function SpacingGrid() {
    const [page, setPage] = useState(1);
    const [elements, setElements] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const loadNextPage = () => {
        setPage(page + 1);
    };

    const loadPreviousPage = () => {
        setPage(page + 1);
    };

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/scrapper/latest/' + page,
            {
                method: "GET"
            })
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                setElements(data);
                setIsLoading(false);
            })
            .catch(console.log)
    }, [page]);

    const mangaImageStyle = {
        maxWidth: "100%",
        maxHeight: "100%"
    };

    const gridMargin = {
        margin: "10px"
    };

    const paper = {
        height: "250px",
        width: "140px",
        padding: "20px"
    };


    return elements.map((value) => (
            <a href={value.mangaUrl} style={ { textAlign: "center", textDecoration: "none" } }>
                <Grid key={value} style={gridMargin} item>
                    <Paper className={paper}>
                        <img src={value.imageUrl} alt={value.name} style={mangaImageStyle}/>
                        <p><strong>{value.name}</strong></p>
                    </Paper>
                </Grid>
            </a>
        ));
}
