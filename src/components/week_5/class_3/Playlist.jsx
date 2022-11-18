import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CardComponent from './components/CardComponent'
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';

const Playlist = () => {
  const [playListData, setPlayListData] = useState(null);

  const getData = () => {
    axios.get(import.meta.env.VITE_REACT_LOCALHOST)
      .then(res => setPlayListData(res.data.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <Box component="div" sx={{
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "20px",
      padding: "20px"
    }}>
      {
        playListData ? (
          playListData.map(song => (
            <CardComponent key={song.id} song={song} />
          ))
        ) : (
          <CircularProgress color="secondary" />
        )
      }
    </Box>
  )
}

export default Playlist