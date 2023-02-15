import { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';

export default function Carousel({ 
    children: slides, 
    autoSlide = false, 
    autoSlideInterval = 3000, } ) {
const [curr, setCurrentIndex] = useState(0)

const prevSlide = () => 
    setCurrentIndex((curr)=> (curr === 0 ? slides.length -1 : curr - 1))

const nextSlide = () => 
    setCurrentIndex((curr) => (curr === slides.length - 1 ? 0 : curr + 1))


 useEffect (() => {
    if(!autoSlide) return
    const slideInterval = setInterval(nextSlide, autoSlideInterval)
    return () => clearInterval(slideInterval)
 }, [])
    return (
        <div className="overflow-hidden relative">
            <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * 100}%)`}}>{slides}</div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={prevSlide} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
                    <BsChevronCompactLeft size={40} />
                </button>
                <button onClick={nextSlide} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
                    <BsChevronCompactRight size={40}/>
                    </button>
            </div>
            <div className='absolute bottom-4 right-0 left-0'>
                <div className='flex items-center justify-center gap-2'>
                    {slides.map((_, i)=> (
                        <div className={
                            `transition-all w-3 h-3 bg-white rounded-full
                            ${curr === i ? "p-2" : "bg-opacity-50"}`
                        }
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}