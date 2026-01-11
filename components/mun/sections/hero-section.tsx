'use client'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/mun/container';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useEffect, useState } from 'react';
import heroBg from '@/public/hero-bg.png'; // Import the static hero background image
import { motion } from 'framer-motion';

export function HeroSection() {
  const targetDate = new Date('2026-01-16T00:00:00'); // Corrected the date format
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

    // Get forms URL from environment variable
    const formsUrl = process.env.NEXT_PUBLIC_FORMS_URL;
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference >= 0) { // Ensure countdown doesn't go negative
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 }); // Reset to zero when time is up
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const fadeVariant = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0 },
  };

  const timeLeftKeys = ['days', 'hours', 'minutes', 'seconds'] as const;

  return (
    // Pull the hero up under the sticky header so the image shows behind the navbar
    <section className="relative h-screen min-h-[700px] -mt-36 flex items-center justify-center text-center text-white">
      <Image
        src={heroBg}
        alt="Hero Background"
        fill
        priority
        className="object-cover w-full h-full" // Ensure the image covers the entire section
      />
      <div className="absolute inset-0 bg-black/50" /> {/* Added a dark overlay with 50% opacity */}
      <div className="absolute inset-0 bg-background/70 backdrop-blur-xs" />
      {/* Corrected `backdrop-blur-[30%]` to `backdrop-blur-sm` for proper blur effect */}
      <Container className="relative z-10 flex flex-col items-center">
        <h1 className="font-headline text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter">
          GSSMUN 4.0
        </h1>
        <div className="mt-6 grid grid-flow-col gap-5 text-center auto-cols-max">
          {timeLeftKeys.map((unit) => (
            <div key={unit} className="flex flex-col">
              <div className="countdown font-bold text-6xl sm:text-7xl md:text-8xl flex">
                {String(timeLeft[unit])
                  .padStart(2, '0') // Ensure two digits
                  .split('')
                  .map((digit, index) => (
                    <motion.span
                      key={`${unit}-${index}-${digit}`} // Unique key for each digit
                      initial={{ y: -20, opacity: 0 }} // Start above with opacity 0
                      animate={{ y: 0, opacity: 1 }} // Animate to center with opacity 1
                      exit={{ y: 20, opacity: 0 }} // Exit below with opacity 0
                      transition={{ duration: 0.3 }} // Smooth transition
                      className="inline-block"
                    >
                      {digit}
                    </motion.span>
                  ))}
              </div>
              {unit}
            </div>
          ))}
        </div>
        <p className="mt-4 font-headline text-xl sm:text-2xl md:text-3xl font-bold text-accent" style={{ fontFamily: 'Times New Roman, serif', fontWeight: 'bold' }}>
          January 16 - 18, 2026
        </p>
      </Container>
    </section>
  );
}
