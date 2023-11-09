import { Link } from "react-router-dom";
import { IPost } from "../../interfaces";
import './post-category.style.css';


export const PostCategory = ({image, title} : IPost) => {
    return (
        <Link to={`/postagens/categorias/${title.toLowerCase().split(" ").join("")}`}>
        <main className="post-category-container">
            <img src={image}/>
            <h2>{title}</h2>
        </main>
        </Link>
    )
}