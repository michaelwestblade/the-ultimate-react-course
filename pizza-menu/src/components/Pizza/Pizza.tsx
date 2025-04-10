export interface PizzaProps {
    name: string;
    image: string;
    imageAlt: string;
    ingredients: string;
    price: number;
}

export const Pizza = ({name, image, imageAlt, ingredients, price}: PizzaProps) => {
    return <div className="pizza">
        <img src={image} alt={imageAlt}/>
       <div>
           <h3>{name}</h3>
           <p>{ingredients}</p>
           <span>{price}</span>
       </div>
    </div>
}