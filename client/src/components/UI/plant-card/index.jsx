import React from 'react';
import localStyles from './styles.css';
import { Link } from 'react-router-dom';

export const PlantCard = ({
  styles = localStyles,
  name,
  id,
  photoUrlVerticalCrop,
}) => (
  <Link to={`/plant-types/${id}`} className={styles.linkStyle}>
    <div className={styles.plantBox}>
      <img src={photoUrlVerticalCrop} className={styles.plantPic} />
      <p className={styles.plantName}>{name}</p>
    </div>
  </Link>
);
