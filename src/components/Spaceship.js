import React from 'react';

export default class Spaceship extends React.Component {
  render(){
    return(
      <div>
        Spaceship Name: {this.props.name}
        Spaceship Speed: {this.props.speed}
        Spaceship Has Rockets?: {this.props.hasRockets}
        Spaceship Colors: {this.props.colors}
      </div>
    );
  }
};

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black','red']
};
