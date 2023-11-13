import { useEffect, useState } from 'react';
import { CardPost } from '../../components/CardPost';
import { PostCategory } from '../../components/PostCategory';
import { IPost } from '../../interfaces';
import './home.style.css';
import http from '../../http';


export const HomePage = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        http.get('posts?order=DESC&perPage=4&field=id&sort=id')
            .then(response => {
                setPosts(response.data)
                console.log(response.data)
            }).catch(error => {
                console.log(error?.response?.data)
            })
    },[])


    return (
        <main className="home-container">
            <h1>Ultimas Postagens</h1>
            <div className="posts-container">
                {posts && posts.map((post, index) => (
                    <>
                    <CardPost 
                    key={index}
                    title={post.title} 
                    id={post.id} 
                    category={post?.category === "redPill" ? "Red Pill" : post.category === "fashionMen" ? "Moda Masculina" : "Desenvolvimento Pessoal"}
                    image={post.image}
                    />
                    </>
                ))}
            </div>
            <h1>Categorias</h1>
            <div className="posts-category">
                <PostCategory image='/src/assets/fashion.jpg' title='Moda Masculina' />
                <PostCategory image='/src/assets/development.jpg' title='Desenvolvimento Pessoal' />
                <PostCategory image='/src/assets/redpill.jpg' title='Red Pill'/>
            </div>
        </main>
    )
}