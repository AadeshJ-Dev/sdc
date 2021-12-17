import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useGetUserList(query, results) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [usersList, setUsersList] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setUsersList([])
  }, [query])

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel
    axios({
      method: 'GET',
      url: `https://randomuser.me/api/?results=${results}`,
      params: {results: results },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setUsersList(prevUsers => {
        return [...new Set([...prevUsers, ...res.data.results.map(b => b.name)])]
      })
      setHasMore(res.data.results.length > 0)
      setLoading(false)
    }).catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
    })
    return () => cancel()
  }, [query, results])

  return { loading, error, usersList, hasMore }
}