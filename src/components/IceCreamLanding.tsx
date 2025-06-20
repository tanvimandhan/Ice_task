import  { useState } from 'react';
import { Button } from './ui/button';
import Green from './Green';
import Pink from './Pink';
import Blue from './Blue';
import Brown from './Brown';

interface IceCreamFlavor {
  id: string;
  name: string;
  color: string;
  bgGradient: string;
  image: string;
}

const IceCreamLanding = () => {
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

  const handleFlavorClick = (flavorId: string) => {
    if (flavorId === selectedFlavor) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedFlavor(flavorId);
      setTimeout(() => setIsAnimating(false), 100);
    }, 400);
  };

  return (
    <>
      <div className="h-screen w-full overflow-y-scroll scroll-smooth snap-y snap-mandatory" id='everpink-cone'>
        <section className="w-full h-screen snap-start relative " >
          <Pink/>
          {/* First screen (ice cream page) */}
          {/* Your code from the screenshot goes here */}
        </section>

        <section className="w-full h-screen snap-start relative top-[300px]" id='everblue-cone'>
          <Blue/>
          {/* Second screen */}
          {/* Add another ice cream theme or design here */}
        </section>

        <section className="w-full h-screen snap-start relative top-[600px] " id='everbrown-cone'>
          <Brown/>
          {/* Third screen */}
        </section>

        <section className="w-full h-screen snap-start relative top-[900px] " id='evergreen-cone'>
          <Green/>
          {/* Fourth screen */}
        </section>
    </div>

    </>
    
    
  );
};

export default IceCreamLanding;