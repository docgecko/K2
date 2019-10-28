import React, { Fragment } from 'react';
import {
  CssBaseline,
  Container,
  makeStyles,
  Paper,
  Grid,
  Typography
} from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white'
  },
  paper: {
    padding: theme.spacing(1, 5),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  paperTitle: {
    padding: theme.spacing(2, 0),
    textAlign: 'center',
    boxShadow: 'none',
    textTransform: 'uppercase',
    borderRadius: 0,
    fontWeight: 'bold'
  },
  paperRole: {
    padding: theme.spacing(1, 0),
    textAlign: 'center',
    boxShadow: 'none',
    borderRadius: 0,
    fontWeight: 400
  },
  colorRecruitment: {
    color: '#000000',
    backgroundColor: '#FADBD8'
  },
  colorSales: {
    color: '#E74C3C ',
    backgroundColor: '#F9EBEA'
  },
  colorK2University: {
    color: '#EB984E',
    backgroundColor: '#FEF9E7'
  },
  colorK2Konnect: {
    color: '#3498DB',
    backgroundColor: '#EBF5FB'
  },
  logo: {
    height: 120,
    width: 120,
    textAlign: 'left',
    boxShadow: 'none',
    verticalAlign: 'middle'
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
  },
  paperDocumentTitle: {
    padding: theme.spacing(5, 0),
    boxShadow: 'none',
    borderRadius: 0
  },
  documentTitle: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: 25,
    fontWeight: 500
  }
}));

function TitlePaper(props) {
  const classes = useStyles();
  const { styleName, title } = props;

  return (
    <Fragment>
      <Paper className={clsx(classes.paperTitle, styleName)}>{title}</Paper>
    </Fragment>
  );
}

function RolePaper(props) {
  const classes = useStyles();
  const { styleName, title } = props;

  return (
    <Fragment>
      <Paper className={clsx(classes.roleTitle, styleName)}>{title}</Paper>
    </Fragment>
  );
}

export default function Layout() {
  const classes = useStyles();

  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <div className={classes.root}>
          {/* Header */}
          <Grid container spacing={1}>
            <Grid item sm={3}>
              <Paper className={classes.logo}>
                <img
                  className={classes.img}
                  alt="K2 logo"
                  src="../../static/K2_logo.png"
                />
              </Paper>
            </Grid>
            <Grid item sm={8}>
              <Paper className={classes.paperDocumentTitle}>
                <Typography className={classes.documentTitle}>
                  Career Progression Matrix
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          {/* Level 1 */}
          <Grid container spacing={0}>
            <Grid container xs={3} spacing={3}>
              <Grid item xs={12} spacing={0}>
                <TitlePaper
                  title="Recruitment"
                  styleName={classes.colorRecruitment}
                />
              </Grid>
              <Grid item xs={12} spacing={0}>
                <RolePaper
                  title="Technical Recruiter Contract"
                  className={classes.paper}
                />
              </Grid>
            </Grid>
            <Grid container xs={3} spacing={3}>
              <Grid item xs={12} spacing={3}>
                <TitlePaper title="Sales" styleName={classes.colorSales} />
              </Grid>
              <Grid item xs={12} spacing={3}>
                <RolePaper
                  title="Technical Recruiter Contract"
                  className={classes.paper}
                />
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <TitlePaper
                title="K2 University"
                styleName={classes.colorK2University}
              />
            </Grid>
            <Grid item xs={3}>
              <TitlePaper
                title="K2 Konnect"
                styleName={classes.colorK2Konnect}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={6} sm={3} />
            <Grid item xs={6} sm={3}>
              <RolePaper className={classes.paper}>xs=6 sm=3</RolePaper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <RolePaper className={classes.paper}>xs=6 sm=3</RolePaper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Fragment>
  );
}
