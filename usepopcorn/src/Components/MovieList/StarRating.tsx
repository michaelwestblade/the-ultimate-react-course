import Star from "./Star";
import {useState} from "react";

export interface StarRatingProps {
    maxStars?: number;
    color?: string;
    size?: number;
    onSetRating: (value: number) => void;
}

const containerStyle = {display: 'flex', alignItems: 'center', gap: '16px'};
const starContainerStyle = {display: 'flex', alignItems: 'center'};

export default function StarRating({maxStars = 10, color = '#fcc419', size = 24, onSetRating}: StarRatingProps) {
    const [rating, setRating] = useState(0);
    const [tempRating, setTempRating] = useState(0);
    const textStyle = {
        lineHeight: "1",
        margin: "0",
        color,
        fontSize: `${size / 1.5}px`,
    };

    const handleRating = (rating: number) => {
        setRating(rating);
        onSetRating(rating);
    }

    const handleSetTempRating = (rating: number) => {
        setTempRating(rating);
    }

    return <div style={containerStyle}>
        <div style={starContainerStyle}>
            {Array.from({length: maxStars}, (_, index) => <Star size={size} color={color} full={tempRating ? tempRating >= index + 1 : index+1 <= rating} key={index} onHoverIn={() => handleSetTempRating(index + 1)} onHoverOut={() => handleSetTempRating(0)} onClick={() => handleRating(index + 1)} />)}
        </div>
        <p style={textStyle}>{tempRating || rating || ""}</p>
    </div>
}