import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';

class List extends React.Component {
  render() {
    return (

    <Hero titleText={this.props.title} />
    )
  }
}

export default List;
