import React, { useState, useEffect } from 'react'
import User from './User';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UserContainer = () => {
  const [userData, setUsersData] = useState(null);
  const { login } = useParams();

  const getData = () => {
    axios.get(`${import.meta.env.VITE_APP_API_GH}/${login}`)
      .then(res => setUsersData(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getData();
  }, [login])

  const childProps = {
    userData
  }

  return <User {...childProps} />
}

export default UserContainer;