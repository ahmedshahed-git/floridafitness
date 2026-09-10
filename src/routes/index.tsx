import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Programs } from "@/components/site/Programs";
import { GymShowcase } from "@/components/site/GymShowcase";
import { Membership } from "@/components/site/Membership";
import { Stories } from "@/components/site/Stories";
import { Reels } from "@/components/site/Reels";
import { Coaches } from "@/components/site/Coaches";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/components/site/useReveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Florida Fitness | Gym & Personal Training in Trenton, FL" },
      {
        name: "description",
        content:
          "Florida Fitness in Trenton, FL: new equipment, group classes, personal training and coaches who help you reach your fitness goals. Call 352-658-8040.",
      },
      { property: "og:title", content: "Florida Fitness | Gym in Trenton, Florida" },
      {
        property: "og:description",
        content:
          "Strength, cardio, classes and personal training in Trenton, Florida. Our goal is to help you reach your fitness goals.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();

  return (
    <div id="top" className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Programs />
        <GymShowcase />
        <Membership />
        <Stories />
        <Reels />
        <Coaches />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
