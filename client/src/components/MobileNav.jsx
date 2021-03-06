import React, { useState } from "react";
import { Button, MenuItem, Popper, makeStyles, Fade, ClickAwayListener} from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faBars } from "@fortawesome/free-solid-svg-icons";
import {
  Link
} from "react-scroll";

const useStyles = makeStyles((theme) => ({
  paper: {
    border: '1px solid',
    padding: theme.spacing(0.5),
    backgroundColor: theme.palette.background.paper,
    borderRadius: 16,
  },
}));


function MobileNav() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(false);


  const handleClick = (event) => {
    setAnchorEl(anchorEl ? false : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'transitions-popper' : undefined;

  const handleClose = () => {
    setAnchorEl(false)
  };

  return (
    <div id="mobNav">
       <ClickAwayListener onClickAway={handleClose}>
      <Button
        size="large"
        variant= "contained"
        color="secondary"
        aria-describedby={id} type="button" onClick={handleClick}
      >
     <FontAwesomeIcon icon={faBars} size="2x" />
      </Button>
      </ClickAwayListener>
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
      {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <div className={classes.paper}>
            <MenuItem>
          <Link
            to="info"
            className="buttonLink"
            smooth={true}
            delay={400}
            duration={700}
            onClick={handleClose}
          >
            About
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to="portfolioCarousel"
            className="buttonLink"
            smooth={true}
            delay={400}
            duration={700}
            onClick={handleClose}
          >
            Portfolio
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to="contact"
            className="buttonLink"
            smooth={true}
            delay={400}
            duration={700}
            onClick={handleClose}
          >
            Contact
          </Link>
        </MenuItem>
        <MenuItem>
        <Link
            to="intro"
            className="buttonLink"
            smooth={true}
            delay={400}
            duration={700}
            onClick={handleClose}
          >
          <FontAwesomeIcon icon={faArrowUp} size="2x" />
          </Link>
        </MenuItem>
            </div>
          </Fade>
        )}
      </Popper>
    </div>
  );
}

export default MobileNav;
