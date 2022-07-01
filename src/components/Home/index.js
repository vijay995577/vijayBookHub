import {Component} from 'react'
import {BsX, BsSearch} from 'react-icons/bs'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import ToggleTheme from '../../context/ToggleTheme'
import LoaderComponent from '../Loader'
import VideoCard from '../VideoCard'
import FetchError from '../FailureView'

import {
  HomeContainer,
  BottomContainer,
  HomeVideoContainer,
  BannerContainer,
  ContentContainer,
  GetBtn,
  LogoImg,
  AdvertLine,
  CancelBtn,
  NFheading,
  NFpara,
  SearchContainer,
  SearchBar,
  EachVideoContainer,
  RetryBtn,
  OopsContainer,
  SearchBtn,
} from './styledComponents'

class Home extends Component {
  state = {
    showBanner: true,
    searchInput: '',
    isLoading: false,
    VideosList: [],
    fetchFailed: false,
    EmptyList: false,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({isLoading: true})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    try {
      const response = await fetch(
        `https://apis.ccbp.in/videos/all?search=${searchInput}`,
        options,
      )

      const data = await response.json()
      if (data.videos.length === 0) {
        this.setState({EmptyList: true})
      } else {
        this.setState({EmptyList: false})
      }
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

  NoSearchResults = isDarkTheme => (
    <OopsContainer>
      <LogoImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
        maiHuNotFound
      />
      <NFheading toggle={isDarkTheme}>No Search results found</NFheading>
      <NFpara toggle={isDarkTheme}>
        Try different keywords or remove filters.
      </NFpara>
      <RetryBtn onClick={this.MakeSearch}>Retry</RetryBtn>
    </OopsContainer>
  )

  MakeSearch = () => {
    this.getVideos()
  }

  CancelBanner = () => {
    this.setState({showBanner: false})
  }

  ChangeSearch = e => {
    this.setState({searchInput: e.target.value})
  }

  render() {
    const {
      showBanner,
      searchInput,
      isLoading,
      VideosList,
      fetchFailed,
      EmptyList,
    } = this.state

    const LogoList = [
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png',

      'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png',
    ]
    // const ImgList = [
    //   'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png',

    //   'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png',
    // ]
    const jwt = Cookies.get('jwt_token')
    if (jwt === undefined) {
      return <Redirect to="/login" />
    }

    return (
      <ToggleTheme.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <HomeContainer toggle={isDarkTheme} data-testid="home">
              <BottomContainer>
                <HomeVideoContainer toggle={isDarkTheme}>
                  <BannerContainer
                    data-testid="banner"
                    CancelBanner={showBanner}
                  >
                    <ContentContainer>
                      <LogoImg src={LogoList[0]} alt="nxt watch logo" />
                      <AdvertLine>
                        Buy NXT Watch Premium prepaid plans with UPI
                      </AdvertLine>
                      <GetBtn>GET IT NOW</GetBtn>
                    </ContentContainer>
                    <CancelBtn data-testid="close">
                      <BsX onClick={this.CancelBanner} />
                    </CancelBtn>
                  </BannerContainer>
                  <SearchContainer>
                    <SearchBar
                      type="search"
                      value={searchInput}
                      onChange={this.ChangeSearch}
                      toggle={isDarkTheme}
                    />
                    <SearchBtn
                      data-testid="searchButton"
                      onClick={this.MakeSearch}
                    >
                      <BsSearch style={{color: '#7e858e'}} />
                    </SearchBtn>
                  </SearchContainer>

                  {isLoading ? <LoaderComponent /> : null}
                  {fetchFailed && <FetchError fail={this.getVideos} />}
                  {EmptyList ? (
                    this.NoSearchResults(isDarkTheme)
                  ) : (
                    <EachVideoContainer>
                      {VideosList.map(each => (
                        <VideoCard itemDetails={each} key={each.id} />
                      ))}
                    </EachVideoContainer>
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

export default Home
