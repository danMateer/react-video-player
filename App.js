import React from 'react';
import ReactDOM from 'react-dom';
import { Video } from './Video';
import { Menu } from './Menu';

const VIDEOS = {
  med: '<MED_QUALITY_SRC_URL>',
  high: '<HIGH_QUALITY_SRC_URL>',
  hi_def: '<HI_DEF_SRC_URL>'
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { src: VIDEOS.slow };
    this.chooseVideo = this.chooseVideo.bind(this);
  }

  chooseVideo(newVideo) {
    this.setState({
      src: VIDEOS[newVideo]
    });
  }

  render() {
    return (
      <div>
        <h1>Video Player</h1>
        <Menu chooseVideo={this.chooseVideo}/>
        <Video src={this.state.src}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
