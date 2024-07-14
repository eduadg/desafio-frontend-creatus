import githubIcon from '../img/Github.svg';
import googleIcon from '../img/Google.svg';

const LinkSocial = ({ link, nome }) => {
    const icons = {
        'Github': githubIcon,
        'Google': googleIcon
    };
    return (
        <li>
            <a href={link}>
                <img src={icons[nome]} alt={`Ícone do ${nome}`} />
                {nome}
            </a>
        </li>
    );
};
export default LinkSocial;
