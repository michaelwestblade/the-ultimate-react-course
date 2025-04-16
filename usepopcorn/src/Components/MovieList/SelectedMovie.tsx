export interface SelectedMovieProps {
    selectedId: string;
    onCloseMovie: () => void;
}

export function SelectedMovie({selectedId, onCloseMovie}: SelectedMovieProps) {
    return <div className="details">
        {selectedId}
        <button className="btn-back" onClick={onCloseMovie}>&larr;</button>
    </div>
}