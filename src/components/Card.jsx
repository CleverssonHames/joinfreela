import homem from '../assets/img/homem-laptop.png'

const Card = ({titulo, texto}) => {

    return (
        <div className="bg-branco-36 w-60 md:w-[280px] lg:w-[428px]  rounded-3xl">
            <div className="overflow-hidden">
                <img src={homem} alt="Homem sentado com  um laptop sobre a mesa" width={540} className='transition-all duration-500 hover:scale-125'/>
            </div>
            <div className="flex flex-col p-4">
                <h6 className="font-bold text-2x1 md:text-3xl md:mt-11">{titulo}</h6>
                <p className="font-normal text-base md:text-2xl text-white mt-11">{texto}</p>
            </div>
        </div>
    )
};

export default Card;