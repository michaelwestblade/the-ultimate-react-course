export const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);

    // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
    // else alert("Sorry we're closed");

    // if (!isOpen) return <p>CLOSED</p>;

    return (
        <footer className="footer">
            {isOpen && <p>We're currently open!</p>}
        </footer>
    );
}