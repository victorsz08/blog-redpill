import { CardPost } from '../../components/CardPost';
import { PostCategory } from '../../components/PostCategory';
import './home.style.css';



export const HomePage = () => {
    return (
        <main className="home-container">
            <h1>Ultimas Postagens</h1>
            <div className="posts-container">
                <CardPost image='/src/assets/image.jpg' title='Uma nova era de cães  na tela do seu computador' id='1' category="Moda Masculina"/>
                <CardPost image='/src/assets/image.jpg' title='Uma nova era de cães  na tela do seu computador' id='2' category="Desenvolvimento Pessoal"/>
                <CardPost image='/src/assets/image.jpg' title='Uma nova era de cães  na tela do seu computador' id='3' category="Red Pill"/>
            </div>
            <h1>Categorias</h1>
            <div className="posts-category">
                <PostCategory image='/src/assets/image.jpg' title='Moda Masculina' />
                <PostCategory image='/src/assets/image.jpg' title='Desenvolvimento Pessoal' />
                <PostCategory image='/src/assets/image.jpg' title='Red Pill'/>
            </div>
        </main>
    )
}