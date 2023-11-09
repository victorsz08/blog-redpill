import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "../components/Header"
import { HomePage } from "../pages/home"
import { DevelopmentPage } from "../pages/developmentPage/developmentPage"
import { FashionPage } from "../pages/fashionPage"
import { RedPillPage } from "../pages/redPillPage"



export const RoutesApp = () => {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/postagens/categorias/desenvolvimentopessoal" element={<DevelopmentPage/>}/>
                <Route path="/postagens/categorias/modamasculina" element={<FashionPage/>}/>
                <Route path="/postagens/categorias/redpill" element={<RedPillPage/>}/>
            </Routes>  
        </BrowserRouter>

    )
}