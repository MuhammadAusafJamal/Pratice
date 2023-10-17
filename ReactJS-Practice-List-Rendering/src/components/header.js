import logo from '../logo.svg';

function Header() {
    return (
        <header>
            <h1 className="main-header"><img src={logo} className="App-logo" alt="logo" />
                Basic React Page <img src={logo} className="App-logo" alt="logo" />
                </h1>
        </header>
    )

}

export default Header;
