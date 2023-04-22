import NavSocialContainer from './NavSocialContainer';
import NavSwitchThemeContainer from './NavSwitchThemeContainer';

import '../../../styles/components/layout/navbar.scss'

function Navbar({ setTheme }) {
    return (
        <div className="container-navbar">
            <NavSocialContainer />
            <NavSwitchThemeContainer setTheme={setTheme} />
        </div>
    );
}

export default Navbar;