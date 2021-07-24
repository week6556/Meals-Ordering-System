import classes from './Header.module.css';
import { Fragment } from 'react';
import image from '../../assets/foodora.png';
import HeaderCart from './HeaderCart';

const Header = props => {
  return <Fragment>
      <header className={classes.header}>
          <h1>Wei's Foodora</h1>
          <HeaderCart onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
          <img src={image} alt="fresh vegetable"/>
          
      </div>
  </Fragment>
};

export default Header;