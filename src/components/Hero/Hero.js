import React from 'react';
import styles from './Hero.scss';

const Hero = () => (
  <header className={styles.component}>
    
    <h2 className={styles.title}>List to do</h2>
    <img className={styles.image} 
    src="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png" alt="img1" />
    
  </header>
);


export default Hero;
