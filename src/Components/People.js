import React from "react";
import { Card, Grid } from "semantic-ui-react";

export default function People({data}) {
    return (
        <div classsName = "people">
            <h2>
                How many humans are in space right now?
            </h2>
            <Grid style ={{display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '5px 5px',}}>
                {data.map((people, i) => {
                    return (
                        <Grid.Column key={i}>
                            <Card style ={{border: "1px solid white"}}>
                                <Card.Content>
                                    <Card.Header>{people.name}</Card.Header>
                                    <Card.Description>
                                        <p>Spacecraft: {people.craft}</p>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    )
                })}

            </Grid>
        </div>
    );

}