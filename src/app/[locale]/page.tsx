import HeroSection from '@/components/sections/HeroSection'
import ConceptSection from '@/components/sections/ConceptSection'
import AboutSection from '@/components/sections/AboutSection'
import RestauranteSection from '@/components/sections/RestauranteSection'
import LoungeSection from '@/components/sections/LoungeSection'
import HighlightsSection from '@/components/sections/HighlightsSection'
import MenuSection from '@/components/sections/MenuSection'
import EventsSection from '@/components/sections/EventsSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import GallerySection from '@/components/sections/GallerySection'
import ReservaSection from '@/components/sections/ReservaSection'
import ContactLocationSection from '@/components/sections/ContactLocationSection'
import CommunitySection from '@/components/sections/CommunitySection'
import SectionDivider from '@/components/ui/SectionDivider'

import { unstable_setRequestLocale } from 'next-intl/server'

type Props = {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  unstable_setRequestLocale(locale)

  return (
    <>
      <HeroSection />
      <ConceptSection />
      <AboutSection />
      <SectionDivider />
      <RestauranteSection />
      <LoungeSection />
      <HighlightsSection />
      <MenuSection />
      <EventsSection />
      <TestimonialsSection />
      <GallerySection />
      <SectionDivider />
      <ReservaSection />
      <ContactLocationSection />
      <CommunitySection />
    </>
  )
}
