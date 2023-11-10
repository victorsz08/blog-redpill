import { useEffect, useState } from "react";
import { CardPost } from "../../components/CardPost"
import './development.style.css';
import { TiArrowForward, TiArrowBack } from "react-icons/ti";
import { IPost } from "../../interfaces";
import http from "../../http";



export const DevelopmentPage = () => {
    const [page, setPages] = useState(1)
    const perPage = 10
    const [posts, setPosts] = useState<IPost[]>([])
    const totalPosts = posts.length
    const totalPages = totalPosts  / perPage
    
    useEffect(() => {
        http.get(`posts?perPage=${perPage}&page=${page}&order=DESC&sort=category&field=category&filter=development`)
            .then(response => {
                setPosts(response.data)
                console.log(response.data)
            }).catch(error => {
                console.log(error.response.data)
            })
    },[])

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
                {posts && posts.map(post => (
                    <CardPost image={post.image} title={post.title} id={post.id} category={"Desenvolvimento Pessoal"}/>
                ))}
            </div>
            <div className="btn-controllers">
                <button id={page === 1 ? "btn-back" : " "}  disabled={page === 1 ? true : false} onClick={handleClickBack} ><TiArrowBack/></button>
                <strong>Page:</strong>
                <p>{page}</p>
                <strong>de:</strong>
                <p>{Math.round(totalPages) < 1 ? 1 : Math.round(totalPages)}</p>
                <button id={page >= totalPages ? "btn-next" : " "} onClick={handleClickNext}><TiArrowForward/></button>
            </div>
        </section>
    )
}