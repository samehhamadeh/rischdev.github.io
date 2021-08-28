import React from 'react';
import styles from './styles/NotesHome.Module.css';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

let games = require('../../resources/gamesList.json')
let routes = require('../../notes/routes.json');

class NotesHome extends React.Component {
    constructor(props) {
        super(props);

        this.createRoute = this.createRoute.bind(this);
    }

    createRoute() {
        this.props.history.push("/notes/createRoute");
    }

    render() {
        return (
            <div className="page">
                <div className={"card " + styles.wrapper}>
                    <h1>Games</h1>
                    <div className={`${styles.wrapper}`}>
                        {games.map((gameId) =>
                            <div className="col-2" key={"routesList" + gameId}>
                                <Link to={"/notes/game/" + gameId} className={`${styles.link}`}>
                                    <img className={`${styles.img}`} src={"/gameArt/" + gameId + ".png"} alt={gameId + ".png"} />
                                    <h4 className="gameLink">{routes[gameId].name}</h4>
                                </Link>
                            </div>
                        )}
                    </div>
                    <Button text="Create New Route" size="medium" onClick={this.createRoute} />
                </div>
            </div>
        );
    }
}

export default NotesHome;