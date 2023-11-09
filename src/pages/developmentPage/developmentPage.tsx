import { useState } from "react";
import { CardPost } from "../../components/CardPost"
import './development.style.css';
import { TiArrowForward, TiArrowBack } from "react-icons/ti";



export const DevelopmentPage = () => {
    const [page, setPages] = useState(1)
    const [perPage, setPerPage] = useState(10)
    const totalPosts = 100
    const totalPages = totalPosts / perPage

    function handleClickNext(){
        if(page <= totalPages && page > 0){
            setPages(page + 1)
        }
    }

    function handleClickBack(){
        if(page <= totalPages && page > 0){
            setPages(page - 1)
        }
    }

    return (
        <section className="development-page-container">
            <h1>Desenvolvimento Pessoal</h1>
            <div className="posts-container">
                <CardPost image='/src/assets/image.jpg' title='Uma nova era de cães  na tela do seu computador' id='1' category="Desenvolvimento Pessoal"/>
                <CardPost image='/src/assets/image.jpg' title='Uma nova era de cães  na tela do seu computador' id='2' category="Desenvolvimento Pessoal"/>
                <CardPost image='/src/assets/image.jpg' title='Uma nova era de cães  na tela do seu computador' id='3' category="Desenvolvimento Pessoal"/>
                <CardPost image='/src/assets/image.jpg' title='Uma nova era de cães  na tela do seu computador' id='3' category="Desenvolvimento Pessoal"/>
                <CardPost image='/src/assets/image.jpg' title='Uma nova era de cães  na tela do seu computador' id='3' category="Desenvolvimento Pessoal"/>
                <CardPost image='/src/assets/image.jpg' title='Uma nova era de cães  na tela do seu computador' id='3' category="Desenvolvimento Pessoal"/>
                <CardPost image='/src/assets/image.jpg' title='Uma nova era de cães  na tela do seu computador' id='3' category="Desenvolvimento Pessoal"/>
                <CardPost image='/src/assets/image.jpg' title='Uma nova era de cães  na tela do seu computador' id='3' category="Desenvolvimento Pessoal"/>
                <CardPost image='/src/assets/image.jpg' title='Uma nova era de cães  na tela do seu computador' id='3' category="Desenvolvimento Pessoal"/>
            </div>
            <div className="btn-controllers">
                <button id={page === 1 ? "btn-back" : " "}  disabled={page === 1 ? true : false} onClick={handleClickBack} ><TiArrowBack/></button>
                <strong>Page:</strong>
                <p>{page}</p>
                <strong>de:</strong>
                <p>{totalPages}</p>
                <button id={page >= totalPages ? "btn-next" : " "} onClick={handleClickNext}><TiArrowForward/></button>
            </div>
        </section>
    )
}