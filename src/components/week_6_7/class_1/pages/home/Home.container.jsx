import React, { useState, useEffect } from 'react'
import Home from './Home'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const HomeContainer = () => {
  const [usersData, setUsersData] = useState(null);
  const [userSearch, setUserSearch] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("clicked", userSearch)
    if (userSearch.length !== 0) {
      navigate(`/users/user/${userSearch}`);
    } else {
      setErrorMessage("You must provide a user before the search")
    }
  }

  const getData = () => {
    axios.get(import.meta.env.VITE_APP_API_GH)
      .then(res => setUsersData(res.data))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getData();
  }, [])

  const childProps = {
    usersData,
    userSearch,
    setUserSearch,
    errorMessage,
    handleSubmit
  }

  return <Home {...childProps} />
}

export default HomeContainer