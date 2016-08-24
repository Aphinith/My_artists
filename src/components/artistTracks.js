import React, { Component } from 'react'

class ArtistTracks extends Component {

  constructor (props) {
    super(props);

    this.state = { tracks: null };
  }

  //update state with new searched tracks
  componentWillReceiveProps(nextProps) {
    this.setState({tracks: nextProps.trackList})
  }

  render() {
    console.log('this is now this.state.tracks:', this.state.tracks);
    if (this.state.tracks === null || this.state.tracks.length === 0) {
      return (
        <div></div>
        )
    }

    return (
      <div>
        {this.state.tracks.map(function(track){
          return <div key={track.id}>
                  <image className="track-image" src={track.album.images[1].url} />
                  <div>
                    <audio controls>
                      <source src={track.preview_url} type="audio/mpeg" />
                    </audio>
                  </div>
                  <div className="track-title">
                    Track Title: {track.name}
                  </div>
                 </div>
        })}
      </div>
      )
  }

}

export default ArtistTracks;