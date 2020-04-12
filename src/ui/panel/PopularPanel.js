import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 2,
    },
    paper: {
        height: "250px",
        width: "140px",
        padding: "20px"
    },
    control: {
        padding: theme.spacing(2),
    },
}));

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
        fetch(process.env.REACT_APP_SERVER_URL + '/api/v1/scrapper/popular/' + page,
            {
                method: "GET"
            })
            .then(res => res.json())
            .then((data) => {
                setElements(data);
                setIsLoading(false);
            })
            .catch(console.log)
    }, [page]);

    const classes = useStyles();

    const mangaImageStyle = {
        maxWidth: "100%",
        maxHeight: "100%"
    };

    const gridMargin = {
        margin: "10px"
    };


    return(
        <div>
            {isLoading && <p>Wait I'm Loading things for you :)</p>}
            <Paper elevation={3}>
                <Grid container className={classes.root} spacing={4}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={4} style={gridMargin}>
                            {elements.map((value) => (
                                <Link key={value.name} to={{
                                    pathname: "/chapter",
                                    state: {
                                        id: value.id,
                                        name: value.name,
                                        mangaUrl: value.mangaUrl,
                                        imageUrl: value.imageUrl
                                    }
                                }} style={ { textAlign: "center", textDecoration: "none" } }>
                                    <Grid key={value} style={gridMargin} item>
                                        <Paper className={classes.paper}>
                                            <img src={value.imageUrl} alt={value.name} style={mangaImageStyle}/>
                                            <p><strong>{value.name}</strong></p>
                                        </Paper>
                                    </Grid>
                                </Link>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
