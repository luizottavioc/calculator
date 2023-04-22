import IconNavbarSocial from './NavSocialContainerIcon';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function NavSocialContainer() {
    return (
        <div className="container-social">
            <IconNavbarSocial href='https://www.linkedin.com/in/luizottavioc/'>
                <FaLinkedin />
            </IconNavbarSocial>
            <IconNavbarSocial href='https://github.com/luizottavioc'>
                <FaGithub />
            </IconNavbarSocial>
        </div>
    );
}

export default NavSocialContainer;