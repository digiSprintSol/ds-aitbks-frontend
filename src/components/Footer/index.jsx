import React from "react";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
// import { LocationOnOutlinedIcon } from '@mui/icons-material';
import styles from "./style.module.css";

function Index() {
  return (
    <>
      <div className={styles.footer}>
        <img
          src="/assets/images/footer.png"
          alt="footer_bg"
          className={styles.footer_img}
        />
        <div className={styles.content}>
          <Grid container spacing={1}>
            <Grid item sm={2} />
            <Grid item sm={3}>
              <div className={styles.column}>
                <Typography variant="h4" className={styles.footer_text}>
                  Links
                </Typography>
                <Divider className={styles.divider} sx={{ width: "40%" }} />
                <Link to="/" className={styles.link}>
                  About Us
                </Link>
                <Link to="/" className={styles.link}>
                  Gallery
                </Link>
                <Link to="/" className={styles.link}>
                  Events
                </Link>
                <Link to="/" className={styles.link}>
                  Terms of Use
                </Link>
                <Link to="/" className={styles.link}>
                  Copyright Policy
                </Link>
                <Link to="/" className={styles.link}>
                  Privacy Policy
                </Link>
              </div>
            </Grid>
            <Grid item sm={3}>
              <div className={styles.column}>
                <Typography variant="h4" className={styles.footer_text}>
                  Contact
                </Typography>
                <Divider className={styles.divider} sx={{ width: "60%" }} />
                <Link to="/" className={styles.link}>
                  Contact Page
                </Link>
                <Typography variant="body1" className={styles.footer_text}>
                  contact@allindiakapusangam.com
                </Typography>
                <Typography variant="body1" className={styles.footer_text}>
                  040 2761 2388
                </Typography>
              </div>
            </Grid>
            <Grid item sm={3}>
              <div className={styles.column}>
                <Typography variant="h4" className={styles.footer_text}>
                  Office Contact
                </Typography>
                <Divider className={styles.divider} sx={{ width: "90%" }} />
                <Typography variant="body1" className={styles.footer_text}>
                  1-2-605/2/A, Lower Tank Bund Road, Kavadi Guda, Hyderabad,
                  Telangana 500082
                </Typography>
                <div style={{ width: "100%", marginLeft: "80px" }}>
                  <iframe
                    title="Google Maps Location"
                    style={{
                      width: "100%",
                      height: "100px",
                      frameborder: "0",
                      scrolling: "no",
                      marginTop: "10",
                      marginwidth: "0",
                    }}
                    src="https://maps.google.com/maps?width=100%25&amp;height=100px&amp;hl=en&amp;q=1-2-605/2/A,%20Lower%20Tank%20Bund%20Road,%20%20Kavadi%20Guda,%20Hyderabad,%20%20Telangana%20500082+(All%20India%20Telega%20Balija%20Kapu%20Sangam)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  >
                    <a href="https://www.gps.ie/">gps systems</a>
                  </iframe>
                </div>
              </div>
            </Grid>
            <Grid item sm={1} />
          </Grid>
        </div>
      </div>
      <div className={styles.copyright}>
        Copyright @2024 by AITBKS | All Rights Reserved
      </div>
    </>
  );
}

export default Index;
