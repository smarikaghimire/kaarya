// app/(root)/layout.tsx
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">{children}</main>
      <Footer />
    </>
  );
}
