import imghero from '../assets/img/imh-hero.png';
import video from '../assets/img/video.jpg';
import clevao from '../assets/img/clevdev.jpg'

import ButtonAction from '../components/ButtonAction';
import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';
import Footer from '../components/Footer';

const Home = () => {

    return (
        <main className='container mt-32'>
            <section className="hero">
                <div className='mt-5 md:mt-20 flex flex-col-reverse lg:flex-row gap-6 md:gap-0 justify-between px-2'>
                    <div className='flex flex-col items-center lg:items-start md:justify-around  md:mt-4'>
                        <h1 className="text-red-600 text-4xl md:text-6xl w-full lg:w-[545px] mb-6 font-black text-center lg:text-start">Experimente o <span className="text-white">Joinfreela</span>,ele é gratuito para freelancers.</h1>
                        <p className="text-white mb-6 w-full lg:w-[545px] text-lg md:text-3xl font-light text-center lg:text-start">Está em busca de profissionais qualificados para projetos rápidos ou contínuos? Ou é freelancer e quer expandir sua rede de clientes e oportunidades? Você está no lugar certo!</p>
                        <div className='flex justify-center md:justify-start'>
                            <ButtonAction /> 
                        </div>
                    </div>
                    <div className='md:flex md:justify-center lg:items-center'>
                        <img src={imghero} alt="pessoas" className='md:h-96 md:w-[540px]' />   
                    </div>
                </div>
            </section>
            <section className='cards-vantagem mt-20'>
                <SectionTitle texto='Qual a vantagem de utilizar essa plataforma?'/>
                <div className="card-fundo relative mt-96 w-full h-[335px] md:h-[674px] p-2">
                    <div className='cards flex justify-between overflow-hidden gap-5 lg:mx-72 absolute -top-72 px-2'>
                        <Card titulo='Foco local' texto='Encontrar e conectar com talentos e clientes da sua própria cidade.'/>
                        <Card titulo='Simples e eficiente' texto='Encontrar e conectar com talentos e clientes da sua própria cidade.' />
                        <Card titulo='Comunidade ativa' texto='Eventos, workshops e uma rede de freelancers engajados para trocar ideias e crescer juntos.' />
                    </div>
                </div>
            </section>
            <section className='papel mt-20'>
                <SectionTitle texto='Qual o papel do Joinfreela com a comunidade joinvillense?' />
                <div className='bg-red-600 h-[374px] w-full mt-20 md:rounded-tr-[484px] md:rounded-br-[108px]'>
                    <div className='flex flex-col justify-around lg:items-center p-2 md:mx-32 lg:mx-72 h-full'>
                        <h6 className='text-white text-center text-2xl md:text-3xl font-bold'>Para Empresas e Empreendedores</h6>
                        <p className='text-center text-base md:text-2xl lg:w-[874px] font-medium'>
                        Encontre os melhores freelancers da cidade de Joinville em uma única plataforma. Seja para desenvolvimento web, design gráfico, marketing digital, redação, fotografia ou qualquer outro serviço especializado, aqui você encontra profissionais capacitados prontos para atender suas demandas com agilidade e qualidade. Conecte-se com talentos locais que entendem as necessidades do seu negócio e da região!
                        </p>
                    </div>
                </div>
                <div className='bg-red-600 h-[374px] w-full mt-20 md:rounded-tl-[108px] md:rounded-bl-[484px]'>
                    <div className='flex flex-col justify-around lg:items-center p-2 md:mx-32 lg:mx-72 h-full'>
                        <h6 className='text-white text-center text-2xl md:text-3xl font-bold'>Para Freelancers</h6>
                        <p className='text-center text-base md:text-2xl lg:w-[874px] font-medium'>
                        Oferecemos um espaço para você, freelancer de Joinville, conectar-se com empresas e clientes locais. Expanda seu portfólio, feche novos negócios e faça parte de uma comunidade colaborativa que valoriza o trabalho independente. Cadastre-se, mostre suas habilidades e comece a trabalhar em projetos que fazem a diferença.
                        </p>
                    </div>
                </div>
            </section>
            <section id="video" className='mt-20'>
                <SectionTitle texto='Assista o vídeo abaixo e conheça um pouco mais do nosso sistema.' />  
                <div className='w-full mt-20'>
                    <div className='flex flex-col justify-center items-center p-2'>
                        <img src={video} alt="play de video" width={874}/>
                        <figcaption className='text-white '>  
                            Imagem de <a href="URL-do-dono" target="_blank">starline</a> em freepick.com  
                        </figcaption>  
                    </div>
                </div>
            </section>
            <section id="qtd-users" className='mt-20'>
                <div className='flex justify-center w-full'>
                    <div className='flex flex-col md:flex-row justify-between gap-2 w-[874px] text-white px-2'>
                        <div className='flex flex-col'>
                            <span className='text-5xl font-bold text-center'>Freelancers</span>
                            <span className='text-5xl font-bold text-center'>cadastrados</span>
                            <span className='text-8xl font-bold text-center'>+ 1K</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-5xl font-bold text-center'>Empresas</span>
                            <span className='text-5xl font-bold text-center'>cadastradas</span>
                            <span className='text-8xl font-bold text-center'>+ 300</span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mt-20 px-2'>
                    <ButtonAction />
                </div>
            </section>
            <section id="resposavel" className='mt-20'>
                <div className='bg-white w-full py-8'>
                    <div className='flex flex-col md:flex-row gap-2 lg:mx-72 px-2'>
                        <div className='flex flex-col justify-between gap-6 lg:w-[865px] md:p-0'>
                           <h6 className='text-3xl lg:text-5xl font-normal'>Quem é o responsável?</h6> 
                           <span className='text-5xl font-black text-red-600'>Cleversson hames</span>
                           <div className='flex flex-col gap-3'>
                                <p className='text-2xl'>Meu nome é Cleversson Hames, <strong className='text-red-500'>sou analista de sistemas</strong> em uma empresa de saúde e responsável por esse projeto. :D</p>
                                <p className='text-2xl'>Trabalho na área de tecnologia da informação a mais de 10 anos e agora estou migrando para setor de desenvolvimento de produtos web.</p>
                                <p className='text-2xl'>Esse é meu primeiro projeto, e o intuito é <strong className='text-red-500'>ajudar a comunidade local a conectar rapidamente empresa e profissionais</strong> conforme as necessidades.</p>
                                <p className='text-2xl'>Não perca tempo, venha fazer parte dessa comunidade!</p>
                           </div>
                           <div className='flex justify-center md:justify-start'>
                                <ButtonAction /> 
                           </div>
                        </div>
                        <img src={clevao} alt="imagem do autor do site lindoo" width={364} className='hidden md:block' />
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
};
export default Home;