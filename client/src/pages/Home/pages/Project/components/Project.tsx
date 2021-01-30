import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@material-ui/core";
import { AppAssets } from "@assets/index";
import { ProjectModel } from "@pages/Home/pages/Project/state";
import { useHistory } from "react-router";


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    content: {
        minHeight: '5rem',
    },
    media: {
        height: 140,
    },
});

interface Props {
    project: ProjectModel
}

export const Project = ({ project: { name, description, irr, id } }: Props) => {
    const classes = useStyles();
    const history = useHistory();
    const onDetailsClick = () => history.push(`/home/projects/details/${id}`)

    return (
        <Grid item xs={4}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={AppAssets.project}
                        title="Contemplative Reptile"
                    />
                    <CardContent className={classes.content}>
                        <Typography gutterBottom variant="subtitle1" component="h4">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {description}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {irr}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Edit
                    </Button>
                    <Button size="small" color="primary" onClick={onDetailsClick}>
                        Details
                    </Button>
                </CardActions>
            </Card>
        </Grid>

    );
};
