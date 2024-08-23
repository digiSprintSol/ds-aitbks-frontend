import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";
import styles from "./style.module.css";
import Button from "../Button";

function Header({ name }) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.header}>
      <div className={styles.right}>
        <Link to="/">
          <img
            src="/assets/images/community_logo.png"
            alt="logo"
            className={styles.logo}
          />
        </Link>
        <img
          src="/assets/images/community_title.png"
          alt="title"
          className={styles.title}
        />
      </div>
      <div className={styles.left}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/" className={styles.link} onClick={handleMenuOpen}>
          Members
        </Link>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Trustee</MenuItem>
          <MenuItem onClick={handleMenuClose}>Patron</MenuItem>
          <MenuItem onClick={handleMenuClose}>Life Members</MenuItem>
        </Menu>
        <Link to="/" className={styles.link}>
          Events
        </Link>
        <Link to="/" className={styles.link}>
          Contact
        </Link>
        <Link to="/market-places" className={styles.link}>
          Market Places
        </Link>
        {name > 0 ? (
          <Button
            className={styles.btn}
            onClick={() => navigate("/auth/registration-one")}
          >
            Register
          </Button>
        ) : (
          <p>{null}</p>
        )}
        {name > 0 ? (
          <Button
            className={styles.btn}
            onClick={() => navigate("/auth/login")}
          >
            Login
          </Button>
        ) : (
          <Button
            className={styles.btn}
            onClick={() => navigate("/auth/login")}
          >
            Logout
          </Button>
        )}
      </div>
    </div>
  );
}

Header.propTypes = {
  // eslint-disable-next-line react/require-default-props
  name: PropTypes.number,
};

export default Header;
