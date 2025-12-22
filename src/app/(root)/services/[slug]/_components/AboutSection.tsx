import { Provider } from "./providerData";

interface AboutSectionProps {
  provider: Provider;
}

export default function AboutSection({ provider }: AboutSectionProps) {
  return (
    <div className="bg-neutral-0 rounded-xl shadow-sm border border-neutral-200 p-8">
      <div className="border-l-4 border-primary-500 pl-6">
        <h2 className="heading-3 text-neutral-900 mb-6">
          About {provider.name.split(" ")[0]}
        </h2>
      </div>

      <div className="space-y-4 text-neutral-700 body-regular leading-relaxed">
        {provider.about.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
