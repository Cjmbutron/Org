import "./MiOrg.css"

const MiOrg = (props) =>{

    // const [nombreVariable,funcionActualizada]
    //const [mostrar, actualizarMostrar]=useState(true)
    // const manejarClick = () => {
    //    console.log("mostrar/ocultar elemento", !mostrar)
    //    actualizarMostrar(!mostrar)
    //}

    return <section className="orgSection">

        <h3 className="title">Mi Organizacion </h3>
        <img src="../img/add.png" alt="add" onClick={props.cambiarMostrar}/>

    </section>
}
export default MiOrg