import React from 'react';
import {Card,CardMedia, Grid, CardContent, Typography} from "@mui/material";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const MoviesList = () => {
    const {moviesList
    } = useSelector ((state)=> ({...state.movie}))
  return (
    <>
        <Grid sx={{flexGrow: 1}} container>
            <Grid item xs={12}>
                <Grid container justifyContent='center' spacing={3}>
                 {moviesList?.Search?.map((item,index)=>(
                    <div>
                  <Grid key={index} item>
                     <Card sx={{maxWidth:"350"}}>
                        <Link to={`/movies/${item.themoviedbID}`}>
                        <CardMedia
                         component="img"
                         height="350"
                         image={item.Poster}
                         alt={item.Title}
                         />

                  <CardContent>
                    <Typography variant="body2" color="text.primary"> {item.title}</Typography>
                    <Typography variant="body2" color="text.primary"> {item.Year}</Typography>
                  </CardContent>

                  </Link>
                     </Card>

                        </Grid>
                        </div>
                 ))}
        
                </Grid>
            </Grid>

        </Grid>
    </>
  )
}

export default MoviesList