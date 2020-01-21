import React from 'react';
import styles from './PotPage.module.css';
import { Image, Segment } from "semantic-ui-react"
import pot from '../../../assets/jardiniere.png'
import basImage from '../../../assets/footer.png'



const { longueur, largeur, profondeur, potFleur, image, centrage, inputlong, inputlarg, inputprof, long, larg, prof  } = styles;

function PotPage() {
  return (
    <>
      <Image size="medium" className={potFleur} src={pot}/>
      <div className={centrage}>
        <div className={inputlong}>
      <p className={longueur}>LONGUEUR </p>
      <input className={long} type="text" placeholder="Longueur"/> cm
        </div>
        <div className={inputlarg}>
      <p className={largeur}>LARGEUR</p>
      <input className={larg} type="text" placeholder="Largeur" /> cm
        </div>
        <div className={inputprof}>
      <p className={profondeur}>PROFONDEUR</p>
      <input className={prof} type="text" placeholder="Profondeur"/> cm
        </div>
      </div>
      <Image className={image} src={basImage}/>
      
    </>
  )
};

export default PotPage;