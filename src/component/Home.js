import React, { useState, useRef, useCallback } from 'react'
import Nav from './Nav'
import "./styles.css"
import useGetUserList from './useGetUserList'

export default function Home() {
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

  return (
    <>
      <Nav />
      <div className="user_container">
        <ul>
          {usersList && usersList.map((eachUser, index) => {
            if (usersList.length === index + 1) {
              return (
                <li ref={lastUserElementRef} key={eachUser.cell}>
                  <img src={eachUser.picture.thumbnail} alt={eachUser.name.first + ' ' + eachUser.name.last} />
                  <div className="user_details">
                    <p style={{ fontWeight: "bold" }}>{eachUser.name.first + ' ' + eachUser.name.last}</p>
                    <p style={{ marginTop: "2px" }}>{eachUser.email}</p>
                  </div> </li>
              )
            } else {
              return (
                <li key={eachUser.cell}>
                  <img src={eachUser.picture.thumbnail} alt={eachUser.name.first + ' ' + eachUser.name.last} />
                  <div className="user_details">
                    <p style={{ fontWeight: "bold" }}>{eachUser.name.first + ' ' + eachUser.name.last}</p>
                    <p style={{ marginTop: "2px" }}>{eachUser.email}</p>
                  </div></li>
              )
            }
          })}
        </ul>
        <div>{loading && 'Loading...'}</div>
        <div>{error && 'Error'}</div>
      </div>
    </>
  )
}