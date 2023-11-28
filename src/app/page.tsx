import Feedback from '@/components/Feedback'
import Intro from '@/components/Intro'
import Offer from '@/components/Offers'
import Strength from '@/components/Strength'


export default function Home() {
  return (
    <main>
      <Intro />
      <Offer />
      <Strength />
      <Feedback />
    </main>
  )
}
