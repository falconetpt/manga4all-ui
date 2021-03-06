import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import useRouteProps from "../../utils/context/useRouteProps";
import {Link, withRouter} from "react-router-dom";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/core/SvgIcon/SvgIcon";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: 'black'
    },
    gridList: {
        height: '90vh',
        width: '100vw',
        flexWrap: 'wrap',
        margin: 'auto',
        justifyContent: 'center',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    }
}));

function SpacingGrid() {
    const {location} = useRouteProps();
    const [page, setPage] = useState(1);
    const keyword = location.pathname.split("/")[2];
    const [elements, setElements] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    console.log("pudim", useRouteProps());

    const loadNextPage = () => {
        setPage(page + 1);
    };

    const loadPreviousPage = () => {
        setPage(page + 1);
    };

    useEffect(() => {
        fetch(process.env.REACT_APP_SERVER_URL + '/api/v1/scrapper/search/' + keyword + "/" + page,
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

export default withRouter(SpacingGrid)