import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

const Card0 = ({onSelect,val}) => {
// console.log(val)
  return (
    <Grid
      // xs={12}
      // ms={4}
      sm={3}
      style={{ overflow: "hidden", height: "500px" }}
    >
      <Card
        sx={{ maxWidth: 345 }}
        style={{ marginBottom: "30px" }}
        onClick={() => onSelect(val.id)}
        key={val.id}
      >
        <CardMedia
          sx={{ height: 140 }}
          image={val.image}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h3>{val.title}</h3>
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            <p>{val.description}</p>
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            <span>{val.id}</span>
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            <h4>M.R.P {val.price}$</h4>
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            <h4>*****{val.rating.count}</h4>
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            <h4>{val.rating.rate}</h4>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Card0;
