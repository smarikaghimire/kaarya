import React from "react";
import ProfileHeader from "./_components/ProfileHeader";
import ProfileSidebar from "./_components/ProfileSidebar";
import AboutSection from "./_components/AboutSection";
import SpecializationsSection from "./_components/SpecializationSection";
import PortfolioSection from "./_components/PortfolioSection";
import ExperienceSection from "./_components/ExperienceSection";
import ReviewsSection from "./_components/ReviewSection";
import LicensesSection from "./_components/LicenseSection";
import { getProviderBySlug } from "./_components/providerData";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServiceProviderProfile({ params }: PageProps) {
  // Await the params Promise
  const { slug } = await params;
  const provider = getProviderBySlug(slug);

  // If provider not found, show 404
  if (!provider) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Profile Header */}
      <ProfileHeader provider={provider} />

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Main Content */}
          <div className="flex-1 space-y-8">
            <AboutSection provider={provider} />
            <SpecializationsSection provider={provider} />
            <PortfolioSection provider={provider} />
            <ExperienceSection provider={provider} />
            <ReviewsSection provider={provider} />
            <LicensesSection provider={provider} />
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:w-[380px]">
            <div className="lg:sticky lg:top-8 space-y-6">
              <ProfileSidebar provider={provider} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static params for all providers
export async function generateStaticParams() {
  const { getAllProviders } = await import("./_components/providerData");
  const providers = getAllProviders();

  return providers.map((provider) => ({
    slug: provider.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  // Await params here too
  const { slug } = await params;
  const { getProviderBySlug } = await import("./_components/providerData");
  const provider = getProviderBySlug(slug);

  if (!provider) {
    return {
      title: "Provider Not Found",
    };
  }

  return {
    title: `${provider.name} - ${provider.title} | Karya`,
    description: provider.about.paragraphs[0],
    keywords: `${provider.title}, ${
      provider.location
    }, ${provider.services.join(", ")}`,
  };
}
