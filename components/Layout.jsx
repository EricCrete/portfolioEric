import Header from "./Header";
import { Footer } from "./Footer";
import Toggler from './Toggler'

export default function Layout(props) {
    return <>
        <Header setPage={props.setPage}/>
        {props.children}
        <Toggler titre={'contact'} visible="true" children={
        <div>
            <a className='{Style.a}' href='https://github.com/EricCrete' a>My github</a>
        </div>}/>
        <Footer/>
    </>
    
}