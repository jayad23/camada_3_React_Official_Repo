import React, { useState, useEffect } from 'react'
import User from './User';
import { useParams } from 'react-router-dom';
import { useGetData } from '../../../hooks/useGetData';

const UserContainer = () => {
  const { login } = useParams();
  const { data: userData } = useGetData(`${import.meta.env.VITE_APP_API_GH}/${login}`)

  const childProps = {
    userData
  }

  return <User {...childProps} />
}

export default UserContainer;