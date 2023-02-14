import { MdEmail  , MdDashboard} from 'react-icons/md';
import {AiFillGithub} from 'react-icons/ai'
import {FaArrowDown} from 'react-icons/fa'
import {RiContactsFill} from 'react-icons/ri'
import CV from '../data/CV Ion Cerezo Valero.pdf'
import { useState } from 'react';

function Header() {

  const [cvButtonOpen, setCvButtonOpen] = useState(false)
  return (
    <header onClick={() => setCvButtonOpen(false)} className='overflow-x-hidden min-h-screen font-infra w-full flex flex-col justify-between items-center bg-[#F2F2F2]  p-8'>
      <hr></hr>
      <div className=' w-full md:max-w-4xl xl:max-w-5xl'>
        <h1 className='text-[32px] xl:text-[58px] md:text-[48px] font-bold leading-normal mb-5'>
          Soy <span className='bg-black text-[#F2F2F2] px-1'>Ion Cerezo</span> y estoy
          buscando mi primer trabajo como {' '}
          <span className='bg-black underline text-[#F2F2F2] px-1'>desarrollador Full Stack</span> .
        </h1>
        <ul className='flex flex-wrap items-center gap-10 md:gap-12 lg:gap-14 xl:gap-16 lg:text-xl lg:mt-10 font-mono'>
          <li>
            <a
              className='flex gap-2 items-center hover:underline'
              href='https://github.com/ioncerezo'
              rel='noreferrer'
              target='_blank'
            >
              <AiFillGithub className='text-black text-2xl' />
              GitHub.
            </a>
          </li>
          <li>
            <a
              className='flex gap-2 items-center hover:underline'
              href='#portfolio'
            
            >
              <MdDashboard className='text-black text-2xl' />
              Portfolio.
            </a>
          </li>
          <li>
            <a
              className='flex gap-2 items-center hover:underline'
              href='mailto:ioncerezovalero@gmail.com'
              rel='noreferrer'
              target='_blank'
            >
              <MdEmail className='text-black text-2xl' />
              Email.
            </a>
          </li>
          <li>
            <div
              className='ml-2 flex gap-3 items-center select-none underline p-1 font-bold'
              onClick={(event) => {event.stopPropagation(); setCvButtonOpen(!cvButtonOpen)}}
            >
            <RiContactsFill className=' text-xl' />
              CV <div className={cvButtonOpen ? 'rotate-180 transition-all': 'rotate-0 transition-all'}><svg className='w-4 h-4' aria-hidden='true' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'></path></svg></div>
            </div>
            {
              cvButtonOpen && 
              <div className='absolute select-none pl-1 text-base lg:text-lg text-center'>
              <div className='px-2 pt-2 lg:pb-2 pb-1 font-bold hover:underline'>
                <a
                href='https://mnf.red/4a0e7dd0-31cd-460f-9b72-5dd4aa08f255/classic'
                rel='noreferrer'
                target='_blank'
                >CV Online</a></div>
              <div className='px-2 hover:underline'>
                <a
                href={CV}
                download='CV Ion Cerezo Valero.pdf'
                >Descargar</a></div>
              </div>
            }
            
          </li>
        </ul>
      </div>
      <div className='h-32 flex flex-col justify-end'>
        <a href='#SobreMi'><FaArrowDown className='text-2xl text-black cursor-pointer hover:text-3xl' /></a>
      </div>
    </header>
  );
}

export default Header