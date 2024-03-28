import Button from "@components/button/button.component.tsx";

const ctaText = "Unsure which plan is right for you? Let's discover together.";

export default function CallToActionSection() {
  return (
    <section className="flex items-center w-screen px-6 py-24 mx-auto lg:justify-between lg:px-8 lg:py-32 max-w-7xl">
      <h2 className="font-bold tracking-tight sm:text-4xl">{ctaText}</h2>
      <div className="flex items-center mt-10 sm:shrink-0 lg:mt-0 gap-x-6">
        <Button>Contact us</Button>
        <Button type="ghost">Learn more</Button>
      </div>
    </section>
  );
}
