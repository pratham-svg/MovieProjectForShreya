import React, { useState , useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import axios from 'axios';

const MoviesList = () => {
     let MovieList = []
     let [ Movie , SetMovie ] = useState(MovieList)
     const MovieData = async ()=>{
        let data = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=983409f310e20a7254267df6aeafff80&language=en-US&page=1')
        console.log(data)
        data = data.data.results
        console.log(data)
        SetMovie(data)
      }
      useEffect(() => {
        MovieData()
      }, [])
      
  return (
    <>
    <div className='row'>
   {Movie.map(({ id , original_title , overview , vote_average , release_date ,  poster_path  })=> 
      <div className='col-3 m-8' key={id} >
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          wright='140'
          image={poster_path}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {original_title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {overview}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>)}
    </div>
    </>
  )
}

export default MoviesList