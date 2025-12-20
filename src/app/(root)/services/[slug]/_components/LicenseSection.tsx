import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCertificate,
  faBolt,
  faShieldAlt,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Provider } from "./providerData";

interface LicensesSectionProps {
  provider: Provider;
}

// Icon mapping
const iconMap: Record<string, any> = {
  faCertificate,
  faBolt,
  faShieldAlt,
};

export default function LicensesSection({ provider }: LicensesSectionProps) {
  return (
    <div className="bg-neutral-0 rounded-xl shadow-sm border border-neutral-200 p-8">
      <div className="border-l-4 border-primary-500 pl-6 mb-8">
        <h2 className="heading-3 text-neutral-900">
          Licenses & Certifications
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {provider.licenses.map((license, index) => (
          <div
            key={index}
            className="text-center p-6 bg-neutral-50 rounded-xl border border-neutral-100 hover:shadow-md transition-shadow"
          >
            {/* Icon */}
            <div className="w-16 h-16 mx-auto rounded-full bg-primary-100 flex items-center justify-center mb-4">
              <FontAwesomeIcon
                icon={iconMap[license.icon] || faCertificate}
                className="text-primary-600 text-2xl"
              />
            </div>

            {/* Title */}
            <h3 className="heading-4 text-neutral-900 mb-2">{license.title}</h3>

            {/* Issuer */}
            <p className="body-small text-neutral-600 mb-3">{license.issuer}</p>

            {/* License Number */}
            <p className="body-regular text-neutral-700 font-medium mb-1">
              {license.license}
            </p>

            {/* Issued Date */}
            {license.issued && (
              <p className="body-small text-neutral-500 mb-4">
                {license.issued}
              </p>
            )}

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-100 text-primary-700 rounded-full mt-3">
              <FontAwesomeIcon icon={faCheckCircle} className="text-sm" />
              <span className="text-sm font-medium">{license.status}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-8 p-6 bg-yellow-100 rounded-xl border border-yellow-200">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-200 flex items-center justify-center">
            <FontAwesomeIcon
              icon={faShieldAlt}
              className="text-yellow-800 text-lg"
            />
          </div>
          <div>
            <h4 className="font-semibold text-neutral-900 mb-2">
              Fully Insured & Bonded
            </h4>
            <p className="body-regular text-neutral-700">
              All work is covered by comprehensive liability insurance and
              workers compensation. General liability coverage: $2,000,000 •
              Professional liability: $1,000,000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
