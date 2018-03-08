import React, { Component } from 'react'
import {
  CardRow,
  Figure
} from '../helpers/styles'
import { helperTime } from '../helpers/time'

export default class Track extends Component {
  state = {
    previewUrl: '',
    disabled: false,
    time: this.props.duration_ms,
    icons: false
  }
  selectTrack = () => {
    this.props.onClick(this.props)
  };

  componentDidMount() {
    if(!this.props.preview_url) {
      this.setState({
        previewUrl: 'previewUrl',
        disabled: 'true'
      })
    }
    this.setState({ time: helperTime(this.state.time) })
  }

  handleMouseEnter = () => {
    this.setState({ icons: !this.state.icons })
  }

  render() {
    const blur = this.state.previewUrl
    return (
      <CardRow
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseEnter}
        blur={`${this.state.previewUrl}`}
        >
          <div>
            <Figure>
              <img style={{ maxWidth: '100%' }} src={this.props.album.images[0].url} alt="Image" />
            </Figure>
            {this.state.icons && (
              <div>Hi there!</div>
            )}
          </div>
          <div>
            <div>
              <div>
                {/* <Figure>
                  <img style={{ maxWidth: '100%' }} src={this.props.album.images[2].url} alt="Image" />
                </Figure> */}
                <div>
                  <p>{this.props.name}</p>
                  <p>{this.props.artists[0].name}</p>
                </div>
              </div>
            </div>
            {/* <div>
              <div>
                <small>{this.state.time}</small>
                <button disabled={this.state.disabled} onClick={this.selectTrack}>▶︎</button>
              </div>
            </div> */}
          </div>
        <style jsx>{`
          .preview-url {
            cursor: no-drop;
            filter: blur(3px);
          }
        `}</style>
      </CardRow>
    )
  }
}
