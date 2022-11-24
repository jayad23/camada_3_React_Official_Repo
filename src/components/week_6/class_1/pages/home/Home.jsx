import React from 'react'
import { useNavigate } from "react-router-dom"
import CircularProgress from '@mui/material/CircularProgress';
import { Box, Grid, IconButton, TextField, Typography } from '@mui/material';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { AllUsers } from '../../components/AllUsers';

const Home = ({
  usersData,
  userSearch,
  setUserSearch,
  errorMessage,
  handleSubmit
}) => {
  return (
    <Grid
      container
      spacing={2}
      mt={2}
      sx={{ textAlign: "center" }}>
      <Grid
        xs={12}
        item
      >
        <TextField
          size="small"
          label="Find a user"
          value={userSearch}
          onChange={(e) => setUserSearch(e.target.value)}
          InputProps={{
            endAdornment: (
              <IconButton type="button" onClick={handleSubmit}>
                <TravelExploreIcon />
              </IconButton>
            )
          }}
          sx={{ width: "40%" }}
        />
        <Typography color="error" variant="caption" component="div">{errorMessage}</Typography>
      </Grid>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          flexWrap: "wrap",
          padding: 5
        }}
      >
        {
          usersData ? (
            usersData.map(user => (
              <AllUsers key={user.id} {...user} />
            ))
          ) : (
            <CircularProgress />
          )
        }
      </Box>
    </Grid>
  )
}

export default Home