import free from '../assets/img/free.png';

import { Link } from 'react-router-dom';

const ButtonAction = () => {

    return (
        <Link to="/registro" id="button-action" className="text-white text-lg md:text-2xl bg-red-600 p-6 w-96 flex justify-center gap-3 rounded cursor-pointer"> 
            <img src={free} alt="passaro origami" width={38} />
            Faça ja o seu cadastro!
        </Link>
    )
}

export default ButtonAction;