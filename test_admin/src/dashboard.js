import React from "react";
import { Card, CardContent, CardHeader } from "@material-ui/core/";
const dashboard = (props) => (
  <Card>
    <CardHeader title="Internship" />
    <CardContent>{props.name}</CardContent>
  </Card>
);

export default dashboard;
