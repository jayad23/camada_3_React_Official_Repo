import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Tooltip } from '@mui/material';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import { Box } from '@mui/material';
import { purple } from '@mui/material/colors';

const SelectedUser = ({
  avatar_url,
  bio,
  company,
  created_at,
  followers,
  following,
  public_repos,
  location,
  name,
  email,
  html_url,
  blog,
  url,
  login
}) => {
  const [date] = created_at.split("T");
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar src={avatar_url} alt={name} />
        }
        title={name}
        subheader={location || date}
      />
      <CardMedia
        component="img"
        height="194"
        image={avatar_url}
        alt={login}
      />
      <CardContent sx={{ mb: 1 }}>
        <Typography variant="body2" color="text.secondary">
          {name} lives in {location}.
          He/She works at {company} as a software engineer.
          Know more about him/her on <a href={blog} target="_blank" rel="nonreferrer">{blog}</a>{" "}
          or on his git hub page at <a href={html_url} target="_blank" rel="nonreferrer">{html_url}</a>
          To verify this information, please, visit the official GH api for this user <a href={url} target="_blank" rel="nonreferrer">{url}</a>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Box component="div" sx={{ position: "relative" }}>
          <Tooltip title="Followers">
            <IconButton aria-label="add to favorites">
              <GroupAddIcon />
            </IconButton>
          </Tooltip>
          <Box
            component="div"
            sx={{
              backgroundColor: purple[500],
              width: 30,
              height: 30,
              borderRadius: "100%",
              fontSize: "12px",
              textAlign: "center",
              paddingTop: "7px",
              color: "white",
              position: "absolute",
              top: -19,
              left: 2
            }}
          >
            {followers}
          </Box>
        </Box>
        <Box component="div" sx={{ position: "relative" }}>
          <Tooltip title="Following">
            <IconButton aria-label="add to favorites">
              <Diversity3Icon />
            </IconButton>
          </Tooltip>
          <Box
            component="div"
            sx={{
              backgroundColor: purple[500],
              width: 30,
              height: 30,
              borderRadius: "100%",
              fontSize: "12px",
              textAlign: "center",
              paddingTop: "7px",
              color: "white",
              position: "absolute",
              top: -19,
              left: 4
            }}
          >{following}
          </Box>
        </Box>
        <Box component="div" sx={{ position: "relative" }}>
          <Tooltip title="Public Repos">
            <IconButton aria-label="add to favorites">
              <LibraryBooksIcon fontSize='small' />
            </IconButton>
          </Tooltip>
          <Box
            component="div"
            sx={{
              backgroundColor: purple[500],
              width: 30,
              height: 30,
              borderRadius: "100%",
              fontSize: "12px",
              textAlign: "center",
              paddingTop: "7px",
              color: "white",
              position: "absolute",
              top: -21,
              left: 5
            }}
          >{public_repos}
          </Box>
        </Box>
      </CardActions>
    </Card>
  )
}

export default SelectedUser