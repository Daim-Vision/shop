import Items from "./components/cards/Card";
import Products from "./components/cards/Products";
import './App.css';
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";




const App = () => {
    return (
        <>
        <Header/>
        <div className="main__div">
        <div className="menu"> <Menu/></div>
        <Products/>
        </div>
        </>
    )
};


export default App;