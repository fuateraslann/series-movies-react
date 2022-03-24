/* eslint-disable react/prop-types */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function FilmCard({data}) {
  return (
    <div style = {{height : window.innerHeight*80/100 ,overflow: "scroll"}}>
      {data.map((element,index) =>(
          <div style = {{display: "inline-block" , margin : "20px" }} key = {index}>
            <Card sx={{ width : 200 , height : 500 , marginBottom : "15px"}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="50"
                  image={element.images["Poster Art"].url}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {element.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {element.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
      ))}
    </div>
   
  );
}
