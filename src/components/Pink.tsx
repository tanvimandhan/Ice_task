import { Button } from './ui/button';
import { useState } from 'react';

interface IceCreamFlavor {
  id: string;
  name: string;
  color: string;
  bgGradient: string;
  image: string;
}

function Pink() {
  
    const [selectedFlavor, setSelectedFlavor] = useState<string>('mint');
          const [isAnimating, setIsAnimating] = useState(false);
        
          const flavors: IceCreamFlavor[] = [
            {
              id: 'strawberry',
              name: 'Strawberry',
              color: '#f472b6',
              bgGradient: 'from-pink-400 via-pink-500 to-pink-600',
              image: '/lovable-uploads/0786927e-f1f3-4e7b-bfcc-a5d1d8eef2a9.png'
            },
            {
              id: 'ocean',
              name: 'Ocean Blue',
              color: '#3b82f6',
              bgGradient: 'from-blue-400 via-blue-500 to-blue-600',
              image: '/lovable-uploads/0786927e-f1f3-4e7b-bfcc-a5d1d8eef2a9.png'
            },
            {
              id: 'lime',
              name: 'Lime',
              color: '#84cc16',
              bgGradient: 'from-lime-400 via-lime-500 to-lime-600',
              image: '/lovable-uploads/0786927e-f1f3-4e7b-bfcc-a5d1d8eef2a9.png'
            },
            {
              id: 'mint',
              name: 'Mint',
              color: '#4ade80',
              bgGradient: 'from-green-400 via-green-500 to-green-600',
              image: '/lovable-uploads/0786927e-f1f3-4e7b-bfcc-a5d1d8eef2a9.png'
            }
          ];
        
          const currentFlavor = flavors.find(f => f.id === selectedFlavor) || flavors[3];
        
          // const handleFlavorClick = (flavorId: string) => {
          //   if (flavorId === selectedFlavor) return;
            
          //   setIsAnimating(true);
          //   setTimeout(() => {
          //     setSelectedFlavor(flavorId);
          //     setTimeout(() => setIsAnimating(false), 100);
          //   }, 400);
          // };
      return (
        <div className="w-full sm:w-[600px] md:w-[900px] lg:w-[1200px] h-[800px] md:h-[900px] lg:h-[1117px]">
             <div className={`min-h-screen bg-gradient-to-br from-[#BE128D]  to-[#FF6CEE] transition-all duration-1000 ease-in-out relative overflow-hidden`}>
          {/* Animated background elements */}
          {/* <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-float"></div>
            <div className="absolute top-32 right-20 w-24 h-24 bg-white rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          </div> */}
    
          {/* Navigation */}
          <nav className="relative z-10 flex items-center justify-between p-4 lg:px-16">
            
              <img 
                src="/logo(1).png"
                alt="Decorative Image"
                className="text-white 
                    font-bold 
                    w-[80px] 
                    h-[30.95px] 
                    text-[length:var(--font-size)] 
                    leading-[1] 
                    flex 
                    items-center 
                    justify-center left-[126px]"
              />
            
            <div className="hidden md:flex absolute top-[40px] left-1/2 transform -translate-x-1/2">
            <nav className="flex gap-8">
              {['Home', 'Shop', 'Delivery', 'Contact'].map((item) => (
                <a 
                  href="#"
                  key={item}
                  className="
                    mt-[5px] md:mt-[10px] lg:mt-[3px]
                    font-[Poppins]
                    font-bold
                    text-[22px]
                    leading-none
                    text-white
                    hover:text-opacity-80
                    transition-all
                    duration-200
                    flex
                    items-center
                    justify-center
                    min-w-[67px]
                    h-[33px]
                  "
                >
                  {item}
                </a>
              ))}
            </nav>
        </div>
            <Button 
              variant="outline" 
              className="bg-transparent border-2  border-white text-white lg:w-[280px] lg:h-[50px] hover:bg-white hover:text-gray-800 transition-all duration-300 mt-[5px] md:mt-[10px] lg:mt-[14px]">
                <p className='lg:w-[248px]  lg:h-[33px] top-[65px] left-[1315px] lg:top-0.5'>Order Your Ice-cream</p>
               
            </Button>
          </nav>
    
          {/* Main Content */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-4 lg:px-20 py-8 lg:py-2">
            {/* Left Content */}
            <div className="flex-1 text-white max-w-2xl mb-8 lg:mb-0">
              <h1 className="font-[Pacifico] text-[160px] leading-[100%] tracking-[0%] text-center w-[548px] h-[150px] left-[128px] pt-[0px]">
                icecream
              </h1>
              <h2 className="text-2xl lg:text-4xl font-semibold mb-6 lg:mb-0 w-[532px] h-[99px] text-left pt-[20px]">
                {/* {currentFlavor.name} cone */}
                Strawberry cone

              </h2>
              
              <div className="space-y-4 lg:space-y-6 text-sm lg:text-lg leading-relaxed text-left text-bold">
                <p>
                  Embark on a culinary journey of delight as you immerse yourself in our 
                  artisan-crafted ice cream collection—each flavor a story, each scoop 
                  an unforgettable chapter in your sweet odyssey!
                </p>
                <p>
                  Indulge in a world of imagination, where every scoop unveils 
                  a new taste adventure! Choose your favorite.
                </p>
              </div>
            </div>
    
            {/* Right Content - Main Ice Cream */}
            <div className="flex-1 flex justify-center lg:justify-end relative ">
              
            </div>
          </div>
    
          {/* Bottom Ice Cream Selector */}
          <div className="mt-20 bottom-4 left-4 flex space-x-4 ml-23 mb-10">
            <img src="/Component_13.png" alt="img1" className="w-[137px] h-[157px]" onClick={() => document.getElementById('everpink-cone')?.scrollIntoView({ behavior: 'smooth' })} />
            <img src="/Component_14.png" alt="img2" className="w-[137px] h-[157px]" onClick={() => document.getElementById('everblue-cone')?.scrollIntoView({ behavior: 'smooth' })}/>
            <img src="/Component_15.png" alt="img3" className="w-[137px] h-[157px] " onClick={() => document.getElementById('everbrown-cone')?.scrollIntoView({ behavior: 'smooth' })}/>
            <img src="/Component_16.png" alt="img4" className="w-[137px] h-[157px] " onClick={() => document.getElementById('evergreen-cone')?.scrollIntoView({ behavior: 'smooth' })}/>
          </div>
          {/* <div className="absolute bottom-8 left-4 lg:left-8 flex space-x-4 z-10">
            {flavors.map((flavor, index) => (
              <button
                key={flavor.id}
                onClick={() => handleFlavorClick(flavor.id)}
                className={`relative group transition-all duration-300 ${
                  selectedFlavor === flavor.id 
                    ? 'scale-110 drop-shadow-xl' 
                    : 'hover:scale-105 hover:drop-shadow-lg'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              > */}
                {/* <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-lg overflow-hidden border-2 border-white/30 hover:border-white/60 transition-all duration-300">
                  <img 
                    src={flavor.image}
                    alt={flavor.name}
                    className="w-full h-full object-cover"
                    style={{ filter: `hue-rotate(${flavor.id === 'strawberry' ? '320deg' : flavor.id === 'ocean' ? '200deg' : flavor.id === 'lime' ? '60deg' : '0deg'})` }}
                  />
                </div> */}
                
                {/* Flavor indicator */}
                {/* <div 
                  className={`absolute inset-0 rounded-lg opacity-40 mix-blend-multiply transition-opacity duration-300 ${
                    selectedFlavor === flavor.id ? 'opacity-60' : 'group-hover:opacity-50'
                  }`}
                  style={{ backgroundColor: flavor.color }}
                ></div> */}
                
                {/* Selection indicator */}
                {/* {selectedFlavor === flavor.id && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-bounce-in"></div>
                )} */}
              {/* </button>
            ))}
          </div> */}
    
          {/* Mobile menu button */}
          <button className="md:hidden fixed top-4 right-4 z-20 p-2 text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <img 
            src="/18a05373bec60857d110ab7865823d6fa19f2197.png"
            alt="Decorative Image"
            className="absolute bottom-0 right-0 w-[587px] h-[700px] mb-[-60px] object-contain z-10"
          />
    
        </div>
        </div>
  )
}

export default Pink