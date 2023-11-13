import { useEffect, useState } from 'react';
import { CardPost } from '../../components/CardPost';
import './postPage.style.css';
import { IPost } from '../../interfaces';
import { useParams } from 'react-router-dom';
import http from '../../http';



export const PostPage = () => {
    const [post, setPost] = useState<IPost | null>(null)
    const [postRealeses, setPostRealeses] = useState<IPost[]>([])
    const { id } = useParams()

    useEffect(() => {
        http.get(`posts/${id}`)
            .then(response => {
                setPost(response.data)
            }).catch(error => {
                console.log(error.response.data)
            }) 
    },[id])


    useEffect(() => {
        http.get(`posts?order=DESC&perPage=3?sort=id&field=id`)
            .then(response => {
                setPostRealeses(response.data)
            }).catch(error => {
                console.error(error.response.data)
            })
    },[])


    if(!post){
        return (
            <div className='loading-page'>
                <p>Carregando...</p>
            </div>
        )
    }

    function handleHtml(htmlString: string){
        return{__html:htmlString}
    }


    return (
        <section className="post-page-container">
            <div className='post-container'>
                <h5>{post?.category === "redPill" ? "Red Pill" : post?.category === "fashionMen" ? "Moda Masculina" : "Desenvolvimento Pessoal"}</h5>
                <h1>{post?.title}</h1>
                <h3>Publicado por {post.user_post?.name}</h3>
                <img src={post?.image}/>
                <div className='content-post-container' dangerouslySetInnerHTML={handleHtml(post?.content)}/>
                <div className="info-author-container">
                    <h6>por {post?.user_post?.name}</h6>
                    <p>Publicado em: {post?.createdAt}</p>
                </div>
            </div>
            <div className="realeses-container">
                {postRealeses && postRealeses.map(post => (
                    <CardPost
                    id={post.id}
                    key={post.id}
                    title={post.title}
                    category={post?.category === "redPill" ? "Red Pill" : post.category === "fashionMen" ? "Moda Masculina" : "Desenvolvimento Pessoal"}
                    image={post.image}
                />
                ))}
            </div>
        </section>
    )
}