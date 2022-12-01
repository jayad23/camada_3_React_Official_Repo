import React, { useState, useEffect } from 'react'
import Home from './Home'
import { useNavigate } from 'react-router-dom'
import { useGetData } from '../../../hooks/useGetData'
import { useCounter } from '../../../hooks/useCounter'

const HomeContainer = () => {
  const [userSearch, setUserSearch] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const { data: usersData, isLoading, error } = useGetData(import.meta.env.VITE_APP_API_GH);
  const [counter, handlerCounter] = useCounter();
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("clicked", userSearch)
    if (userSearch.length !== 0) {
      navigate(`/users/user/${userSearch}`);
    } else {
      setErrorMessage("You must provide a user before the search")
    }
  }

  const childProps = {
    usersData,
    userSearch,
    setUserSearch,
    errorMessage,
    handleSubmit,
    counter, handlerCounter
  }

  return <Home {...childProps} />
}

export default HomeContainer