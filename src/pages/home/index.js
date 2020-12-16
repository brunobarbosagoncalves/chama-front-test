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

import List from './components/List'

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
        <Link to={'/history'}>
          <Text>Look History</Text>
        </Link>
      </LNavbar>
      <LContainer>
        <LBody>
          <Text h3>Pesquisar </Text>
          <Row>
            <Col c10>
              <Input
                placeholder="Repositório ou lista"
                value={search}
                onChange={(e) => setsearch(e.target.value)}
              />
            </Col>
            <Col c2>
              <Button type="button" onClick={() => findRepo(search)}>
                Buscar
              </Button>
            </Col>
          </Row>

          {/* If list repositories */}
          {github && github.userlist && (
            <List
              findrepo={findRepo}
              history={props.history}
              data={Object.entries(github.userlist).map((user) => user[1])}
            />
          )}

          {/* If user */}
          {github && github.user && github.user.id && (
            <React.Fragment>
              <Row>
                <Col c4>
                  <Row>
                    <Col c12>
                      <Text h4>Followers</Text>{' '}
                    </Col>
                  </Row>
                  <Row style={{ maxHeight: '14rem', overflow: 'auto' }}>
                    {github.user._followers.map((follower) => (
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          flexDirection: 'column',
                          alignItems: 'center',
                          cursor: 'pointer',
                        }}
                        onClick={() => findRepo(follower.login)}
                      >
                        <Text textalign="center" h4>
                          {follower.login}
                        </Text>
                        <img
                          src={follower.avatar_url}
                          style={{
                            maxWidth: '10rem',
                            height: 'auto',
                            borderRadius: '10rem',
                          }}
                        />
                      </div>
                    ))}
                  </Row>
                </Col>
                <Col c4>
                  {' '}
                  <Row>
                    <Col c12>
                      <Text h4>Repos</Text>{' '}
                    </Col>
                  </Row>
                  <Row
                    style={{
                      maxHeight: '14rem',
                      overflow: 'auto',
                      flexDirection: 'column',
                    }}
                  >
                    {github.user._repos.map((repo) => (
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          flexDirection: 'column',
                          alignItems: 'center',
                          border: '1px solid gray',
                          borderRadius: '4px',
                          padding: '.5rem',
                          margin: '.5rem 0px ',
                        }}
                      >
                        <Text textalign="center" h4>
                          {repo.name}
                        </Text>

                        <Text textalign="center" h6>
                          <a href={repo.html_url} target="_blank">
                            Look repo
                          </a>
                        </Text>
                        <Text h6>{repo.description}</Text>
                      </div>
                    ))}
                  </Row>
                </Col>
                <Col c4>
                  <Row>
                    <Col c12>
                      <Text h4>Bio</Text>{' '}
                    </Col>
                  </Row>
                  <Col
                    c12
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <img
                      src={github.user.avatar_url}
                      style={{
                        maxWidth: '10rem',
                        heght: 'auto',
                        borderRadius: '10rem',
                      }}
                    />
                  </Col>
                  <Row>
                    <Text h6>{`Name: ${github.user.name}`}</Text>
                  </Row>
                  <Row>
                    <Text h6>{`Cia: ${github.user.company}`}</Text>
                  </Row>
                  <Row>
                    <Text h6>{`Blog: ${github.user.blog}`}</Text>
                  </Row>
                  <Row>
                    <Text h6>{`Location: ${github.user.location}`}</Text>
                  </Row>
                  <Row>
                    <Text h6>{`Email: ${github.user.email || ''}`}</Text>
                  </Row>
                  <Row>
                    <Text h6>{`Twitter: ${
                      github.user.twitter_username || ''
                    }`}</Text>
                  </Row>
                </Col>
              </Row>
            </React.Fragment>
          )}
        </LBody>
      </LContainer>
      <LFooter>Footer</LFooter>
    </React.Fragment>
  )
}
