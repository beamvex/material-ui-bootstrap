import React from "react";

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Quote from "components/Typography/Quote.jsx";
import Muted from "components/Typography/Muted.jsx";
import Primary from "components/Typography/Primary.jsx";
import Info from "components/Typography/Info.jsx";
import Success from "components/Typography/Success.jsx";
import Warning from "components/Typography/Warning.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Container from '@material-ui/core/Container';

import {
    drawerWidth,
    transition,
    boxShadow,
    defaultFont,
    primaryColor,
    primaryBoxShadow,
    infoColor,
    successColor,
    warningColor,
    dangerColor,
    whiteColor,
    grayColor,
    blackColor,
    blueColor,
    hexToRgb
  } from "assets/jss/material-dashboard-react.jsx";

  import Image from 'material-ui-image';
  import iosapps from '../../assets/img/iscream-ios-apps.png';
import { Button } from "@material-ui/core";
import { black } from "ansi-colors";

const style = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  homePage: {
    background: blueColor,
    opacity: ".75",
    height: '100vh',
    backgroundImage: "url(assets/img/ice-cream-van.jpg)"
  },
  titleText: {
    color: whiteColor,
    fontWeight: 'bold',
    fontFamily: "'Helvetica Neue','Helvetica', 'Arial', sans-serif",
    'text-shadow': '3px 3px #2255c5',
    opacity: ".75",
  },
  bigButton: {
    background: blackColor,
  }
};

const ColorButton = withStyles(theme => ({
  root: {
    color: whiteColor,
    backgroundColor: blackColor,
    '&:hover': {
      backgroundColor: whiteColor,
      color: blueColor,
    },
  },
}))(Button);

function HomePage(props) {
  const { classes } = props;
  return (
    <Container className={classes.homePage}>
      <Grid item xs={12}>
        <h1 className={classes.titleText}>I Scream...<br/>
        U Scream...<br/>
        ... We all want an Ice Cream!</h1>
      </Grid>
      <Grid item xs={12}>
        <Image src={iosapps} color={blueColor} animationDuration='5000' aspectRatio='2.42'></Image>
      </Grid>      
      <Grid item xs={12} container justify = "center">
        <ColorButton>I Want Ice Cream!</ColorButton>
      </Grid>
    </Container>
  );
}

export default withStyles(style)(HomePage);
