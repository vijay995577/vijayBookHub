import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ReactPlayer from 'react-player'
// import {formatDistanceToNow} from 'date-fns'
import {AiOutlineDislike, AiOutlineLike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import ToggleTheme from '../../context/ToggleTheme'

import LoaderComponent from '../Loader'
import FetchError from '../FailureView'

import {
  HomeContainer,
  BottomContainer,
  HomeVideoContainer,
  Heading,
  ViewandBtnContainer,
  ViewContainer,
  BtnContainer,
  LogoImg,
  LikeContainer,
  PNSContainer,
  NSContainer,
  LikeBtn,
} from './styledComponents'

class VideoDetails extends Component {
  state = {
    isLoading: false,
    fetchFailed: false,
    VideosList: [],
    positiveLiked: false,
    negitiveLiked: false,
    isExist: false,
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
    const {match} = this.props
    const {params} = match
    const {id} = params
    try {
      const response = await fetch(`https://apis.ccbp.in/videos/${id}`, options)
      const data = await response.json()
      //   console.log(data)
      if (response.ok) {
        const temp = data.video_details
        const UpdatedData = {
          id: temp.id,
          name: temp.channel.name,
          profileImg: temp.channel.profile_image_url,
          subscriberCount: temp.channel.subscriber_count,
          publishedTime: temp.published_at,
          thumbnailUrl: temp.thumbnail_url,
          title: temp.title,
          viewCount: temp.view_count,
          description: temp.description,
          Url: temp.video_url,
        }
        this.setState({isLoading: false, VideosList: UpdatedData})
      }
    } catch {
      //   console.log('fetch failed')
      this.setState({fetchFailed: true, isLoading: false})
    }
  }

  toggleSaveStatus = () => {
    this.setState(prevState => ({isExist: !prevState.isExist}))
  }

  onLikeClick = () => {
    this.setState(prevState => ({
      positiveLiked: !prevState.positiveLiked,
      negitiveLiked: false,
    }))
  }

  onDislikeClick = () => {
    this.setState(prevState => ({
      negitiveLiked: !prevState.negitiveLiked,
      positiveLiked: false,
    }))
  }

  render() {
    const {
      isLoading,
      fetchFailed,
      VideosList,
      positiveLiked,
      negitiveLiked,
      isExist,
    } = this.state
    // console.log(VideosList)
    const {
      id,
      name,
      profileImg,
      subscriberCount,
      publishedTime,
      title,
      viewCount,
      description,
      Url,
    } = VideosList
    // const Time = formatDistanceToNow(new Date(publishedTime))
    const jwt = Cookies.get('jwt_token')
    if (jwt === undefined) {
      return <Redirect to="/login" />
    }

    return (
      <ToggleTheme.Consumer>
        {value => {
          const {isDarkTheme, onAddVideo, onRemoveVideo} = value
          const toggleSaved = () => {
            this.toggleSaveStatus()
            console.log(isExist)
            if (isExist) {
              onRemoveVideo(VideosList)
            } else {
              onAddVideo(VideosList)
            }
          }
          return (
            <HomeContainer data-testid="videoItemDetails">
              <BottomContainer>
                <HomeVideoContainer toggle={isDarkTheme}>
                  {isLoading ? <LoaderComponent /> : null}
                  {fetchFailed && <FetchError fail={this.getVideos} />}
                  {!fetchFailed && (
                    <div className="player_container">
                      <ReactPlayer
                        url={Url}
                        controls
                        className="react_player"
                        width="90%"
                        height="100%"
                      />

                      <Heading titleHead toggle={isDarkTheme}>
                        {title}
                      </Heading>
                      <ViewandBtnContainer>
                        <ViewContainer toggle={isDarkTheme}>
                          <Heading
                            para
                            toggle={isDarkTheme}
                            style={{marginRight: '8px'}}
                          >
                            {viewCount}
                          </Heading>
                          <Heading para toggle={isDarkTheme}>
                            {publishedTime}
                          </Heading>
                        </ViewContainer>
                        <BtnContainer toggle={isDarkTheme}>
                          <LikeContainer toggle={isDarkTheme}>
                            <LikeBtn
                              onClick={this.onLikeClick}
                              liked={positiveLiked}
                            >
                              <AiOutlineLike />
                              Like
                            </LikeBtn>
                          </LikeContainer>

                          <LikeContainer toggle={isDarkTheme}>
                            <LikeBtn
                              onClick={this.onDislikeClick}
                              liked={negitiveLiked}
                            >
                              <AiOutlineDislike />
                              Dislike
                            </LikeBtn>
                          </LikeContainer>
                          <LikeContainer toggle={isDarkTheme}>
                            <LikeBtn
                              value={id}
                              onClick={toggleSaved}
                              style={{
                                color: isExist ? '#2563eb ' : '#64748b',
                              }}
                            >
                              <BiListPlus />
                              {isExist ? 'Saved' : 'Save'}
                            </LikeBtn>
                          </LikeContainer>
                        </BtnContainer>
                      </ViewandBtnContainer>
                      <hr
                        style={{
                          width: '95%',
                          color: isDarkTheme ? '#cbd5e1' : '#000000',
                        }}
                      />
                      <PNSContainer toggle={isDarkTheme}>
                        <LogoImg
                          src={profileImg}
                          alt="channel logo"
                          height="40px"
                          width="40px"
                        />
                        <NSContainer>
                          <Heading para toggle={isDarkTheme}>
                            {name}
                          </Heading>
                          <Heading para toggle={isDarkTheme}>
                            {subscriberCount} subscribers
                          </Heading>
                        </NSContainer>
                      </PNSContainer>
                      <Heading
                        para
                        style={{
                          width: '85%',
                          color: isDarkTheme ? '#cbd5e1' : '#000000',
                        }}
                      >
                        {description}
                      </Heading>
                    </div>
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

export default VideoDetails
