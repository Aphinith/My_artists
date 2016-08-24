import React, { Component } from 'react'
import { render } from 'react-dom'
import SearchBar from './src/components/searchBar.js'
import ArtistProfile from './src/components/artistProfile.js'
import ArtistTracks from './src/components/artistTracks.js'

class App extends Component {
  constructor (props) {
    super (props);

    this.state = { name: null,
                   id: null,
                   image: null,
                   tracks: [] 
      };
    this.artistSearch = this.artistSearch.bind(this);
    this.trackList = this.trackList.bind(this);
  }

  //create function to set state to have artist name, id, and image url
  artistSearch(name, id, image) {
    this.setState({name, id, image})
  }

  //create function to set state of tracks
  trackList(tracks) {
    this.setState({tracks})
  }

  render() {

    return (
      <div>
        <div id="instructions">
          Enter an artist name below and sample their top hits!
        </div>
        <div>
          <SearchBar artistInfo={this.artistSearch}
                     trackList={this.trackList}/>
        </div>
        <div id="container">
          <div id="artist-profile">
            <ArtistProfile profileInfo={this.state}/>
          </div>
          <div id="artist-tracks"> 
            <ArtistTracks trackList={this.state.tracks}/>
          </div>
          <div className="clear"></div>
        </div>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'))
