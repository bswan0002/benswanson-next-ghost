import TopNav from "./topNav";
// import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <TopNav />
      <main className="container flex-grow max-w-screen-sm px-4 mx-auto mt-24 md:mt-12 md:px-0 justify-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}
