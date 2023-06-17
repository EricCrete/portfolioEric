import { useState } from "react"
import Accueil from "../components/Accueil";
import Project from "../components/Project"
import Oldies from "../components/Oldies"
import Layout from "../components/Layout";
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
      :
        404
    }
    </Layout>
  </>
}
