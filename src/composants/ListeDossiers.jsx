import './ListeDossiers.scss';
import dossTab from '../data/liste-dossiers.json';
import Dossier from './Dossier';
import {useState, useEffect} from 'react';
import { firestore } from '../firebase';

export default function ListeDossiers({etatUtilisateur}) {
  const [dossiers, setDossier] = useState([]);
  const [utilisateur] = etatUtilisateur;

  useEffect(
    () => {
      async function chercherDossiers() {
        const tabDossiers = [];
        const reponse = await firestore.collection('utilisateurs').doc(utilisateur.uid).collection('dossiers').get;
        reponse.forEach(
          dossier => tabDossiers.push(dossier)
        );
      }
      chercherDossiers();
    }, []
  );
  

  return (
    <ul className="ListeDossiers">
      {
        dossiers.map( 
          dossier =>  <li key={dossier.id}><Dossier {...dossier} /></li>
        )
      }
    </ul>
  );
}