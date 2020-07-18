import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LaunchIcon from "@material-ui/icons/Launch";
const customStyles = makeStyles({
  link: {
    textDecoration: "none",
  },
  icon: {
    width: "0.5em",
    paddingLeft: 2,
  },
});

const myUrlField = ({ record = {}, source }) => {
  const classes = customStyles();
  return (
    <a className={classes.link} href={record[source]}>
      {record[source]}
      <LaunchIcon className={classes.icon} />
    </a>
  );
};

export default myUrlField;
