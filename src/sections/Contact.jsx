import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import phone from '../assets/icons/phone.svg'
import mail from '../assets/icons/mail.svg'
import map from '../assets/icons/map.svg'

const Contact = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    })
  }, [])

  return (
   <section id='contact' className='bg-slate-950 w-full px-20 py-20 flex flex-col lg:flex-row justify-around items-center gap-16'>
    <div data-aos='slide-up' data-aos-delay='500' className='flex flex-col justify-center items-center gap-4'>
      <div id='icon-box' className='bg-green-500 p-4 rounded-full hover:bg-orange-500 cursor-pointer'>
        <img src={phone} alt="phone icon" width={40} height={40}/>
      </div>
      <h1 className='text-white font-bold text-2xl uppercase'>Call Us</h1>
      <p className='text-white font-normal text-xl text-center'>Mon-Fri from 8am to 5am</p>
      <p className='text-orange-500 text-2xl font-bold text-center underline cursor-pointer'>+91 890 876 536</p>
    </div>
    <div data-aos='slide-up' data-aos-delay='600' className='flex flex-col justify-center items-center gap-4'>
      <div id='icon-box' className='bg-green-500 p-4 rounded-full hover:bg-orange-500 cursor-pointer'>
        <img src={map} alt="phone icon" width={40} height={40}/>
      </div>
      <h1 className='text-white font-bold text-2xl uppercase'>reach us</h1>
      <p className='text-white font-normal text-xl text-center'>Mon-Fri from 8am to 5am</p>
      <p className='text-orange-500 text-2xl font-bold text-center underline cursor-pointer'>+91 890 876 536</p>
    </div>
    <div data-aos='slide-up' data-aos-delay='700' className='flex flex-col justify-center items-center gap-4'>
      <div id='icon-box' className='bg-green-500 p-4 rounded-full hover:bg-orange-500 cursor-pointer'>
        <img src={mail} alt="phone icon" width={40} height={40}/>
      </div>
      <h1 className='text-white font-bold text-2xl uppercase'>mail us</h1>
      <p className='text-white font-normal text-xl text-center'>Mon-Fri from 8am to 5am</p>
      <p className='text-orange-500 text-2xl font-bold text-center underline cursor-pointer'>+91 890 876 536</p>
    </div>
   </section>
  )
}

export default Contact;