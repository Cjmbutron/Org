import "../boton/boton.css"
const Boton = (props) => {
    return <button className="boton">{props.children}</button>
}
export default Boton