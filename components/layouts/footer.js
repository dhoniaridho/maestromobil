export default function Footer() {
    return(
        <footer>
            <div className="flex md:justify-end">
                <p> &copy; {new Date().getFullYear()} Maestro Mobil</p>
            </div>
        </footer>
    )
}