import React, { useState, useEffect } from 'react'
import Nav from './Nav'
import styled from "styled-components";
import axios from 'axios';


export default function Home() {
  const [usersList, setUsersList] = useState('');
  const [results] = useState(500);

  const getUserList = async () => {
    try {
      const clearResponse = await axios.get(`https://randomuser.me/api/?results=${results}`);
      setUsersList(clearResponse.data.results)
    }
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserList();
  }, [results])

  return (
    <>
      <Nav />
      <HomeContainer>
        <ul>
          {usersList && usersList.map((eachUser) => {
            return (
              <li key={eachUser.cell}>
                <p>{eachUser.name.first + ' ' + eachUser.name.last}</p>
                <p><img src={eachUser.picture.thumbnail} alt={eachUser.name.first + ' ' + eachUser.name.last} /></p>
              </li>
            )
          })}

        </ul>
      </HomeContainer>
    </>
  )
}

const HomeContainer = styled.div`
ul{
  padding : 20px;
  list-style : none;
  li{ 
    padding: 10px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    overflow:auto;
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