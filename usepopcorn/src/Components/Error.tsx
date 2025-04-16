export interface ErrorProps {
    error: string;
}

export default function ErrorMessage({ error }: ErrorProps) {
    return <p className="error">{error}</p>;
}