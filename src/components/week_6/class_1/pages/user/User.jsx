import React from 'react'
import { CircularProgress, Box, Button } from '@mui/material'
import SelectedUser from '../../components/SelectedUser';
import styled from "./styled.module.css"
import { useNavigate } from 'react-router-dom';

const User = ({ userData }) => {
  const navigate = useNavigate();
  return (
    <Box component="div" className={styled.userSelectedContainer}>
      <Button size="small" onClick={() => navigate(-1)}>Go Back</Button>
      {
        userData ? (
          <SelectedUser {...userData} />
        ) : (
          <CircularProgress />
        )
      }
    </Box>
  )
}

export default User