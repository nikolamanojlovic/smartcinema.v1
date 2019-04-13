import React, {Component} from "react";
import {Card, CardContent} from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import siteHistory from "../helper/history";
import {GetFilmById, RemoveFilm} from "../functions/filmFunctions";
import {UserLogIn} from "../functions/userFunctions";
import {ClearMessage} from "../functions/messageFunctions";
import connect from "react-redux/es/connect/connect";

const style = {
    card: {
        width: 265,
        height: 600,
        margin: 15,
        display: "inline-block"
    },
    action: {
        height: "100%"
    },
    content: {
      height: "50%"
    },
    media: {
        margin: 0
    },
    h5: {
        fontWeight: "bold"
    },
    p: {
        textAlign: "justify"
    }
};

class FilmPoster extends Component {
    constructor(props) {
        super(props);

        this._handleClick = this._handleClick.bind(this);
    };

    _handleClick(id) {
        this.props.removeFilm();
        siteHistory.push("/film/" + id);
    }

    render() {
        return (
            <Card style={style.card}>
                <CardActionArea style={style.action} onClick={() => this._handleClick(this.props.film.id)}>
                    <CardMedia
                        component="img"
                        alt={this.props.film.title}
                        height="370"
                        image={this.props.film.poster}
                        title={this.props.film.title}
                        style={style.media}
                    />
                    <CardContent style={style.content}>
                        <Typography gutterBottom variant="h5" component="h2" style={style.h5}>
                            {this.props.film.title}
                        </Typography>
                        <Typography component="p" style={style.p}>
                            {this.props.film.plot}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeFilm: () => dispatch(RemoveFilm())
    };
};

export default connect(null, mapDispatchToProps)(FilmPoster);