import React, {Component} from "react";
import {Card, CardContent} from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";

const style = {
    card: {
        width: 265,
        margin: 15
    }
};

class FilmPoster extends Component {
    render() {
        return (
            <Card style={style.card}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="370"
                        image="https://www.movieartarena.com/imgs/bladerunner2049ff.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}

export default FilmPoster;