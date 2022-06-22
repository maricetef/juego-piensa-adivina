import "./Modal.css";


export default function Modal({ children, isOpen = false, closeModal }) {


    return (
        <article className={`modal ${isOpen && "is-open"}`}>
            <div className='modal-container'>
                <button className='modal-close' onClick={(evt) => closeModal()}>X</button>
                {children}

            </div>
        </article>
    );
}