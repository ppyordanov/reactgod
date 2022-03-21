import {Link} from 'react-router-dom'
import classes from './MainNavigation.module.css'
import FavoritesContext from '../../store/favorites-context';
import { useContext } from 'react';

function MainNavigation(){
    const favContext = useContext(FavoritesContext);
    return <header className={classes.header}>
        <div className={classes.logo}>Meetups</div>
        <nav>
            <ul>
                <li>
                    <Link to="/">All</Link>
                </li>
                <li>
                    <Link to="/new-meetup">+ New</Link>
                </li>
                <li>
                    <Link to="/favorites">Favorites <span className={classes.badge}>{favContext.count}</span>
                    </Link>
                </li>
            </ul>
        </nav>
        </header>
}

export default MainNavigation;