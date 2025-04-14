export interface NavBarProps {
    children?: React.ReactNode;
}

export default function NavBar({children}: NavBarProps) {
    return <nav className="nav-bar">
        {children}
    </nav>
}