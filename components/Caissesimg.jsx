import Portfolio from "./Project";


export default function Caisseimg() {
    const images = [
        { src: '../public/Caisse.PNG', alt: 'caisse1', width: 600, height: 336}]

        return<>
            <Portfolio images={images} />
        </>
}