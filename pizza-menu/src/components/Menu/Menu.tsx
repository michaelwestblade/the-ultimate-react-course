import {Pizza} from "../Pizza/Pizza";

export interface MenuProps {}

export const Menu = () => {
    return <main className="menu">
        <h2>Our menu</h2>
        <div className="pizza-list">
            <Pizza name="Pizza Spinaci" image="pizzas/spinaci.jpg" imageAlt="Pizza Spinaci" ingredients={["Tomato","Mozarella","Spinach","Ricotta Cheese"]} price={12}></Pizza>
            <Pizza name="Pizza Spinaci" image="pizzas/spinaci.jpg" imageAlt="Pizza Spinaci" ingredients={["Tomato","Mozarella","Spinach","Ricotta Cheese"]} price={10}></Pizza>
        </div>
    </main>
}