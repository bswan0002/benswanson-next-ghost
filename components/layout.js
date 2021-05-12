import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="flex-grow container mx-auto max-w-screen-sm justify-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}
