import React, {Component} from "react";
import FilmPoster from "../components/filmPoster";
import {connect} from "react-redux";
import {GetFilms} from "../functions/filmFunctions";
import CircularProgress from "./filmDetails";

const style = {
    films: {
        float: "left",
        marginLeft: "15%"
    },
    grid: {
        marginLeft: "15%",
        width: "85%"
    },
    spinner: {
        position: "absolute",
        left: "55%",
        top: "50%",
        color: "#A5122C"
    },

};

class FilmList extends Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        this.props.getFilms()
    }

    render() {
        return (
            this.props.films ?
                <div className="films" style={style.films}>
                    {
                        this.props.films.map((e, i) => (
                            <FilmPoster key={e.id} film={e}/>
                        ))
                    }
                </div> :
                <div style={styles.grid}><CircularProgress className="spinner" color="secondary" style={styles.spinner}/></div>
        );
    }
}

const mapStateToProps = state => {
    return {
        films: state.FilmReducer.films
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getFilms: () => dispatch(GetFilms())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmList);