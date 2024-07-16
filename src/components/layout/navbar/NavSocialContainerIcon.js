function IconNavbarSocial(props) {
    return (
        <a className="icon-social" href={props.href} target='_blank' rel="noreferrer">
            {props.children}
        </a>
    )
}

export default IconNavbarSocial;