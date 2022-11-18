import React, { useState, useMemo } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';


const CardComponent = ({ song }) => {
  const [elevation, setElevation] = useState(1);
  const [data, setData] = useState(song);
  //
  const addToFavorites = (info) => {
    const updateData = {
      ...info,
      isLiked: !info.isLiked
    }
    axios.put(`${import.meta.env.VITE_REACT_LOCALHOST}/${info.id}`, updateData)
      .then((res) => setData(res.data.data))
      .catch(err => console.log(err))
  }
  //
  const MemoedCard = useMemo(() => {
    return (
      <Card
        sx={{ maxWidth: 345 }}
        elevation={elevation}
        onMouseEnter={() => setElevation(8)}
        onMouseLeave={() => setElevation(1)}
      >
        <CardHeader
          avatar={
            <Avatar alt="image_artist" src={data.imageCover} />
          }
          title={data.label}
          subheader={data.title}
        />
        <CardMedia
          component="iframe"
          height="194"
          src={data.value}
          alt={data.title}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {data.comment}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" onClick={() => addToFavorites(data)}>
            <FavoriteIcon color={data.isLiked ? "error" : "inherit"} />
          </IconButton>
        </CardActions>
      </Card>
    );
  }, [elevation, data]);

  return MemoedCard;
}

export default CardComponent;