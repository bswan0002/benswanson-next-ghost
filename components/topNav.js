// Next/React
import { useState, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
// Components
import NavButton from "./navButton";
import NavItems from "./navItems";
// Hooks
import useOnClickOutside from "../hooks/useOnClickOutside";
// Routes
import routes from "../config/routes";
const defaultRoutes = [routes.home, routes.posts, routes.about];

export default function TopNav() {
  const [isExpanded, setIsExpanded] = useState(false);
  // initialize nav items invisible to fix weird bug where
  // nav items float across screen on initial page load
  const [navItemsVisible, setNavItemsVisible] = useState(false);
  const router = useRouter();

  const ref = useRef();

  useOnClickOutside(ref, () => setIsExpanded(false));

  const getBasePath = (pathname) => {
    return "/" + pathname.split("/")[1];
  };

  const getCurrentRouteLabel = () => {
    return defaultRoutes.find(
      (route) => route.path === getBasePath(router.pathname)
    )?.label;
  };

  return (
    <>
      <div ref={ref} className="z-10 md:hidden">
        <div className="fixed top-0 z-20 flex items-stretch justify-center w-full bg-gray-800 border-b border-gray-700 h-14">
          <div className="flex flex-col w-full h-full max-w-screen-md">
            <div className="flex flex-row justify-between h-full">
              <span className="my-auto font-bold tracking-wide text-white pl-7">
                {getCurrentRouteLabel()}
              </span>
              <NavButton
                isExpanded={isExpanded}
                setIsExpanded={setIsExpanded}
                setNavItemsVisible={setNavItemsVisible}
              />
            </div>
          </div>
        </div>
        <NavItems
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
          navItemsVisible={navItemsVisible}
          defaultRoutes={defaultRoutes}
        />
      </div>
      <div className="w-full bg-gray-800 border-b border-gray-700">
        <div className="hidden max-w-screen-md grid-cols-3 gap-1 mx-auto md:grid">
          {defaultRoutes.map((route) => {
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
        </div>
      </div>
    </>
  );
}
