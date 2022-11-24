import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

export const AllUsers = ({ login, id, avatar_url, html_url }) => {
  const [elevation, setElevation] = useState(1);
  const [like, setLike] = useState("");
  const anchorRef = useRef(null);

  const handleAnchorRef = () => {
    anchorRef.current.click();
  }

  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: "space-between",
        width: "350px",
        height: "152px"
      }}
      elevation={elevation}
      onMouseEnter={() => setElevation(8)}
      onMouseLeave={() => setElevation(1)}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" sx={{ textTransform: "capitalize" }}>
            {login}
          </Typography>
          <Link to={`/users/user/${login}`}>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              See whole info
            </Typography>
          </Link>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous" onClick={() => setLike(login)}>
            <ThumbUpIcon color={like === login ? "primary" : "inherit"} />
          </IconButton>
          <IconButton aria-label="github" onClick={handleAnchorRef}>
            <a style={{ display: "none" }} ref={anchorRef} href={html_url} target="_blank" rel="nonreferrer">See GH Account</a>
            <GitHubIcon color='secondary' sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next" onClick={() => setLike("")}>
            <ThumbDownAltIcon />
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={avatar_url}
        alt={login}
      />
    </Card>
  );
}