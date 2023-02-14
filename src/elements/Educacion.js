import {TfiPencil} from 'react-icons/tfi'
import MongoDB from '../data/certificado mongodb.pdf'
function Educacion() {


    return (
        <section id='educacion' className='overflow-x-hidden min-h-screen h-full flex flex-col lg:flex-row-reverse font-infra w-full bg-[#F2F2F2]'>
        <div className='lg:hover:text-[#FFD171] w-full h-52 lg:h-screen transition-all ease-in-out lg:w-52 lg:flex lg:flex-col lg:justify-center p-14 pt-12'>
            <h1 className='text-4xl md:text-6xl tracking-tighter lg:text-8xl lg:[writing-mode:vertical-rl] flex items-center gap-4 font-bold lg:no-underline md:underline md:underline-offset-8 lg:rotate-180'><TfiPencil className='md:invisible'/>Formación</h1>
            <p className='text-xl font-bold w-full text-end pt-12 font-mono'>3/3</p>
        </div>
        <div className='p-8 w-full flex flex-col xl:flex-row'>
          <div className='xl:p-16 px-8 w-full xl:flex xl:flex-col justify-between '>
          <div className='text-md 2xl:w-[600px]'>
          <h1 className='text-2xl lg:text-3xl 2xl:text-4xl font-bold my-5 xl:mb-10 '>Un poco sobre mi:</h1>
          <p className='md:text-lg lg:text-xl 2xl:leading-loose leading-relaxed mb-2 text-justify'>Soy una persona con gran <span className='font-bold'>habilidad para trabajar en grupo.</span> En mis anteriores trabajos como educador social he necesitado dirigir equipos, <span className='font-bold'>comunicándome de manera asertiva</span> con usuarios, familias y compañeros/as.</p>
          <p className='md:text-lg lg:text-xl 2xl:leading-loose leading-relaxed mb-2 text-justify'>Me considero <span className='font-bold'>alegre, paciente y respetuoso,</span> lo que me facilita trabajar en equipo. Asimismo, tengo buena capacidad de sintesis, para <span className='font-bold'>redactar</span> y <span className='font-bold'>resumir</span> las problemáticas <span className='font-bold'>y comunicar</span> la solución planteada.</p>
          <p className='md:text-lg lg:text-xl 2xl:leading-loose leading-relaxed text-justify'>También me manejo bien con el <span className='font-bold'>inglés para leer documentación</span> y aprender nuevas tecnologías por mi cuenta.</p>
          </div>
          </div>
          <div className='xl:p-16 px-8 xl:flex-col xl:flex  w-full '>
          <div>
          <h1 className='text-2xl lg:text-3xl 2xl:text-4xl font-bold my-5 xl:mb-10'>Actualmente me resuelvo con:</h1>
          <div className='lg:text-xl flex gap-4 lg:gap-10 font-mono md:text-lg flex-wrap'>
            <p className='hover:font-bold'>HTML5</p>
            <p className='hover:font-bold'>CSS3</p>
            <p className='hover:font-bold'>JavaScript</p>
            <p className='hover:font-bold'>GitHub</p>
            <p className='hover:font-bold'>Git</p>
            <p className='hover:font-bold'>NPM</p>
            <p className='hover:font-bold'>GNU/Linux</p>
            <p className='hover:font-bold'>Windows</p>
            <p className='hover:font-bold'>Bootstrap</p>
            <p className='hover:font-bold'>Tailwind</p>
            <p className='hover:font-bold'>NodeJS</p>
            <p className='hover:font-bold'>Express</p>
            <p className='hover:font-bold'>MongoDB</p>
            <p className='hover:font-bold'>React</p>
          </div>
          </div>
          <div>
          <h1 className='text-2xl lg:text-3xl 2xl:text-4xl font-bold my-5 xl:mb-10 mt-5 lg:mt-14 '>Cursos:</h1>
          <div className='flex gap-4 lg:text-xl text-lg flex-wrap justify-between mb-12 font-bold'>
          <a rel='noreferrer' target='_blank' href='https://freecodecamp.org/certification/IonCerezo/responsive-web-design' className='border-2 bg-[#F2F2F2] hover:bg-[#FFD171] border-black rounded-lg mb-4 lg:mb-0 p-8 flex flex-col justify-between transition-all 3xl:my-auto w-full py-4 '> 
           <p className='font-mono text-base '>300 horas</p>
            <p className=' text-center py-6'>Responsive Web Design</p>
            <p className='font-mono text-base text-right'>FreeCodeCamp</p>
          </a>
          <a rel='noreferrer' target='_blank' href='https://freecodecamp.org/certification/IonCerezo/javascript-algorithms-and-data-structures' className='border-2 bg-[#F2F2F2] hover:bg-[#FFD171] border-black rounded-lg mb-4 lg:mb-0 p-8 flex flex-col justify-between transition-all 3xl:my-auto w-full py-4'>
       <p className='font-mono text-base '>300 horas</p>
            <p className='text-center py-6'>JavaScript Algorithms and Data Structures</p>
            <p className='font-mono text-base text-right'>FreeCodeCamp</p>
          </a>
          <a rel='noreferrer' target='_blank' href={MongoDB} download='certificadoMongoDB.pdf' className='border-2 bg-[#F2F2F2] hover:bg-[#FFD171] border-black rounded-lg mb-4 lg:mb-0 p-8 flex flex-col justify-between transition-all 3xl:my-auto w-full py-4 '>
       <p className='font-mono text-base '>12 horas</p>
            <p className='text-center py-6'>Introduction to MongoDB</p>
            <p className='font-mono text-base text-right'>MongoDB university</p>
          </a>
          </div>
          </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Educacion