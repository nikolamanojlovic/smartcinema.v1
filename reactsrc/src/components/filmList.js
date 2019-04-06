import React, {Component} from "react";
import FilmPoster from "../components/filmPoster";
import {connect} from "react-redux";
import {GetFilms} from "../functions/filmFunctions";

const style = {
    films: {
        float: "left",
        marginLeft: "15%"
    }
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
            <div className="films" style={style.films}>
                {
                    this.props.films.map((e, i) => (
                        <FilmPoster key={e.id} film={e}/>
                    ))
                }
            </div>
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