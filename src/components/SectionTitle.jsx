const SectionTitle = ({texto}) => {

    return (
        <div className='flex justify-center'>
            <h2 className='text-red-600 font-bold text-3xl md:text-5xl w-full md:w-[874px] text-center'>{texto}</h2>
        </div>
    )
}

export default SectionTitle;