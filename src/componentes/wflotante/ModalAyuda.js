
import Modal from "./Modal";
import "./ModalAyuda.css"


const ModalAyuda = ({ isOpen, closeModal }) => {

    return (
        <div>
            <Modal isOpen={isOpen} closeModal={closeModal}>
                <h3 className='modal-h3'>Cómo funciona el juego?</h3>
                <p className='modal-p'>
                    El objetivo del juego es adivinar la secuencia de colores que se encuentra oculta, esta
                    se genera Random por cada partida.
                </p>
                <p className='modal-p'>
                    Tienes 9 oportunidades para lograr el objetivo, la secuencia es de 5 colores y tienes 7
                    para jugar en cada turno.
                </p>
                <p className='modal-p'>
                    Debe selecionar un color en la parte derecha hasta completar los cinco de la fila en la que
                    esta jugando, no se puede repetir colores por fila. Luego debe presionar el boton Revisar.
                </p>
                <p className='modal-p'>
                    Se le mostrará el resultado de la revisión en la parte izquierda, al lado de cada fila revisada.
                </p>
                <p className='modal-p'>
                    Entender el Resultado:
                </p>
                <p className='modal-p'>
                    B: Cantidad de colores que estan Bien, lo cual significa que el color existe en la secuencia de
                    colores a adivinar y además se encuentra en la posición correcta.
                </p>
                <p className='modal-p'>
                    R: Cantidad de colores Regular, lo cual significa que el color existe en la secuencia de colores
                    a adivinar, pero no se encuentra en la posición correcta.
                </p>
                <p className='modal-p'>
                    La cantidad de colores que estan Mal no se muestran en el resultado, pero serian 5 colores de la fila menos la
                    cantidad de colores que estan Bien más la cantidad de colores que estan Regular.
                </p>
                <p className='modal-p'>
                    Los botones en la parte inferior tienen la siguientes funcionalidad:
                </p>
                <p className='modal-p'>
                    NuevaP: Reinicia el juego.
                </p>
                <p className='modal-p'>
                    Limpiar: Limpia la fila en la que se encuentra, si es que no la ha Revisado.
                </p>
                <p className='modal-p'>
                    Cancelar: Cancela el ultimo color de la fila donde se encuentra, si es que no la ha Revisado.
                </p>
                <p className='modal-p'>
                    Revisar: Realiza la comprobacion de su secuencia de colores con la secuecia de colores a Adivinar.


                </p>
            </Modal>
        </div>
    );
}

export default ModalAyuda;