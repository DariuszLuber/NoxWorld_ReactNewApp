const logo = require('../assets/logo.jpg');


function Header() {
    return (
        <>
            <header className="navbar bg-black">
                <div className="container">
                <div className="logo ml-4">
                    <img src={logo} alt="logo"/>
                </div>
                    <ul className="nav nav-pills">
                        <li className="nav-item bg-dark m-1"> <a className="nav-link" href="#">Home</a> </li>
                        <li className="nav-item bg-dark m-1"> <a className="nav-link" href="#">About</a> </li>
                        <li className="nav-item bg-dark m-1"> <a className="nav-link" href="#">Contact</a> </li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header;
