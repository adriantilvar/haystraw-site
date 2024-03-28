import Button from "@components/button/button.component.tsx";

export default function HeroSection() {
  return (
    <section className="grid content-start h-full px-4 py-8 pl-16 mx-auto border-b-2 lg:content-center lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 bg-slate-50 border-slate-900">
      <div className="mr-auto place-self-center lg:col-span-7">
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
          Automate your screening process with complete control
        </h1>
        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
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
