import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="border-t border-gray-700 mt-10">
      <div>
        <div className="py-10 flex flex-col items-center">
          <h3 className="text-3xl mb-8">Don't be a stranger ;)</h3>
          <div className="text-lg md:text-xl inline-flex flex-row flex-wrap justify-center place-items-center space-x-7 md:space-x-8">
            <a href="mailto:bswan0002@gmail.com" className="link-classic">
              bswan0002@gmail.com
            </a>

            <a
              href="https://github.com/bswan0002/"
              className="link-classic text-gray-300 h-5 w-5"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/bswan0002/"
              className="link-classic h-5 w-5"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
