import react from "react";
import { Card, Grid } from "semantic-ui-react";

export default function IssLocation() {
    return (
        <div classsName = "iss">
            <p>The International Space Station is moving at close to 28,000 km/h so its location changes really fast! Where is it right now?</p>
            <Grid container spacing={2}>
  <Grid item xs={8}>
    <Card>xs=8</Card>
  </Grid>
  <Grid item xs={4}>
    <Card>xs=4</Card>
  </Grid>
  <Grid item xs={4}>
    <Card>xs=4</Card>
  </Grid>
  <Grid item xs={8}>
    <Card>xs=8</Card>
  </Grid>
</Grid>
        </div>
    )

}