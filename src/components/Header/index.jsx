import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./style.module.css";
import Button from "../Button";

function Index() {
  const navigate = useNavigate();

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
        <Link to="/" className={styles.link}>
          Member
        </Link>
        <Link to="/" className={styles.link}>
          Events
        </Link>
        <Link to="/" className={styles.link}>
          Contact
        </Link>
        <Button
          className={styles.btn}
          onClick={() => navigate("/auth/registration-one")}
        >
          Register
        </Button>
        <Button className={styles.btn} onClick={() => navigate("/auth/login")}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Index;
