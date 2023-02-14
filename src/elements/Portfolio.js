import { TfiLayoutAccordionSeparated } from 'react-icons/tfi'
import listaDeCompra from '../img/lista-de-la-compra.jpg'
import pokedex from '../img/pokedex.png'
import message from '../img/message.png'

function Portfolio() {


    return (
      <section id='portfolio' className='overflow-x-hidden min-h-screen h-full flex flex-col lg:flex-row font-infra w-full bg-[#F2F2F2] '>
        <div className='lg:hover:text-[#5dba6b] w-full h-52 lg:h-screen transition-all ease-in-out lg:w-52 lg:flex lg:flex-col lg:justify-center p-14 pt-12'>
            <h1 className='text-4xl md:text-6xl tracking-tighter lg:text-8xl lg:[writing-mode:vertical-rl] lg:rotate-180 flex items-center gap-4 font-bold lg:no-underline md:underline md:underline-offset-8'><TfiLayoutAccordionSeparated className='md:invisible'/>Portfolio</h1>
            <p className='text-xl font-bold w-full text-end pt-12 font-mono'>2/3</p>
        </div>
        <div className='mx-auto'>
        <div className='p-8 grid grid-cols-1 3xl:grid-cols-4 3xl:h-screen gap-4 lg:grid-cols-2 transition-all'>
            <div className='group border-2 bg-[#F2F2F2] hover:bg-[#5dba6b] border-black rounded-lg mb-4 lg:mb-0 p-8 flex flex-col justify-between transition-all 3xl:my-auto w-full py-4 h-96 sm:w-96 sm:h-96'>
              <h3 className='font-mono font-bold group-hover:hidden'>01</h3>
              <h1 className='text-md sm:text-xl lg:text-2xl font-bold group-hover:text-3xl group-hover:text-center'>App de mensajería Full Stack<span className='group-hover:hidden'>- Cuadro de chat en la que varías personas pueden escribir a la vez. Los datos se almacenan en una base de datos no relacional.</span></h1>
              <p className='font-mono font-bold text-right group-hover:hidden'>NodeJS // Express // MongoDB</p>
              <img alt='img' className='hidden rounded-sm group-hover:block ' src={message}></img>
              <div className='font-mono font-bold justify-between px-6 hidden group-hover:inline-flex'>
                <a className='hover:underline' href='https://github.com/ioncerezo/mini-message-board' rel='noreferrer' target='_blank' >Codigo fuente</a>
                <a className='hover:underline' href='https://mini-message-app-ion.fly.dev/' rel='noreferrer' target='_blank' >Vista previa</a>
                </div>
            </div>
            <div className='group border-2 bg-[#F2F2F2] hover:bg-[#5dba6b] border-black rounded-lg mb-4 lg:mb-0 p-8 flex flex-col justify-between transition-all 3xl:my-auto w-full py-4 h-96 sm:w-96 sm:h-96'>
              <h3 className='font-mono font-bold group-hover:hidden'>02</h3>
              <h1 className='text-md sm:text-xl lg:text-2xl font-bold group-hover:text-3xl group-hover:text-center'>PokéDex<span className='group-hover:hidden'>- Página web que recibe Pokémon de una base de datos y los muestra alfabetícamente o por páginas.</span></h1>
              <p className='font-mono font-bold text-right group-hover:hidden'>React // Tailwind // API REST</p>
              <img alt='img' className='hidden rounded-sm group-hover:block ' src={pokedex}></img>
              <div className='font-mono font-bold justify-between px-6 hidden group-hover:inline-flex'>
                <a className='hover:underline' href='https://github.com/ioncerezo/pokeAPI-react' rel='noreferrer' target='_blank' >Codigo fuente</a>
                <a className='hover:underline' href='https://ion-react-pokedex.netlify.app/' rel='noreferrer' target='_blank' >Vista previa</a>
                </div>
            </div>
            <div className='group border-2 bg-[#F2F2F2] hover:bg-[#5dba6b] border-black rounded-lg mb-4 lg:mb-0 p-8 flex flex-col justify-between transition-all 3xl:my-auto w-full py-4 h-96 sm:w-96 sm:h-96'>
              <h3 className='font-mono font-bold group-hover:hidden'>03</h3>
              <h1 className='text-md sm:text-xl lg:text-2xl font-bold group-hover:text-3xl group-hover:text-center'>Lista de la compra<span className='group-hover:hidden'>- Pequeña app para hacer listas en las que puedes eliminar productos, modificar cantidad y marcar como completado.</span></h1>
              <p className='font-mono font-bold text-right group-hover:hidden'>React // Tailwind </p>
              <img alt='img' className='hidden rounded-sm group-hover:block ' src={listaDeCompra}></img>
              <div className='font-mono font-bold justify-between px-6 hidden group-hover:inline-flex'>
                <a className='hover:underline' href='https://github.com/ioncerezo/app-lista-de-la-compra' rel='noreferrer' target='_blank' >Codigo fuente</a>
                <a className='hover:underline' href='https://app-lista-de-la-compra.netlify.app/' rel='noreferrer' target='_blank' >Vista previa</a>
                </div>
            </div>
            
          
        </div>
        </div>
      </section>
    );
  }
  
  export default Portfolio