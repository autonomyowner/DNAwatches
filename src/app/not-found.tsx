import Link from "next/link";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section className="bg-background pb-24 pt-28">
      <Container>
        <div className="mx-auto max-w-md rounded-[32px] border border-white/10 bg-white/5 p-10 text-center">
          <h1 className="text-2xl font-semibold uppercase tracking-[0.25em] text-white">Page introuvable</h1>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            La page que vous recherchez n&apos;existe pas ou a été déplacée. Parcourez notre site pour découvrir nos
            collections de montres.
          </p>
          <div className="mt-8 flex flex-col gap-4">
            <Button asChild size="lg">
              <Link href="/collection">Voir la collection</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/">Retour à l&apos;accueil</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

