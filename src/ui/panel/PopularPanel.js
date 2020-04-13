import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: 'black'
    },
    gridList: {
        height: '100vh',
        width: '100vw',
        flexWrap: 'wrap',
        margin: 'auto',
        justifyContent: 'center',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    }
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

    return(
        <div className={classes.root}>
            <GridList cellHeight={250} cols={0} className={classes.gridList}>
                {isLoading && <p1 style={ { textAlign: "center" } }>LOADING ...</p1>}
                {elements.map((value) => (
                    <GridListTile key={value.id}>
                        <Link to={{
                            pathname: "/chapter",
                            state: {
                                id: value.id,
                                name: value.name,
                                mangaUrl: value.mangaUrl,
                                imageUrl: value.imageUrl
                            }
                        }} style={ { textDecoration: "none" } }>
                            <img src={value.imageUrl} alt={value.name} />
                            <GridListTileBar
                                title={value.name}
                                subtitle={<span>{value.name}</span>}
                                actionIcon={
                                    <IconButton aria-label={`info about ${value.name}`} className={classes.icon}>
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />
                        </Link>
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}
