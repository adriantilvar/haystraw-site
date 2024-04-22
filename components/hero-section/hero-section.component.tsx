import Button from "@components/button/button.component.tsx";

export default function HeroSection() {
  return (
    <section className="grid h-screen content-start font-mono lg:grid-cols-12 lg:content-center lg:gap-8 lg:px-8">
      <div className="mr-auto place-self-center lg:col-span-7">
        <h1 className="mb-5 max-w-2xl text-4xl font-bold leading-none tracking-tighter">
          Automate your screening process with complete control
        </h1>
        <p className="max-w-2xl lg:mb-8 lg:text-base">
          From onboarding to routine checks, mitigate conflicts of interest and
          prevent illicit activities. We help you identify individuals who may
          be politically exposed or sanctioned by regulatory authorities, as
          well as international bodies.
        </p>
        <div className="w-1/4">
          <Button> Get started </Button>
        </div>
      </div>
    </section>
  );
}
