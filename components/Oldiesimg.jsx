import Portfolio from "./Oldies";


export default function Oldiesimg() {
    const images = [
        { src: '../public/Oldies.PNG', alt: 'oldies1', width: 360, height: 336},
        { src: '../public/Oldies2.PNG', alt: 'oldies1', width: 360, height: 336},
        { src: '../public/Oldies3.PNG', alt: 'oldies1', width: 360, height: 336}]

        return<>
            <Portfolio images={images} />
        </>
}