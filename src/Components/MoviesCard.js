import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import useFilms from "../Hook/UseFilms"
export default function ActionAreaCard() {

  const movies = useFilms();
  console.log(movies)
  return (
    <Card sx={{ width : 100 , height : 100 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="50"
          image="../Assets/store/app-store.svg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
