import { ReactNode } from "react";
import ProviderSidebar from "@/components/sidebar/providerSidebar";

interface ProviderLayoutProps {
  children: ReactNode;
}

export default function ProviderLayout({ children }: ProviderLayoutProps) {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Left Sidebar */}
      <ProviderSidebar />

      {/* Main Content Area with left margin for sidebar */}
      <main className="ml-64">{children}</main>
    </div>
  );
}
