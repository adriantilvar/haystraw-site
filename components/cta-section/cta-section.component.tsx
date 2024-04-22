import Button from "@components/button/button.component.tsx";

const ctaText =
  "Unsure our solution is right for you? Let's find out together.";

export default function CallToActionSection() {
  return (
    <section className="flex w-full justify-center p-8 font-mono">
      <h2 className="text-2xl font-bold tracking-tight">{ctaText}</h2>
      <div className="w-32 ms-6 flex">
        <Button type="ghost">Contact Us </Button>
      </div>
    </section>
  );
}
