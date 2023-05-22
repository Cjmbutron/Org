import { useState } from 'react';
import './App.css';
import {v4 as uuid} from "uuid"
import Header from "./componentes/header/Header.js";
import Formulario from './componentes/formulario/formulario.js';
import MiOrg from './componentes/miOrg';
import Equipo from './componentes/equipo';
import Footer from './componentes/footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores,actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav:true
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav:false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav:false
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav:false
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav:false
  },
  {
    id:uuid(),
    equipo:"Front End",
    foto:"https://media.licdn.com/dms/image/D4E35AQEFOhuvrq2CXQ/profile-framedphoto-shrink_200_200/0/1681252542667?e=1685134800&v=beta&t=WmtdP5wmKhS92qjUK9kS0SjfoGRPEQhmhLBqXtfViiM",
      nombre:"Cristhian Mamani",
      puesto: "Desarrollador",
      fav:true
    
  }])
  const [Equipos, actualizarEquipos] =useState([
    {
      id:uuid(),
      titulo:"Programación",
      colorPrimario:"#57C278",
      ColorSecundario:"#D9F7E9"
    },
    {
      id:uuid(),
      titulo:"Front End",
      colorPrimario:"#82CFFA",
      ColorSecundario:"#E8F8FF"
    },
    {
      id:uuid(),
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      ColorSecundario:"#F0F8E2"
    },
    {
      id:uuid(),
      titulo:"Devops",
      colorPrimario:"#E06B69",
      ColorSecundario:"#FDE7E8"
    },
    {
      id:uuid(),
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      ColorSecundario:"#FAE9F5"
    },
    {
      id:uuid(),
      titulo:"Móvil",
      colorPrimario:"#FFBA05",
      ColorSecundario:"#FFF5D9"
    },
    {
      id:uuid(),
      titulo:"Innovación y Gestión",
      colorPrimario:"#FF8A29",
      ColorSecundario:"#DDEEDF"
    }
])

  // Ternario --> condicion ? seMuestra: noSeMuestra
  const cambiarMostrar =() => {
    actualizarMostrar(!mostrarFormulario)
  }

  const registrarColaborador = (colaborador) =>{
    //Spread Operador: crear una copia de los valores actuales y añadir uno nuevo
    actualizarColaboradores([...colaboradores, colaborador])
  }
  //eliminar colaborador
  const eliminarColaborador = (id)=> {
    console.log("eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador)=> colaborador.id != id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualozar color de equipo
  const actualizarColor = (color, id)=>{
    console.log("actualizar", color, id)
    const equiposActualizados= Equipos.map((equipo)=>{
      if(equipo.id ===id){
        equipo.colorPrimario=color
      }
      return equipo
    })

    actualizarEquipos(equiposActualizados)

  }
  const crearEquipo =(nuevoEquipo) =>{
    console.log(nuevoEquipo)
    actualizarEquipos([...Equipos, {...nuevoEquipo, id: uuid()}])
  }

  const like = (id) =>{
    console.log("like", id)

    const colaboradoresActualizados = colaboradores.map((colaborador)=> {
      if(colaborador.id == id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

  }

  return (
    <div >
      <Header/>
      {mostrarFormulario && <Formulario 
        equipos={Equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo = {crearEquipo}
        /> 
      }
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
        Equipos.map( (equipo)=> <Equipo 
        datos={equipo} 
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaborador=> colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        /> 
        )
      }

      <Footer/>
    </div>
  );
}

export default App;

