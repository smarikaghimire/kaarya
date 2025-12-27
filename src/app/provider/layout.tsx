import { ReactNode } from "react";
import ProviderSidebar from "@/components/provider-navbar/providerSidebar";
import ProviderTopbar from "@/components/provider-navbar/providerTopbar";

interface ProviderLayoutProps {
  children: ReactNode;
}

export default function ProviderLayout({ children }: ProviderLayoutProps) {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Left Sidebar */}
      <ProviderSidebar />

      {/* Main Content Area with left margin for sidebar */}
      <main className="ml-64">
        {/* Topbar */}
        <ProviderTopbar />

        {/* Page Content */}
        {children}
      </main>
    </div>
  );
}
