export interface MainProps {
    children?: React.ReactNode;
}

export default function Main({children}: MainProps) {
    return <div className="main">
        {children}
    </div>
}