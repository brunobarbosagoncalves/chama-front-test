import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import LContainer from 'components/Layout/Container'
import LNavbar from 'components/Layout/Navbar'
import LFooter from 'components/Layout/Footer'
import LBody from 'components/Layout/Body'
import Row from 'components/Row'
import Col from 'components/Col'
import Input from 'components/Input'
import Button from 'components/Button'
import Text from 'components/Text'

export default (props) => {
  const dispatch = useDispatch()

  const github = useSelector((state) => state.github)

  const [search, setsearch] = React.useState('')

  React.useEffect(() => {
    const query = Object.fromEntries(new URLSearchParams(props.location.search))

    if (query.repo) findRepo(query.repo)

    return () => {
      // effect
    }
  }, [])

  const findRepo = (search) => {
    dispatch({ type: 'GITHUB_USER_CLEAN' })
    dispatch({ type: 'GITHUB_USER_LIST_CLEAN' })
    dispatch({ type: 'GITHUB_USER_HISTORY_ADD', payload: search })

    if (!!search === false) dispatch({ type: 'GITHUB_USER_LIST_FETCH_REQUEST' })

    if (!!search === true)
      dispatch({
        type: 'GITHUB_USER_FETCH_REQUEST',
        payload: { userId: search },
      })
  }

  return (
    <React.Fragment>
      <LNavbar>
        <Link to={'/'}>
          <Text>Go To Home</Text>
        </Link>
      </LNavbar>
      <LContainer>
        <LBody>
          <Text h3>History </Text>
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            {github.historic.reverse().map((item) => (
              <div
                style={{
                  borderRadius: '1rem',
                  border: '1px solid gray',
                  padding: '.5rem',
                  margin: '.5rem',
                  minHeight: '2rem',
                  width: '100%',
                }}
                onClick={() => props.history.push(`/?repo=${item}`)}
              >
                {item || ''}
              </div>
            ))}
          </div>
        </LBody>
      </LContainer>
      <LFooter>Footer</LFooter>
    </React.Fragment>
  )
}
