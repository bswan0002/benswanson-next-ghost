import TopNav from "./topNav";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <TopNav />
      <main className="container flex-grow max-w-screen-sm mx-auto mt-16 justify-content md:mt-4">
        {children}
      </main>
      <Footer />
    </div>
  );
}
