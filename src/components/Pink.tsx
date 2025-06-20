import { Button } from './ui/button';


// interface IceCreamFlavor {
//   id: string;
//   name: string;
//   color: string;
//   bgGradient: string;
//   image: string;
// }

function Pink() {
  
      return (
        <div className="w-full sm:w-[600px] md:w-[900px] lg:w-[1200px] h-[800px] md:h-[900px] lg:h-[1117px]">
             <div className={`min-h-screen bg-gradient-to-br from-[#BE128D]  to-[#FF6CEE] transition-all duration-1000 ease-in-out relative overflow-hidden`}>
          
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
            <div className="flex-1 flex justify-center lg:justify-end relative "></div>
          </div>
    
          {/* Bottom Ice Cream Selector */}
          <div className="mt-20 bottom-4 left-4 flex space-x-4 ml-23 mb-10">
            <img src="/Component_13.png" alt="img1" className="w-[137px] h-[157px]" onClick={() => document.getElementById('everpink-cone')?.scrollIntoView({ behavior: 'smooth' })} />
            <img src="/Component_14.png" alt="img2" className="w-[137px] h-[157px]" onClick={() => document.getElementById('everblue-cone')?.scrollIntoView({ behavior: 'smooth' })}/>
            <img src="/Component_15.png" alt="img3" className="w-[137px] h-[157px] " onClick={() => document.getElementById('everbrown-cone')?.scrollIntoView({ behavior: 'smooth' })}/>
            <img src="/Component_16.png" alt="img4" className="w-[137px] h-[157px] " onClick={() => document.getElementById('evergreen-cone')?.scrollIntoView({ behavior: 'smooth' })}/>
          </div>
    
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