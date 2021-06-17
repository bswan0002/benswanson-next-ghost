import Link from "next/link";
import { useRouter } from "next/router";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavItems({
  isExpanded,
  navItemsVisible,
  defaultRoutes,
}) {
  const router = useRouter();

  return (
    <div
      className={`fixed top-14 right-1/2 translate-x-1/2 w-full max-w-screen-md transform transition-transform duration-500 ease-in-out ${
        isExpanded ? "translate-y-0 shadow-lg" : "-translate-y-full"
      } ${
        !navItemsVisible && "invisible"
      } bg-gray-800 border-b border-gray-700`}
    >
      <div>
        {defaultRoutes.map((route) => {
          const defaultClass =
            "px-7 py-4 flex cursor-pointer justify-between items-center font-sans tracking-wide border-b border-gray-700 font-bold";
          return router.pathname !== route.path ? (
            <Link href={route.path} key={route.path}>
              <div className={defaultClass}>
                <a>{route.label}</a>

                <FontAwesomeIcon className="h-4" icon={faChevronRight} />
              </div>
            </Link>
          ) : null;
        })}
      </div>
    </div>
  );
}
