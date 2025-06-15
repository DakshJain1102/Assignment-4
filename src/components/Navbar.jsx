//creating Navbar component
const Navbar = (props) =>{
    
    return(
        <nav className = "my-navbar">
            <ul className = "navbar">
                {props.links.map((link, name) => (
                    <li key={name}>
                        <a className="nav-link" href={link.link}>{link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar