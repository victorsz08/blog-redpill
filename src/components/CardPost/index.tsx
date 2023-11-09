import { Link } from "react-router-dom";
import { IPost } from "../../interfaces"
import './card.style.css';


export const CardPost = ({id, title, image, category}: IPost) => {
    return (
        <Link to={`/postagens/categorias/${category?.toLowerCase().split(" ").join("")}/${id}`}>
        <div className="card-conteiner" >
            <img src={image}/>
            <div className="info-container">
                <h6>{category}</h6>
                <h2>{title}</h2>
                <p>Confira essa postagem...</p>
            </div>
        </div>
        </Link>
    )
}