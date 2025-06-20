//  { useState } from 'react';
//import { Button } from './ui/button';
import Green from './Green';
import Pink from './Pink';
import Blue from './Blue';
import Brown from './Brown';

// interface IceCreamFlavor {
//   id: string;
//   name: string;
//   color: string;
//   bgGradient: string;
//   image: string;
// }

const IceCreamLanding = () => {
  // const [selectedFlavor, setSelectedFlavor] = useState<string>('mint');
  // const [isAnimating, setIsAnimating] = useState(false);

  // const flavors: IceCreamFlavor[] = [
  //   {
  //     id: 'strawberry',
  //     name: 'Strawberry',
  //     color: '#f472b6',
  //     bgGradient: 'from-pink-400 via-pink-500 to-pink-600',
  //     
  //   },
  //   {
  //     id: 'ocean',
  //     name: 'Ocean Blue',
  //     color: '#3b82f6',
  //     bgGradient: 'from-blue-400 via-blue-500 to-blue-600',
  //     
  //   },
  //   {
  //     id: 'lime',
  //     name: 'Lime',
  //     color: '#84cc16',
  //     bgGradient: 'from-lime-400 via-lime-500 to-lime-600',
  //     
  //   },
  //   {
  //     id: 'mint',
  //     name: 'Mint',
  //     color: '#4ade80',
  //     bgGradient: 'from-green-400 via-green-500 to-green-600',
  //     
  //   }
  // ];

  //const currentFlavor = flavors.find(f => f.id === selectedFlavor) || flavors[3];

  // const handleFlavorClick = (flavorId: string) => {
  //   if (flavorId === selectedFlavor) return;
    
  //   setIsAnimating(true);
  //   setTimeout(() => {
  //     setSelectedFlavor(flavorId);
  //     setTimeout(() => setIsAnimating(false), 100);
  //   }, 400);
  // };

  return (
    <>
      <div className="h-screen w-full overflow-y-scroll scroll-smooth snap-y snap-mandatory" id='everpink-cone'>
        <section className="w-full h-screen snap-start relative " >
          <Pink/>
        </section>

        <section className="w-full h-screen snap-start relative top-[300px]" id='everblue-cone'>
          <Blue/>
        </section>

        <section className="w-full h-screen snap-start relative top-[600px] " id='everbrown-cone'>
          <Brown/>
        </section>

        <section className="w-full h-screen snap-start relative top-[900px] " id='evergreen-cone'>
          <Green/>
        </section>
    </div>

    </>
    
    
  );
};

export default IceCreamLanding;