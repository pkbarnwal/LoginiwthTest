import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}></div>
      </Link>
      <nav>
        <ul>
           <li>
             <a href="/">Login</a>
           </li>
         </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
