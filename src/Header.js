import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import GlobalContext from './GlobalContext';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    justifyContent: 'center',
    textAlign: 'center'
  },
  linkStyle:{
  padding: theme.spacing(1),
  color: 'white',
  textDecoration: 'none'
  }
}));

export default function Header() {
  const classes = useStyles();
  const { cart } = useContext(GlobalContext);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Products</Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to="/all" className={classes.linkStyle}>All</Link>
            <Link to="/men" className={classes.linkStyle}>Men</Link>
            <Link to="/women" className={classes.linkStyle}>Women</Link>
            <Link to="/kids" className={classes.linkStyle}>Kids</Link>
          </Typography>
          <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={cart.length} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
