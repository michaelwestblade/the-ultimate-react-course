import {Pizza} from "../Pizza/Pizza";
import {pizzaData} from "../../consts";

export interface MenuProps {}

export const Menu = () => {
    return <main className="menu">
        <h2>Our menu</h2>
        <div className="pizza-list">
            <ul className="pizzas">
                {pizzaData.map(pizza => <Pizza key={pizza.name} name={pizza.name} image={pizza.photoName} imageAlt={pizza.name} ingredients={pizza.ingredients} price={pizza.price}/>)}
            </ul>
        </div>
    </main>
}