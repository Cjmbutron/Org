import "./listaopciones.css"

const ListaOpciones =(props) => {

    //metodo map -> agrreglo.map(equipo, index) =>{
    // return <option></option>
    //}

    const manejarCambio =(e) => {
        props.actualizarEquipo(e.target.value)
        
    }

    return <div className="listaopciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo </option>
            {props.equipos.map( (equipo, index)=><option key={index} value={equipo}>{equipo}</option> )}
            
        </select>
    </div>
}
export default ListaOpciones