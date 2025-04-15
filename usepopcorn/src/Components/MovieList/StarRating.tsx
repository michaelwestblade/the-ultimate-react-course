import Star from "./Star";
import {useState} from "react";

export interface StarRatingProps {
    maxStars?: number;
}

const containerStyle = {display: 'flex', alignItems: 'center', gap: '16px'};
const starContainerStyle = {display: 'flex', alignItems: 'center'};
const textStyle = {lineHeight: '1', margin: "0"};
const maxStars = 10;

export default function StarRating({maxStars = 10}: StarRatingProps) {
    const [rating, setRating] = useState(0);

    const handleRating = (rating: number) => {
        setRating(rating);
    }

    return <div style={containerStyle}>
        <div style={starContainerStyle}>
            {Array.from({length: maxStars}, (_, index) => <Star full={index+1 <= rating} key={index} onClick={() => handleRating(index + 1)} />)}
        </div>
        <p style={textStyle}>{rating || ""}</p>
    </div>
}