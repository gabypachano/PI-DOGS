import Filters from '../Filter/Filters';
import SearchBar from '../SearchBar/SearchBar';
import styles from './styles.module.css'
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
    let { pathname } = useLocation()

    return(
        <>
        {
            pathname !== '/' ? (
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
                <div>
                    <Filters />
                </div>

            </div>
             ) : (null)
            }
        </>
    )
}

export default NavBar;