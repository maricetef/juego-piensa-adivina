import React, { useRef } from "react";
import "./Tablero.css";

export default function Tablero({ cantDibujado, cancelar, fila, arrayFilaColores, coloresAdivinar, resultRevision, revisado }) {
  //Variables para obtener la referencia de cada DIV
  let refDiv1 = useRef();
  let refDiv2 = useRef();
  let refDiv3 = useRef();
  let refDiv4 = useRef();
  let refDiv5 = useRef();
  let refDiv6 = useRef();
  let refDiv7 = useRef();
  let refDiv8 = useRef();
  let refDiv9 = useRef();
  let refDiv10 = useRef();
  let refDiv11 = useRef();
  let refDiv12 = useRef();
  let refDiv13 = useRef();
  let refDiv14 = useRef();
  let refDiv15 = useRef();
  let refDiv16 = useRef();
  let refDiv17 = useRef();
  let refDiv18 = useRef();
  let refDiv19 = useRef();
  let refDiv20 = useRef();
  let refDiv21 = useRef();
  let refDiv22 = useRef();
  let refDiv23 = useRef();
  let refDiv24 = useRef();
  let refDiv25 = useRef();
  let refDiv26 = useRef();
  let refDiv27 = useRef();
  let refDiv28 = useRef();
  let refDiv29 = useRef();
  let refDiv30 = useRef();
  let refDiv31 = useRef();
  let refDiv32 = useRef();
  let refDiv33 = useRef();
  let refDiv34 = useRef();
  let refDiv35 = useRef();
  let refDiv36 = useRef();
  let refDiv37 = useRef();
  let refDiv38 = useRef();
  let refDiv39 = useRef();
  let refDiv40 = useRef();
  let refDiv41 = useRef();
  let refDiv42 = useRef();
  let refDiv43 = useRef();
  let refDiv44 = useRef();
  let refDiv45 = useRef();
  let refDivCA1 = useRef();
  let refDivCA2 = useRef();
  let refDivCA3 = useRef();
  let refDivCA4 = useRef();
  let refDivCA5 = useRef();
  let refP1 = useRef();
  let refP2 = useRef();
  let refP3 = useRef();
  let refP4 = useRef();
  let refP5 = useRef();
  let refP6 = useRef();
  let refP7 = useRef();
  let refP8 = useRef();
  let refP9 = useRef();

  //Para mostrar el resultado de la revision en la fila que corresponda
  if (revisado) {
    if (resultRevision === "Ganador" || resultRevision === "Perdedor") {
      refDivCA5.current.className = "carta1 " + coloresAdivinar[0].toLowerCase();
      refDivCA5.current.textContent = "R";
      refDivCA4.current.className = "carta1 " + coloresAdivinar[1].toLowerCase();
      refDivCA4.current.textContent = "A";
      refDivCA3.current.className = "carta1 " + coloresAdivinar[2].toLowerCase();
      refDivCA3.current.textContent = "N";
      refDivCA2.current.className = "carta1 " + coloresAdivinar[3].toLowerCase();
      refDivCA2.current.textContent = "A";
      refDivCA1.current.className = "carta1 " + coloresAdivinar[4].toLowerCase();
      refDivCA1.current.textContent = "G";
    }
    if (fila === 1) {
      refP1.current.textContent = resultRevision;
    } else if (fila === 2) {
      refP2.current.textContent = resultRevision;
    } else if (fila === 3) {
      refP3.current.textContent = resultRevision;
    } else if (fila === 4) {
      refP4.current.textContent = resultRevision;
    } else if (fila === 5) {
      refP5.current.textContent = resultRevision;
    } else if (fila === 6) {
      refP6.current.textContent = resultRevision;
    } else if (fila === 7) {
      refP7.current.textContent = resultRevision;
    } else if (fila === 8) {
      refP8.current.textContent = resultRevision;
    } else if (fila === 9) {
      refP9.current.textContent = resultRevision;
    }

    //refDivCA1.current.className = "carta " + coloresAdivinar[0].toLowerCase();
    // refDivCA2.current.className = "carta " + coloresAdivinar[1].toLowerCase();
    //refDivCA3.current.className = "carta " + coloresAdivinar[2].toLowerCase();
    //refDivCA4.current.className = "carta " + coloresAdivinar[3].toLowerCase();
    //refDivCA5.current.className = "carta " + coloresAdivinar[4].toLowerCase();

  }

  //Para pintar o despintar una casilla

  if (arrayFilaColores.length !== 1) {

    if (cantDibujado === 0) {
      //Borrar el div del color que corresponda cuando se cancela
      refDiv1.current.className = "carta ";

    } else if (cantDibujado === 1) {

      if (cancelar) {

        refDiv2.current.className = "carta ";
      } else {

        //Pintar el div del color que corresponda 
        refDiv1.current.className = "carta " + arrayFilaColores[1].toLowerCase();
      }


    } else if (cantDibujado === 2) {
      if (cancelar) {

        refDiv3.current.className = "carta ";
      } else {

        refDiv2.current.className = "carta " + arrayFilaColores[2].toLowerCase();
      }
    } else if (cantDibujado === 3) {
      if (cancelar) {

        refDiv4.current.className = "carta ";
      } else {

        refDiv3.current.className = "carta " + arrayFilaColores[3].toLowerCase();
      }


    } else if (cantDibujado === 4) {
      if (cancelar) {
        refDiv5.current.textContent = "V";
        refDiv5.current.className = "carta ";
      } else {

        refDiv4.current.className = "carta " + arrayFilaColores[4].toLowerCase();
      }


    } else if (cantDibujado === 5) {
      if (!cancelar) {

        refDiv5.current.className = "carta " + arrayFilaColores[5].toLowerCase();
      } else {

        refDiv6.current.className = "carta ";
      }
    } else if (cantDibujado === 6) {

      if (cancelar) {

        refDiv7.current.className = "carta ";
      } else {

        refDiv6.current.className = "carta " + arrayFilaColores[1].toLowerCase();
      }


    } else if (cantDibujado === 7) {
      if (cancelar) {

        refDiv8.current.className = "carta ";
      } else {

        refDiv7.current.className = "carta " + arrayFilaColores[2].toLowerCase();
      }
    } else if (cantDibujado === 8) {
      if (cancelar) {
        refDiv9.current.textContent = "I";
        refDiv9.current.className = "carta ";
      } else {

        refDiv8.current.className = "carta " + arrayFilaColores[3].toLowerCase();
      }


    } else if (cantDibujado === 9) {
      if (cancelar) {

        refDiv10.current.className = "carta ";
      } else {

        refDiv9.current.className = "carta " + arrayFilaColores[4].toLowerCase();
      }


    } else if (cantDibujado === 10) {
      if (cancelar) {

        refDiv11.current.className = "carta ";
      } else {

        refDiv10.current.className = "carta " + arrayFilaColores[5].toLowerCase();
      }

    } else if (cantDibujado === 11) {

      if (cancelar) {

        refDiv12.current.className = "carta ";
      } else {

        refDiv11.current.className = "carta " + arrayFilaColores[1].toLowerCase();
      }


    } else if (cantDibujado === 12) {
      if (cancelar) {
        refDiv13.current.textContent = "D";
        refDiv13.current.className = "carta ";
      } else {

        refDiv12.current.className = "carta " + arrayFilaColores[2].toLowerCase();
      }
    } else if (cantDibujado === 13) {
      if (cancelar) {

        refDiv14.current.className = "carta ";
      } else {

        refDiv13.current.className = "carta " + arrayFilaColores[3].toLowerCase();
      }


    } else if (cantDibujado === 14) {
      if (cancelar) {

        refDiv15.current.className = "carta ";
      } else {

        refDiv14.current.className = "carta " + arrayFilaColores[4].toLowerCase();
      }


    } else if (cantDibujado === 15) {
      if (cancelar) {

        refDiv16.current.className = "carta ";
      } else {

        refDiv15.current.className = "carta " + arrayFilaColores[5].toLowerCase();
      }

    } else if (cantDibujado === 16) {
      if (cancelar) {

        refDiv17.current.className = "carta ";
      } else {

        refDiv16.current.className = "carta " + arrayFilaColores[1].toLowerCase();
      }

    } else if (cantDibujado === 17) {

      if (cancelar) {
        refDiv18.current.textContent = "A ";
        refDiv18.current.className = "carta ";
      } else {

        refDiv17.current.className = "carta " + arrayFilaColores[2].toLowerCase();
      }


    } else if (cantDibujado === 18) {
      if (cancelar) {

        refDiv19.current.className = "carta ";
      } else {

        refDiv18.current.className = "carta " + arrayFilaColores[3].toLowerCase();
      }
    } else if (cantDibujado === 19) {
      if (cancelar) {

        refDiv20.current.className = "carta ";
      } else {

        refDiv19.current.className = "carta " + arrayFilaColores[4].toLowerCase();
      }


    } else if (cantDibujado === 20) {
      if (cancelar) {
        refDiv21.current.textContent = "S";
        refDiv21.current.className = "carta ";
      } else {

        refDiv20.current.className = "carta " + arrayFilaColores[5].toLowerCase();
      }


    } else if (cantDibujado === 21) {
      if (cancelar) {

        refDiv22.current.className = "carta ";
      } else {

        refDiv21.current.className = "carta " + arrayFilaColores[1].toLowerCase();
      }



    } else if (cantDibujado === 22) {
      if (cancelar) {

        refDiv23.current.className = "carta ";
      } else {

        refDiv22.current.className = "carta " + arrayFilaColores[2].toLowerCase();
      }

    } else if (cantDibujado === 23) {

      if (cancelar) {

        refDiv24.current.className = "carta ";
      } else {

        refDiv23.current.className = "carta " + arrayFilaColores[3].toLowerCase();
      }


    } else if (cantDibujado === 24) {
      if (cancelar) {

        refDiv25.current.className = "carta ";
      } else {

        refDiv24.current.className = "carta " + arrayFilaColores[4].toLowerCase();
      }
    } else if (cantDibujado === 25) {
      if (cancelar) {

        refDiv26.current.className = "carta ";
      } else {

        refDiv25.current.className = "carta " + arrayFilaColores[5].toLowerCase();
      }


    } else if (cantDibujado === 26) {
      if (cancelar) {
        refDiv27.current.textContent = "N";
        refDiv27.current.className = "carta ";
      } else {

        refDiv26.current.className = "carta " + arrayFilaColores[1].toLowerCase();
      }


    } else if (cantDibujado === 27) {
      if (cancelar) {

        refDiv28.current.className = "carta ";
      } else {

        refDiv27.current.className = "carta " + arrayFilaColores[2].toLowerCase();
      }



    } else if (cantDibujado === 28) {
      if (cancelar) {

        refDiv29.current.className = "carta ";
      } else {

        refDiv28.current.className = "carta " + arrayFilaColores[3].toLowerCase();
      }

    } else if (cantDibujado === 29) {

      if (cancelar) {

        refDiv30.current.className = "carta ";
      } else {

        refDiv29.current.className = "carta " + arrayFilaColores[4].toLowerCase();
      }


    } else if (cantDibujado === 30) {
      if (cancelar) {

        refDiv31.current.className = "carta ";
      } else {

        refDiv30.current.className = "carta " + arrayFilaColores[5].toLowerCase();
      }
    } else if (cantDibujado === 31) {
      if (cancelar) {

        refDiv32.current.className = "carta ";
      } else {

        refDiv31.current.className = "carta " + arrayFilaColores[1].toLowerCase();
      }


    } else if (cantDibujado === 32) {
      if (cancelar) {
        refDiv33.current.textContent = "E";
        refDiv33.current.className = "carta ";
      } else {

        refDiv32.current.className = "carta " + arrayFilaColores[2].toLowerCase();
      }


    } else if (cantDibujado === 33) {
      if (cancelar) {

        refDiv34.current.className = "carta ";
      } else {

        refDiv33.current.className = "carta " + arrayFilaColores[3].toLowerCase();
      }



    } else if (cantDibujado === 34) {
      if (cancelar) {

        refDiv35.current.className = "carta ";
      } else {

        refDiv34.current.className = "carta " + arrayFilaColores[4].toLowerCase();
      }

    } else if (cantDibujado === 35) {

      if (cancelar) {

        refDiv36.current.className = "carta ";
      } else {

        refDiv35.current.className = "carta " + arrayFilaColores[5].toLowerCase();
      }


    } else if (cantDibujado === 36) {
      if (cancelar) {

        refDiv37.current.className = "carta ";
      } else {

        refDiv36.current.className = "carta " + arrayFilaColores[1].toLowerCase();
      }
    } else if (cantDibujado === 37) {
      if (cancelar) {

        refDiv38.current.className = "carta ";
      } else {

        refDiv37.current.className = "carta " + arrayFilaColores[2].toLowerCase();
      }


    } else if (cantDibujado === 38) {
      if (cancelar) {

        refDiv39.current.className = "carta ";
      } else {

        refDiv38.current.className = "carta " + arrayFilaColores[3].toLowerCase();
      }


    } else if (cantDibujado === 39) {
      if (cancelar) {

        refDiv40.current.className = "carta ";
      } else {

        refDiv39.current.className = "carta " + arrayFilaColores[4].toLowerCase();
      }



    } else if (cantDibujado === 40) {
      if (cancelar) {

        refDiv41.current.className = "carta ";
      } else {

        refDiv40.current.className = "carta " + arrayFilaColores[5].toLowerCase();
      }

    } else if (cantDibujado === 41) {

      if (cancelar) {

        refDiv42.current.className = "carta ";
      } else {

        refDiv41.current.className = "carta " + arrayFilaColores[1].toLowerCase();
      }


    } else if (cantDibujado === 42) {
      if (cancelar) {
        refDiv43.current.textContent = "D";
        refDiv43.current.className = "carta ";
      } else {

        refDiv42.current.className = "carta " + arrayFilaColores[2].toLowerCase();
      }
    } else if (cantDibujado === 43) {
      if (cancelar) {

        refDiv44.current.className = "carta ";
      } else {

        refDiv43.current.className = "carta " + arrayFilaColores[3].toLowerCase();
      }


    } else if (cantDibujado === 44) {
      if (cancelar) {
        refDiv45.current.textContent = "P";
        refDiv45.current.className = "carta ";
      } else {

        refDiv44.current.className = "carta " + arrayFilaColores[4].toLowerCase();
      }


    } else if (cantDibujado === 45) {
      if (cancelar) {
        // refDiv16.current.textContent = "";
        //refDiv16.current.className = "carta ";
      } else {

        refDiv45.current.className = "carta " + arrayFilaColores[5].toLowerCase();
      }



    }
  } //Para Limpiar la fila
  else if (fila && !cancelar) {

    if (fila === 1) {

      refDiv1.current.className = "carta ";
      refDiv2.current.className = "carta ";
      refDiv3.current.className = "carta ";
      refDiv4.current.className = "carta ";
      refDiv5.current.textContent = "V";
      refDiv5.current.className = "carta ";
    } else if (fila === 2) {

      refDiv6.current.className = "carta ";
      refDiv7.current.className = "carta ";
      refDiv8.current.className = "carta ";
      refDiv9.current.textContent = "I ";
      refDiv9.current.className = "carta ";
      refDiv10.current.className = "carta ";
    } else if (fila === 3) {

      refDiv11.current.className = "carta ";
      refDiv12.current.className = "carta ";
      refDiv13.current.textContent = "D ";
      refDiv13.current.className = "carta ";
      refDiv14.current.className = "carta ";
      refDiv15.current.className = "carta ";
    } else if (fila === 4) {

      refDiv16.current.className = "carta ";
      refDiv17.current.textContent = "A ";
      refDiv17.current.className = "carta ";
      refDiv18.current.className = "carta ";
      refDiv19.current.className = "carta ";
      refDiv20.current.className = "carta ";
    } else if (fila === 5) {
      refDiv21.current.textContent = " S";
      refDiv21.current.className = "carta ";
      refDiv22.current.className = "carta ";
      refDiv23.current.className = "carta ";
      refDiv24.current.className = "carta ";
      refDiv25.current.className = "carta ";
    } else if (fila === 6) {

      refDiv26.current.className = "carta ";
      refDiv27.current.textContent = "N ";
      refDiv27.current.className = "carta ";
      refDiv28.current.className = "carta ";
      refDiv29.current.className = "carta ";
      refDiv30.current.className = "carta ";
    } else if (fila === 7) {

      refDiv31.current.className = "carta ";
      refDiv32.current.className = "carta ";
      refDiv33.current.textContent = "E ";
      refDiv33.current.className = "carta ";
      refDiv34.current.className = "carta ";
      refDiv35.current.className = "carta ";
    } else if (fila === 8) {

      refDiv36.current.className = "carta ";
      refDiv37.current.className = "carta ";
      refDiv38.current.className = "carta ";
      refDiv39.current.textContent = " I";
      refDiv39.current.className = "carta ";
      refDiv40.current.className = "carta ";
    } else if (fila === 9) {

      refDiv41.current.className = "carta ";
      refDiv42.current.className = "carta ";
      refDiv43.current.className = "carta ";
      refDiv44.current.className = "carta ";
      refDiv45.current.textContent = "P";
      refDiv45.current.className = "carta ";
    }
  } //Para cuando se Cancela, que es ir borrando 1 a 1
  else if (cancelar) {
    if (fila === 1) {

      refDiv1.current.className = "carta ";
    } else if (fila === 2) {

      refDiv6.current.className = "carta ";
    }
    else if (fila === 3) {

      refDiv11.current.className = "carta ";
    }
    else if (fila === 4) {

      refDiv16.current.className = "carta ";
    } else if (fila === 5) {
      refDiv21.current.textContent = " V";
      refDiv21.current.className = "carta ";
    } else if (fila === 6) {

      refDiv26.current.className = "carta ";
    } else if (fila === 7) {

      refDiv31.current.className = "carta ";
    } else if (fila === 8) {

      refDiv36.current.className = "carta ";
    } else if (fila === 9) {

      refDiv41.current.className = "carta ";
    }

  }



  return (

    <>
      <p className='p'  ></p>
      <div ref={refDivCA1} className="carta1">?</div>
      <div ref={refDivCA2} className="carta1">? </div>
      <div ref={refDivCA3} className="carta1">?</div>
      <div ref={refDivCA4} className="carta1">? </div>
      <div ref={refDivCA5} className="carta1">? </div>
      <p className='p' ref={refP9}></p>
      <div ref={refDiv45} className="carta ">P</div>
      <div ref={refDiv44} className="carta "></div>
      <div ref={refDiv43} className="carta "></div>
      <div ref={refDiv42} className="carta "></div>
      <div ref={refDiv41} className="carta "></div>
      <p className='p' ref={refP8}></p>
      <div ref={refDiv40} className="carta "></div>
      <div ref={refDiv39} className="carta ">I</div>
      <div ref={refDiv38} className="carta "></div>
      <div ref={refDiv37} className="carta "></div>
      <div ref={refDiv36} className="carta "></div>
      <p className='p' ref={refP7}></p>
      <div ref={refDiv35} className="carta "></div>
      <div ref={refDiv34} className="carta "></div>
      <div ref={refDiv33} className="carta ">E</div>
      <div ref={refDiv32} className="carta "></div>
      <div ref={refDiv31} className="carta "></div>
      <p className='p' ref={refP6}></p>
      <div ref={refDiv30} className="carta "></div>
      <div ref={refDiv29} className="carta "></div>
      <div ref={refDiv28} className="carta "></div>
      <div ref={refDiv27} className="carta ">N</div>
      <div ref={refDiv26} className="carta "></div>
      <p className='p' ref={refP5}></p>
      <div ref={refDiv25} className="carta "></div>
      <div ref={refDiv24} className="carta "></div>
      <div ref={refDiv23} className="carta "></div>
      <div ref={refDiv22} className="carta "></div>
      <div ref={refDiv21} className="carta ">S</div>
      <p className='p' ref={refP4}></p>
      <div ref={refDiv20} className="carta "></div>
      <div ref={refDiv19} className="carta "></div>
      <div ref={refDiv18} className="carta "></div>
      <div ref={refDiv17} className="carta ">A</div>
      <div ref={refDiv16} className="carta "></div>
      <p className='p' ref={refP3}></p>
      <div ref={refDiv15} className="carta "></div>
      <div ref={refDiv14} className="carta "></div>
      <div ref={refDiv13} className="carta ">D</div>
      <div ref={refDiv12} className="carta "></div>
      <div ref={refDiv11} className="carta "></div>
      <p className='p' ref={refP2}></p>
      <div ref={refDiv10} className="carta "></div>
      <div ref={refDiv9} className="carta ">I</div>
      <div ref={refDiv8} className="carta "></div>
      <div ref={refDiv7} className="carta "></div>
      <div ref={refDiv6} className="carta "></div>
      <p className='p' ref={refP1}></p>
      <div ref={refDiv5} className="carta ">V</div>
      <div ref={refDiv4} className="carta "></div>
      <div ref={refDiv3} className="carta "></div>
      <div ref={refDiv2} className="carta "></div>
      <div ref={refDiv1} className="carta "></div>
    </>

  );
}
