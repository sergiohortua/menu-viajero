// @flow
import * as React from "react";
import Item from "./Item";
import Grid from "@mui/material/Grid";

type Props = {};
 const Row = () => {
  return(<Grid container direction="row" justifyContent="center" alignItems="center"
  sx={{margin:'20px 0'}}>
    <Grid item xs={2}>
      <Item />
    </Grid>
    <Grid item xs={2}>
      <Item />
    </Grid>
    <Grid item xs={2}>
      <Item />
    </Grid>
    <Grid item xs={2}>
      <Item />
    </Grid>
    <Grid item xs={2}>
      <Item />
    </Grid>
    <Grid item xs={2}>
      <Item />
    </Grid>
  </Grid>)
};
const Main = (props: Props) => {
  const {} = props;
  return (<>
  <Row/>
  <Row/>
  <Row/>
  </>)
};
export default Main;
