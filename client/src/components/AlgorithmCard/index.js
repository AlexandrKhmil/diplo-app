import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';

export default function AlgorithmCard(props) {
  const { 
    title,
    link,
    imgLink,
    description, 
  } = props;
  return (
    <div className="card card-body border-primary mb-3 align-items-start">
      <NavLink to={link}>
        <img className={styles.img} src={imgLink} alt="Algorithm Preview" />
      </NavLink>
      <NavLink to={link} className="mt-3"><h5 className="card-title">{title}</h5></NavLink>
      <p className="card-text">{description}</p>
    </div>
  )
}