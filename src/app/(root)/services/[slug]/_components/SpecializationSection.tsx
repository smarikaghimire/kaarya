import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faHome,
  faExclamationTriangle,
  faSolarPanel,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { Provider } from "./providerData";

interface SpecializationsSectionProps {
  provider: Provider;
}

// Icon mapping
const iconMap: Record<string, any> = {
  faBolt,
  faHome,
  faExclamationTriangle,
  faSolarPanel,
  faLightbulb,
};

export default function SpecializationsSection({
  provider,
}: SpecializationsSectionProps) {
  return (
    <div className="bg-neutral-0 rounded-xl shadow-sm border border-neutral-200 p-8">
      <div className="border-l-4 border-primary-500 pl-6 mb-8">
        <h2 className="heading-3 text-neutral-900">
          Specializations & Services
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {provider.specializations.map((spec, index) => (
          <div
            key={index}
            className="p-6 bg-neutral-50 rounded-xl hover:shadow-md transition-shadow duration-300 border border-neutral-100"
          >
            <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
              <FontAwesomeIcon
                icon={iconMap[spec.icon] || faBolt}
                className="text-primary-600 text-2xl"
              />
            </div>
            <h3 className="heading-4 text-neutral-900 mb-3">{spec.title}</h3>
            <p className="body-regular text-neutral-700 mb-4">
              {spec.description}
            </p>
            <p className="text-primary-700 font-semibold">{spec.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
