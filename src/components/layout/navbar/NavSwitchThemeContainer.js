import NavSwitchTheme from './NavSwitchTheme';

function NavSwitchThemeContainer({ setTheme }) {
    return (
        <div className="container-switch-theme">
            <NavSwitchTheme setTheme={setTheme}/>
        </div>
    );
}

export default NavSwitchThemeContainer;