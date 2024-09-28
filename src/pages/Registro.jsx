import logo from '../assets/img/logo.png'
import { FaArrowRight } from "react-icons/fa6";

const Registro = () => {

    return (
        <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 p-2 w-[874px]">
                <img src={logo} alt="logo do joinfreela" className='w-32'/>
                <p className='text-white text-center text-2xl'>Você está fazendo um ótima escolha ao realizar o seu cadastro em nossa plataforma! 😍</p>
            </div>
            <div className='flex p-2 w-[874px] mt-'>
                <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
                    <li className="flex md:w-full items-center text-red-500 dark:text-red-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                        <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            Tipo registro
                        </span>
                    </li>
                </ol>
            </div>
            <div className='bg-white p-4 rounded-3xl'>
                <h5 className='text-red-500 text-2xl font-bold'>Tipo de cadastro</h5>
                <form action="" className='mt-8'>
                    <div className='flex flex-col'>
                        <label htmlFor="tipocadastro" className='text-xl font-normal'>Para dar início  ao regístro, preciso saber se deseja cadastrar uma empresa ou freelancer?</label>
                        <select name="tipocadastro" id="tipocadastro" className='mt-4 border-b border-b-gray-400 outline-none'>
                            <option value="1">Freelacer</option>
                            <option value="2">Empresa</option>
                        </select>
                    </div>
                    <div className='flex justify-end mt-8'>
                        <button className='flex gap-2 items-center bg-red-500 py-2 px-4 text-white rounded hover:bg-red-700 hover:shadow-md hover:shadow-red-400'> 
                            <FaArrowRight />
                            Próximo
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Registro;