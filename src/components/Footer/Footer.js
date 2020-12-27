export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="pt2">
            <p className="f6 center black pa3">&copy; {year} Zilhamdev.</p>
        </footer>
    );
}
