import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';

const AlgorithmCard = ({ link, imgLink, title, description }) => (
  <div 
    className={`card card-body border-primary mb-3 align-items-start 
      ${styles.item}`}
  >
    <NavLink className="d-flex w-100" to={link}>
      <img className={styles.img} src={imgLink} alt="Algorithm Preview" />
    </NavLink>
    <NavLink to={link} className="mt-3">
      <h5 className="card-title">{title}</h5>
    </NavLink>
    <p className="card-text">{description}</p>
  </div>
);

export default AlgorithmCard;