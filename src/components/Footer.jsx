import logoblack from '../assets/img/Logo-preta.png';

const Footer = () => {
    return (
        <footer className="flex flex-col justify-around items-center h-48 bg-red-600 w-full">
            <img src={logoblack} alt="passarinho de origami" width={95}/>
            <span className='text-white text-base md:text-2xl text-center'>2024 - Copyrigth - Todos os direitos reservados ao joinfreela</span>
        </footer>
    )
}

export default Footer;