import './Entete.scss';
import { Avatar } from '@material-ui/core'; 
import firebase from 'firebase/app';
import Button from '@material-ui/core/Button';


export default function Entete({etatUtilisateur}) {
  const [utilisateur, setUtilisateur] = etatUtilisateur;

  function gererLogout() {
    firebase.auth().signOut();
  }

  return (
    <header className="Entete">
      <div className="logo">Signets<Button className="btn-logout" variant="outlined" size="small" onClick={gererLogout}>logout</Button></div>
      <div className="utilisateur">{utilisateur.displayName} <Avatar className="avatar" alt={utilisateur.displayName} src={utilisateur.photoURL} /></div>
    </header>
  );
}