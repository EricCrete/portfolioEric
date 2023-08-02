import { useState } from "react";
import Accueil from "../components/Accueil";
import Project from "../components/Project";
import Oldies from "../components/Oldies";
import Layout from "../components/Layout";
import TemoignagesListe from "../components/TemoignageListe";
import AjouterTemoignage from "../components/AjouterTemoignage";

export default function Home() {
  const [page, setPage] = useState('acceuil');

  const renderPage = () => {
    switch (page) {
      case 'acceuil':
        return <Accueil />;
      case 'project':
        return <Project />;
      case 'project2':
        return <Oldies />;
      case 'ajouterTemoignage':
        return <AjouterTemoignage />;
      case 'afficheTemoignage':
        return <TemoignagesListe />;
      default:
        return null;
    }
  };

  return (
    <Layout page={page} setPage={setPage}>
      {renderPage()}
    </Layout>
  );
}