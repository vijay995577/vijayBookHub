import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {AiFillFire} from 'react-icons/ai'

import ToggleTheme from '../../context/ToggleTheme'

import LoaderComponent from '../Loader'
import VideoCard from '../VideoCard'
import FetchError from '../FailureView'

import {
  HomeContainer,
  BottomContainer,
  HomeVideoContainer,
  EachVideoContainer,
  HeaderContainer,
  IconContainer,
  Heading,
  ContentContainer,
} from './styledComponents'

class Trending extends Component {
  state = {
    isLoading: false,
    fetchFailed: false,
    VideosList: [],
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({isLoading: true})
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    try {
      const response = await fetch(
        `https://apis.ccbp.in/videos/trending`,
        options,
      )
      const data = await response.json()

      if (response.ok) {
        const UpdatedData = data.videos.map(each => ({
          id: each.id,
          name: each.channel.name,
          profileImg: each.channel.profile_image_url,
          publishedTime: each.published_at,
          thumbnailUrl: each.thumbnail_url,
          title: each.title,
          viewCount: each.view_count,
        }))
        this.setState({isLoading: false, VideosList: UpdatedData})
      }
    } catch {
      console.log('fetch failed')
      this.setState({fetchFailed: true, isLoading: false})
    }
  }

  render() {
    const {isLoading, fetchFailed, VideosList} = this.state

    const jwt = Cookies.get('jwt_token')
    if (jwt === undefined) {
      return <Redirect to="/login" />
    }

    return (
      <ToggleTheme.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <HomeContainer toggle={isDarkTheme} data-testid="trending">
              <BottomContainer>
                <HomeVideoContainer toggle={isDarkTheme}>
                  {fetchFailed && <FetchError fail={this.getVideos} />}
                  {!fetchFailed && (
                    <ContentContainer>
                      <HeaderContainer toggle={isDarkTheme}>
                        <IconContainer toggle={isDarkTheme}>
                          <AiFillFire
                            style={{color: 'red', fontSize: '30px'}}
                          />
                        </IconContainer>
                        <Heading toggle={isDarkTheme}>Trending</Heading>
                      </HeaderContainer>
                      {isLoading ? <LoaderComponent /> : null}
                      <EachVideoContainer>
                        {VideosList.map(each => (
                          <VideoCard itemDetails={each} key={each.id} />
                        ))}
                      </EachVideoContainer>
                    </ContentContainer>
                  )}
                </HomeVideoContainer>
              </BottomContainer>
            </HomeContainer>
          )
        }}
      </ToggleTheme.Consumer>
    )
  }
}

export default Trending
