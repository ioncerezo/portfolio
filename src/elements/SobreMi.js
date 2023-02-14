
import { TfiBoltAlt } from 'react-icons/tfi'

function SobreMi() {


    return (
        <section id='SobreMi' className='overflow-x-hidden min-h-screen h-full flex flex-col lg:flex-row-reverse font-infra w-full bg-[#F2F2F2] '>
        <div className=' lg:hover:text-[#CD5C5C] w-full h-52 lg:h-screen transition-all ease-in-out lg:w-52 lg:flex lg:flex-col lg:justify-center p-14 pt-12'>
            <h1 className='text-4xl md:text-6xl tracking-tighter lg:text-8xl lg:[writing-mode:vertical-rl] flex items-center font-bold lg:no-underline md:underline lg:rotate180 md:underline-offset-8 lg:rotate-180'><TfiBoltAlt className='md:invisible'/>Sobre mi</h1>
            <p className='text-xl font-bold w-full text-end pt-12 font-mono'>1/3</p>
        </div>
        <div className='p-8 flex-grow lg:mr-[-100px] flex flex-col justify-center items-center'>
        <div className='text-md md:text-center md:text-2xl px-24'>
        <p className='text-justify lg:text-2xl md:text-center py-2'>¡Hola! Soy <span className='font-bold lg:hover:text-[#CD5C5C] transition-all'>desarrollador de React</span>, actualmente viviendo en Tenerife, Islas Canarias.</p>
        <p className='my-10 max-w-[1220px] mx-auto text-justify md:text-center'>Desde pequeño he sido un <span className='font-bold'>apasionado del mundo del software libre y la tecnología</span>, aunque acabé desarrollando mi formación académica en otra de mis pasiones; el ambito de la <span className='font-bold'>educación e integración social.</span> Tras meditarlo durante un tiempo, decidí dejar mi trabajo en septiembre del 2022 para volcarme en el <span className='font-bold'>desarrollo web</span> y así meterme de lleno en esta apasionante sector dando un giro a mi carrera profesional.</p>
        <h3 className='my-14 max-w-[1200px] mx-auto font-bold text-center lg:hover:text-[#CD5C5C] transition-all'>ACTUALMENTE, ESTOY BUSCANDO CON ILUSIÓN MI PRIMER TRABAJO, EMOCIONADO POR APRENDER Y CONSOLIDARME COMO DESARROLLADOR.</h3>
        <p className=' md:text-xl text-center font-mono'> Si quieres ponerte en <span className='font-bold'>contacto</span> conmigo puedes escribirme a <span className='underline lg:hover:text-[#CD5C5C] transition-all'>ioncerezovalero@gmail.com</span> </p>
        </div>

        </div>
        
      </section>
    );
  }
  
  export default SobreMi