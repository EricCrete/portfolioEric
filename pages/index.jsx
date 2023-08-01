import { useState } from "react"
import Accueil from "../components/Accueil";
import Project from "../components/Project"
import Oldies from "../components/Oldies"
import Layout from "../components/Layout";
import TemoignagesListe from "../components/TemoignageListe";
import AjouterTemoignage from "../components/AjouterTemoignage";
export default function Home() {
  const [page, setPage] = useState('acceuil');
  return <>
  <Layout setPage={setPage}>
    {
      page === 'acceuil' ?
        <Accueil />
      : page === 'project' ? 
        <Project />
      : page === 'project2' ? 
        <Oldies/>
        : page === 'temoignage' ? 
        <AjouterTemoignage/>
        : page === 'temoignageList' ? 
        <TemoignagesListe/>
      
      
        : 404
    }
    </Layout>
  </>
}
