import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { Provider } from "./providerData";

interface ExperienceSectionProps {
  provider: Provider;
}

export default function ExperienceSection({
  provider,
}: ExperienceSectionProps) {
  return (
    <div className="bg-neutral-0 rounded-xl shadow-sm border border-neutral-200 p-8">
      <div className="border-l-4 border-primary-500 pl-6 mb-8">
        <h2 className="heading-3 text-neutral-900">
          Experience & Recent Projects
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-2 top-6 bottom-6 w-0.5 bg-primary-200"></div>

        <div className="space-y-8">
          {provider.experienceHistory.map((exp, index) => (
            <div key={exp.id} className="relative pl-10">
              {/* Timeline Dot */}
              <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-primary-500 border-4 border-neutral-0 shadow-sm"></div>

              <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-100">
                <h3 className="heading-4 text-neutral-900 mb-2">{exp.title}</h3>
                <div className="flex items-center gap-3 text-neutral-600 body-small mb-3">
                  <span className="font-medium">{exp.client}</span>
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="text-neutral-300 text-xs"
                  />
                  <span>{exp.date}</span>
                </div>
                <p className="body-regular text-neutral-700">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
