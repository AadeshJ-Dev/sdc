import React, { useState, useEffect, useRef, useCallback } from 'react'
import Nav from './Nav'
import styled from "styled-components";
import axios from 'axios';
import useGetUserList from './useGetUserList'

export default function Home() {
  // const [usersList, setUsersList] = useState('');
  const [results, setResults] = useState(40);

  const {
    usersList,
    hasMore,
    loading,
    error
  } = useGetUserList(results)

  const observer = useRef()

  const lastUserElementRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setResults(prevPageNumber => prevPageNumber + 40)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore])

  // const getUserList = async () => {
  //   try {
  //     const clearResponse = await axios.get(`https://randomuser.me/api/?results=${results}`);
  //     setUsersList(clearResponse.data.results)
  //   }
  //   catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getUserList();
  // }, [results])

  return (
    <>
      <Nav />
      <HomeContainer>
        <ul>
          {usersList && usersList.map((eachUser, index) => {
            if (usersList.length === index + 1) {
              return (
                <li ref={lastUserElementRef} key={eachUser.cell}>
                  <p>{eachUser.name.first + ' ' + eachUser.name.last}</p>
                  <p><img src={eachUser.picture.thumbnail} alt={eachUser.name.first + ' ' + eachUser.name.last} /></p>
                </li>
              )
            } else {
              return (
                <li key={eachUser.cell}>
                  <p>{eachUser.name.first + ' ' + eachUser.name.last}</p>
                  <p><img src={eachUser.picture.thumbnail} alt={eachUser.name.first + ' ' + eachUser.name.last} /></p>
                </li>
              )
            }

          })}

        </ul>
        <div>{loading && 'Loading...'}</div>
        <div>{error && 'Error'}</div>
      </HomeContainer>
    </>
  )
}

const HomeContainer = styled.div`
ul{
  padding : 20px;
  list-style : none;
  overflow:auto;
  li{ 
    padding: 10px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    overflow:auto;
    float:left;
    width:25%;
    p{
      float:left;
      img{
        border: 1px solid #ccc;
        border-radius: 50%;
      }
    }
    p:nth-child(even){
      width : 20%
    }
    p:nth-child(odd){
      width : 80%
    }
  }
}
`