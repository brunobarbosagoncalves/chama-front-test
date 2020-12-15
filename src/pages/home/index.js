import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

export default (props) => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch({
      type: 'GITHUB_USER_CLEAN',
    })

    dispatch({
      type: 'GITHUB_USER_FETCH_REQUEST',
      payload: { userId: 'hei' },
    })

    dispatch({
      type: 'GITHUB_USER_LIST_FETCH_REQUEST',
    })

    return () => {
      // effect
    }
  }, [])

  const list = useSelector((state) => state.github)

  return (
    <div>
      Home <br />
      {JSON.stringify(list, null, 6)}
    </div>
  )
}
