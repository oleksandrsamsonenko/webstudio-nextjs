import Features from './components/Features/Features';
import Hero from './components/Hero/Hero';
import OurSkills from './components/OurSkills/OurSkills';
import OurTeam from './components/OurTeam/OurTeam';
import Partners from './components/Partners/Partners';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <OurSkills />
      <OurTeam />
      <Partners />
    </main>
  );
}
