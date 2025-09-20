import type { ReactElement } from "react";
import Link from "next/link";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Hero from "@/components/Hero";
import Button from "@/components/ui/Button";
import Reveal from "@/components/Reveal";

const services = [
  {
    title: "Vases & Floral",
    description: "De magnifiques vases et arrangements floraux pour apporter la nature dans votre maison",
    image: "/1.jpg",
    href: "/services"
  },
  {
    title: "Bougies & Porte-bougies", 
    description: "Des bougies élégantes et des porte-bougies pour créer l'ambiance parfaite",
    image: "/2.jpg",
    href: "/services"
  },
  {
    title: "Sculptures & Lampes",
    description: "Des sculptures artistiques et des lampes modernes pour illuminer votre espace",
    image: "/3.jpg",
    href: "/services"
  }
];

const popularProducts = [
  {
    title: "Ensemble Salle de Bain Complet",
    image: "/4.jpg"
  },
  {
    title: "Ensemble de Vases en Céramique Blanche",
    image: "/5.jpg"
  },
  {
    title: "Ensemble de Vases Gris",
    image: "/6.jpg"
  },
  {
    title: "Ensemble Marbre avec Fleurs",
    image: "/7.jpg"
  }
];

export default function Home(): ReactElement {
  return (
    <>
      <Hero />
      
      {/* Our Services Section */}
      <Section className="bg-[#faf9f7] py-20">
        <Container>
            <Reveal>
              <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#2d2d2d] mb-6">
                Nos Services
              </h2>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Reveal key={service.title} delay={idx * 200}>
                <div className="bg-[#f5f3f0] p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300 group">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                    <div 
                      className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url('${service.image}')` }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#2d2d2d] mb-4">{service.title}</h3>
                  <p className="text-[#6b6b6b] leading-relaxed mb-6">{service.description}</p>
                  <Button variant="outline" size="sm" asChild className="border-[#8b7355] !text-[#2d2d2d] bg-white hover:bg-[#8b7355] hover:!text-white">
                    <Link href={service.href}>Acheter maintenant</Link>
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Modern design meet cozy comfort */}
      <Section className="bg-white py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#2d2d2d] mb-6">
                  Design moderne rencontre confort douillet
              </h2>
                <p className="text-lg text-[#6b6b6b] leading-relaxed mb-8">
                  Nous croyons qu&apos;un grand design ne doit pas seulement être beau mais aussi confortable et accueillant. 
                  Notre collection soigneusement sélectionnée allie esthétique moderne et confort douillet, créant 
                  des espaces à la fois élégants et habitables.
                </p>
                <Button variant="outline" size="lg" asChild className="border-[#8b7355] !text-[#2d2d2d] bg-white hover:bg-[#8b7355] hover:!text-white">
                  <Link href="/contact">NOUS CONTACTER</Link>
                </Button>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <div className="relative">
                <div 
                  className="aspect-[3/4] bg-cover bg-center rounded-2xl"
                  style={{ backgroundImage: "url('/8.jpg')" }}
                />
                <div className="absolute -left-8 top-8 w-32 h-32 bg-[#f5f3f0] rounded-full -z-10"></div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Our most popular */}
      <Section className="bg-[#faf9f7] py-20">
        <Container>
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#2d2d2d] mb-6">
                Nos plus populaires
              </h2>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularProducts.map((product, idx) => (
              <Reveal key={product.title} delay={idx * 100}>
                <div className="bg-[#f5f3f0] rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  <div 
                    className="aspect-square bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${product.image}')` }}
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-[#2d2d2d]">{product.title}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Let's Chat Section */}
      <Section className="bg-white py-20">
        <Container>
          <div className="relative">
            <div className="absolute left-0 top-0 w-96 h-96 bg-[#f5f3f0] rounded-full -z-10"></div>
            <div className="relative z-10 max-w-2xl">
          <Reveal>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#2d2d2d] mb-6">
                  Parlons-en
              </h2>
                <p className="text-lg text-[#6b6b6b] leading-relaxed mb-8">
                  Nous sommes là pour vous aider à créer l&apos;espace de vos rêves. Contactez-nous pour discuter 
                  de vos projets de décoration et découvrir comment nous pouvons transformer votre maison 
                  en un lieu unique et accueillant.
                </p>
                <Button variant="outline" size="lg" asChild className="border-[#8b7355] !text-[#2d2d2d] bg-white hover:bg-[#8b7355] hover:!text-white">
                  <Link href="/contact">EN SAVOIR PLUS</Link>
                </Button>
          </Reveal>
            </div>
          </div>
        </Container>
      </Section>

    </>
  );
}
