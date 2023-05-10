import SearchBar from '../SearchBar/SearchBar';
import styles from './styles.module.css'
import { Link } from 'react-router-dom';

const NavBar = () => {

    return(
        <>
            <div
            className={styles.container} >
                <div>
                    <Link to='/home'>
                        <button>HOME</button>
                    </Link>
                    <Link to='/form'>
                        <button>CREAR</button>
                    </Link>
                </div>
                <div>
                    <SearchBar />
                </div>
            </div>
        </>
    )
}

export default NavBar;