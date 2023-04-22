function NavSwitchTheme({ setTheme }) {
    return (
        <>
            <input id="sys-theme" className="ipt-switch-theme" type="checkbox" onChange={(e) => !e.target.checked ? setTheme(true) : setTheme(false)} />
            <label htmlFor="sys-theme" className="lbl-switch-theme"> <span /> </label>
        </>
    );
}

export default NavSwitchTheme;