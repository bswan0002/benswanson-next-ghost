import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import routes from "../config/routes";
import { Menu, X } from "react-feather";

const defaultRoutes = [routes.home, routes.posts];

export default function Header() {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const router = useRouter();
  const currPathName = router.pathname;
  const routesAsArr = Object.keys(routes).map((r) => routes[r]);
  const mobileTitle =
    currPathName === "/"
      ? "Home"
      : routesAsArr
          .filter((r) => r.path !== "/")
          .find((r) => currPathName.includes(r.path))?.label;

  return (
    <div
      className={`fixed top-0 z-10 w-full backdrop-filter backdrop-blur-lg bg-opacity-50 ${
        isExpanded ? "pt-2" : "py-2"
      } bg-gray-800 border-b border-gray-700 md:pt-2 md:pb-0 md:z-auto md:relative md:bg-opacity-70 filter-blur`}
    >
      {/* Mobile nav */}
      <div className="flex flex-col md:hidden">
        <div className="items-center py-2 text-white">
          <p
            className="pl-4 font-sans text-sm font-semibold"
            onClick={() => setIsExpanded(false)}
          >
            {mobileTitle}
          </p>
          <button
            className="z-9 absolute right-4 top-2.5 my-2 focus:outline-none"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label="toggle menu"
          >
            {isExpanded ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
        {isExpanded && (
          <div className="w-full h-px mt-2 bg-gray-700 bg-opacity-10" />
        )}
        {isExpanded &&
          defaultRoutes.map((route) => {
            const defaultClasses = `pl-4 font-sans items-center border-t border-gray-700 py-4 font-semibold text-sm text-white text-opacity-80`;

            return route.path !== router.pathname ? (
              <Link href={route.path} key={route.path}>
                <a className={`${defaultClasses}`}>{route.label}</a>
              </Link>
            ) : null;
          })}
      </div>
      {/* End mobile nav */}

      {/* Desktop nav */}
      <div className="hidden max-w-screen-md grid-cols-4 gap-1 mx-auto md:grid">
        {defaultRoutes.map((route) => {
          console.log(route);
          const isActive = route.path === router.pathname;
          const defaultClasses = `font-sans font-semibold flex rounded items-center justify-center py-2 text-sm`;
          const activeClasses = `bg-gray-100 bg-opacity-5 text-white border-b border-gray-100 border-opacity-50`;
          const inactiveClasses = `hover:bg-gray-100 hover:bg-opacity-5 transition-colors duration-200 text-white text-opacity-75 hover:text-opacity-100`;
          return (
            <Link href={route.path} key={route.path}>
              <a
                className={`
                ${defaultClasses} 
                ${isActive ? activeClasses : inactiveClasses}`}
              >
                {route.label}
              </a>
            </Link>
          );
        })}
        {/* End desktop nav */}
      </div>
    </div>
  );
}
