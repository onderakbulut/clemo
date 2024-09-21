import dynamic from 'next/dynamic'

const Works = dynamic(
  () => import('@/components/works/works'),
  { ssr: false }
)
import Hero from '../components/hero/hero';
import Services from '@/containers/services';
import Team from '@/components/team/team';
import Clients from '@/components/clients/clients';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Works />
      <Team />
      <Clients />
    </main>
  );
}
