import React, { useState, useEffect } from "react";
import "./Game.css";
import Tablero from "./componentes/tablero/Tablero";
import Boton from "./componentes/botones/Boton";
import Random from "./helpers/Random";
import ModalAyuda from "./componentes/wflotante/ModalAyuda";


//Colores de los Botones de la Derecha
const NAME_COLOR = [
    "Rojo",
    "Amarillo",
    "Verde",
    "Azul",
    "Naranja",
    "Violeta",
    "Negro"
];
//Nombres de los Botones de Abajo
const NAME_BTN = ["Revisar", "Cancelar", "Limpiar", "NuevoP"];

export default function Game() {
    //cantDibujado es para saber los click. Cancelar es para controlar el cancelado
    let [controlTablero, setControlTablero] = useState({
        cantDibujado: 0,
        cancelar: false
    });
    //Controlar la fila en la que se esta pintando
    let [fila, setFila] = useState(0);

    //Controlar cuando si se ha revisado o no
    let [revisado, setRevisado] = useState(false);
    //Para controlar la fila de colores que va pintando el usuario
    let [arrayFilaColores, setArrayFilaColores] = useState(["C"]);
    //Para mostrar la comprobacion entre  la fila de colores del usuario y la que esta por adivinarse
    let [resultRevision, setResultRevision] = useState("");
    //Combinacion de colores que se debe adivinar
    let [arrayColorAdiv, setArrayColorAdiv] = useState([]);
    //Para bloquear las filas Revisadas
    let [filaRevisada, setFilaRevisada] = useState([]);
    //Para mostrar la ventana de ayuda
    let [isOpen, setIsOpen] = useState(false);
    //Variables auxiliares
    let botonesAbajo = [];
    let botonesDerecha = [];
    let numFila = 0;

    //Se ejecuta solo una vez, para general la combinacion random de colores a Adivinar, esto lo permite los [] vacios como parametros
    useEffect(() => {
        const coloresRandom = () => {
            let arrayRandom = [];
            let arrayColor = [];
            let numRandom;
            //Genera un arreglo de numeros del 1 al 5 Random
            do {
                numRandom = Random(1, 7);
                if (arrayRandom.indexOf(numRandom) === -1) {
                    arrayRandom.push(numRandom);
                }
            } while (arrayRandom.length < 5);
            //Cambiar el arreglo de numeros ramdom por los nombres de los Colores
            arrayRandom.forEach(element => {
                arrayColor.push(NAME_COLOR[element - 1])
            });
            //Actualizar el arreglo de colores a adivinar
            setArrayColorAdiv(arrayColor.reverse());

        }

        //Llamada de la funcion para que se ejecute una vez
        coloresRandom();
    }, []);



    //Funcion para controlar el evento de Click en los botones de Abajo
    const hadlerClickAbajo = (evt) => {

        //Revisar
        if (evt.target.value === NAME_BTN[0]) {
            let datosBien = 0;
            let datosRegular = 0;
            let resultado = "Result: ";
            let colores = arrayFilaColores.filter((el) => el !== "C");
            let numFila = Math.ceil(controlTablero.cantDibujado / 5);
            console.log(arrayColorAdiv);


            if (controlTablero.cantDibujado % 5 === 0 && controlTablero.cantDibujado !== 0) {
                for (let i = 0; i < colores.length; i++) {//Color a comprobar de la fila
                    for (let index = 0; index < arrayColorAdiv.length; index++) {//Colores Adivinar
                        if (colores[i] === arrayColorAdiv[index]) {
                            if (i === index) {
                                datosBien++;
                            } else {
                                datosRegular++;
                            }
                            break;
                        }

                    }

                }
                if (datosBien === 5) {
                    resultado = "Ganador";
                    alert("Felicidades has adivinado la secuencia de colores oculta");
                } else {
                    if (datosBien > 0) {
                        resultado += datosBien + " B ";
                    }
                    if (datosRegular > 0) {
                        resultado += datosRegular + " R ";
                    }
                }

                if (resultado !== "Ganador" && numFila === 9) {
                    setResultRevision("Perdedor");
                    alert("Lo siento se acabaron las oportunidades. Empiece una nueva partida");
                } else {
                    setResultRevision(resultado);
                    setFila(numFila);
                   
                }

            } else {
                (controlTablero.cantDibujado === 0) ? alert("Tiene que dibujar una fila para poder hacer la revisión") : alert("Complete la fila antes de revisar");
            }
            setRevisado(true);
            if (filaRevisada.length > 0) {
                setFilaRevisada([...filaRevisada, numFila]);
            } else {
                setFilaRevisada([numFila]);
            }
        } //Cancelar
        else if (evt.target.value === NAME_BTN[1]) {
            //Verificar si existen elementos dibujados
            if (resultRevision !== "Ganador") {
                if (controlTablero.cantDibujado > 0) {
                    //Obtner el valor entero de la division cantidad de click entre 5 que son los colores de cada fila
                    let numFila = Math.ceil(controlTablero.cantDibujado / 5);
                    console.log(filaRevisada);
                    //Verificar si ya la fila se reviso
                    if (filaRevisada.indexOf(numFila) === -1) {
                        setControlTablero({
                            cantDibujado: controlTablero.cantDibujado - 1,
                            cancelar: true,
                        });
                        setFila(numFila);
                        setRevisado(false);
                        if (arrayFilaColores.length > 1) {
                            //Borrar el ultimo elemento pintado por el usuario
                            let ultimoElemento = arrayFilaColores[arrayFilaColores.length - 1];
                            let arraySinUltimoElemento = arrayFilaColores.filter((el) => ultimoElemento !== el);
                            setArrayFilaColores(arraySinUltimoElemento);
                        }
                    } else {
                        alert("No puede cancelar elementos cuando la fila ya esta revisada");
                    }
                } else {
                    (fila === 0) ? alert(`No tienes elementos que cancelar en la fila ${1}`) : alert(`No tienes elementos que cancelar en la fila ${fila}`);
                }
            } else {
                alert('Debe iniciar una Nueva Partida');
            }
        } //Limpiar
        else if (evt.target.value === NAME_BTN[2]) {
            if (resultRevision !== "Ganador") {
                if (controlTablero.cantDibujado >= 0) {
                    //Obtner el valor entero de la division cantidad de click entre 5 que son los colores de cada fila
                    numFila = Math.ceil(controlTablero.cantDibujado / 5);
                    if (filaRevisada.indexOf(numFila) === -1) {
                        //Recetea la ultima fila de colores dibujada por el usuario
                        setArrayFilaColores(["C"]);
                        //Actualiza datos para porder dibujar
                        setControlTablero({
                            cantDibujado: (numFila * 5) - 5,
                            cancelar: false,
                        });

                        setFila(numFila);
                    } else {
                        alert("No puede Limpiar la fila cuando ya esta revisada");
                    }
                }
                setRevisado(false);
                setResultRevision("");
            } else {
                alert('Debe iniciar una Nueva Partida');
            }
        } //Nueva partida
        else if (evt.target.value === NAME_BTN[3]) {
            window.location.reload();

        }

    }

    //Funcion para controlar el evento click de los botones de colores a la Derecha
    const hadlerClickDerecha = (evt) => {
console.log(`fila dibujada ${arrayFilaColores}`)
        if (arrayFilaColores.length!==1 && controlTablero.cantDibujado % 5 === 0 && filaRevisada.indexOf(fila) === -1) {

            alert(`Tiene que revisar la fila ${fila} para poder continuar jugando`);

        } else {

            numFila = Math.ceil(controlTablero.cantDibujado / 5);
            if (arrayFilaColores.length < 6) {

                if (arrayFilaColores.indexOf(evt.target.value) === -1) {

                    setArrayFilaColores([...arrayFilaColores, evt.target.value]);
                    setControlTablero({
                        cantDibujado: (controlTablero.cantDibujado === 45) ? 0 : controlTablero.cantDibujado + 1,
                        cancelar: false
                    });
                    setRevisado(false);
                    setFila(numFila);
                } else {
                    alert("No puede repetir colores en la misma fila");
                }

            } else {
                setArrayFilaColores(["C", evt.target.value]);
                setControlTablero({
                    cantDibujado: (controlTablero.cantDibujado === 45) ? 0 : controlTablero.cantDibujado + 1,
                    cancelar: false
                });
                setRevisado(false);
                setFila(numFila);


            }
        }

    }


    const closeModal = () => setIsOpen(false);



    //Para generar los bonotes de abajo
    for (var i = 0; i < NAME_BTN.length; i++) {


        botonesAbajo.push(<Boton name={NAME_BTN[i]} btnNormal={true} key={i} myOnclick={(e) => hadlerClickAbajo(e)} />)
    }
    //Para generar los bonotes de la derecha
    for (var j = 0; j < NAME_COLOR.length; j++) {

        botonesDerecha.push(<Boton name={NAME_COLOR[j]} btnNormal={false} key={j} myOnclick={(e) => hadlerClickDerecha(e)} />)
    }


    return (
        <>

            <div className="ayuda">

                <Boton name="Ayuda" className='btnAyuda' btnNormal={true} myOnclick={() => { setIsOpen(true) }} />
                <ModalAyuda isOpen={isOpen} closeModal={closeModal} />
            </div>
            <h3 className='h3'>A jugar!</h3>
            <div className="contenedor">

                <section className="tablero" >

                    {<Tablero
                        cantDibujado={controlTablero.cantDibujado}
                        cancelar={controlTablero.cancelar}
                        fila={fila}
                        arrayFilaColores={arrayFilaColores}
                        coloresAdivinar={arrayColorAdiv}
                        resultRevision={resultRevision}
                        revisado={revisado}
                    />}

                </section>
                <section className="btDerecha" >

                    <div>

                        {botonesDerecha}
                    </div>

                </section>

            </div>
            <section className="botones-abajo">

                <div>

                    {botonesAbajo}
                </div>


            </section>
        </>
    );
}