"use client";
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';

export default function Home() {
  return (
    <>    
      <NavbarLayoutFloatingInline 
        navItems={[
          { name: "Hero", id: "hero" },
          { name: "About", id: "about" },
          { name: "How To Buy", id: "how-to-buy" },
          { name: "Tokenomics", id: "tokenomics" },
          { name: "FAQ", id: "footer" }
        ]}
        logoSrc="/images/logo.svg"
        logoWidth={200}
        logoHeight={60}
        buttonText="Book a Shoot"
        onButtonClick={() => { console.log('CTA Clicked!'); }}
      />
      <BillboardHero 
        title="Welcome to PhotonFlux Studio"
        subtitle="Capturing the essence of the future through vibrant photography."
      />
      <SplitAbout 
        heading="About Our Studio"
        body="At PhotonFlux, we blend artistry and technology to create visually stunning photography that speaks volumes. Our work thrives on creativity, innovation, and a commitment to excellence."
      />
      <HowToBuy3D 
        title="How to Book a Shoot"
        steps={[
          { title: 'Select a Package', description: 'Choose from our various photography packages that suit your needs.' },
          { title: 'Schedule a Date', description: 'Pick a date and time that works best for you.' },
          { title: 'Make Payment', description: 'Complete your booking by making a payment through our secure system.' }
        ]}
      />
      <NumberGridTokenomics 
        title="Our Achievements"
        description="Take a look at our growth and the key metrics that define us."
        kpiItems={[
          { value: "100", description: "Photoshoots Completed" },
          { value: "50", description: "Happy Clients" },
          { value: "2000", description: "Photos Taken" }
        ]}
      />
      <CentralFAQ 
        heading="Frequently Asked Questions"
        lead="Got questions? We have answers!"
        items={[
          { title: "How do I book a shoot?", content: "To book a shoot, select your package, schedule a date, and make your payment." },
          { title: "What type of photography do you specialize in?", content: "We specialize in portrait, event, and product photography." },
          { title: "How long will it take to receive my photos?", content: "You can expect to receive your photos within 2-3 weeks after the shoot." }
        ]}
      />
    </>
  );
}