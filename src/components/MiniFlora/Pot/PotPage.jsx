import React from 'react';
import styles from './PotPage.module.css';

const { longueur, largeur, profondeur } = styles;

function PotPage() {
  return (
    <>
      <p className={longueur}>LONGUEUR</p>
      <p className={largeur}>LARGEUR</p>
      <p className={profondeur}>PROFONDEUR</p>
    </>
  )
};

export default PotPage;