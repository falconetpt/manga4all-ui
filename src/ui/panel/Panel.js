import React from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 2,
    },
    paper: {
        height: "200px",
        width: "140px",
        padding: "10px"
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default function SpacingGrid() {
    const classes = useStyles();
    const elements = Array.apply(null, Array(50))
        .map(function (x, i) { return i; });

    return(
        <div>
            <Paper elevation={3}>
                <Grid container className={classes.root} spacing={4}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={4}>
                            {elements.map((value) => (
                                <Grid key={value} item>
                                    <Paper className={classes.paper} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}