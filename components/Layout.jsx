import Header from "./Header";
import { Footer } from "./Footer";
import Toggler from './Toggler';
import { Aboutme } from './Aboutme';
import Accueil from './Accueil';
import Project from './Project';
import Oldies from './Oldies';
import TemoignagesListe from './TemoignageListe';
import AjouterTemoignage from './AjouterTemoignage';

export default function Layout({ page, setPage }) {
  return (
    <>
      <Header setPage={setPage} />
      <div className="page-content">
        {page === 'acceuil' && <Accueil />}
        {page === 'project' && <Project />}
        {page === 'project2' && <Oldies />}
        {page === 'ajouterTemoignage' && <AjouterTemoignage />}
        {page === 'afficheTemoignage' && <TemoignagesListe />}
      </div>
      <Toggler titre={'contact'} visible="true" children={
        <div>
          <a className='{Style.a}' href='https://github.com/EricCrete' a>My github</a>
        </div>
      } />
      <Footer />
    </>
  );
}