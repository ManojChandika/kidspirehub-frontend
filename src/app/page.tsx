import Hero from '../components/home/Hero';
import WhyChoose from '../components/home/WhyChoose';
import ExploreBySubject from '../components/home/ExploreBySubject';
import ExploreByGrade from '../components/home/ExploreByGrade';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhyChoose />
      <ExploreBySubject />
      <ExploreByGrade />
    </main>
  );
}
