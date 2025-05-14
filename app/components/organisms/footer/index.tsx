import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaRegEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaRegClock,
} from "react-icons/fa";
import Logo from "@/assets/Images/lifevision-logo.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import GradientComponent from "@/components/molecules/footer/gradient-component";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#0D0D0D] text-white py-10 px-6 w-full lg:h-[540px] flex flex-col justify-between">
      <div className="w-full max-w-[90%] md:max-w-[80%] lg:max-w-[80%] xl:max-w-[90%] mx-auto flex-grow flex flex-col justify-end">
        <div className="flex flex-col lg:flex-row gap-20 mb-15">
          {/* Column 1 - Separate Container */}
          <div className="w-full lg:w-1/3 text-left">
            <img
              src={Logo}
              alt="Social Media"
              className="w-[111px] h-[111px] mb-4"
            />
            <p className="text-sm mb-10">{t("footer.tagline")}</p>
            <div className="flex space-x-4">
              {[
                FaFacebookF,
                FaTwitter,
                FaInstagram,
                FaLinkedinIn,
                FaYoutube,
              ].map((Icon, index) => (
                <div
                  key={index}
                  className="bg-white p-3 w-[35.5px] h-[35.5px] flex items-center justify-center cursor-pointer hover:opacity-80 rounded-sm transition-transform duration-300 transform hover:scale-110"
                >
                  <Icon className="text-red-500 font-bold" />
                </div>
              ))}
              <GradientComponent />
            </div>
          </div>

          {/* Columns 2, 3, 4 - Grouped Container */}
          <div className="w-full lg:w-2/3 ml-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Column 2 */}
            <div className="text-left ml-0 lg:ml-24 xl:ml-24">
              <h3 className="text-lg font-bold mb-5">
                {t("footer.services.title")}
              </h3>
              <ul className="space-y-4 text-sm">
                {[
                  "about",
                  "solution",
                  "approach",
                  "blog",
                  "updates",
                  "contact",
                ].map((key) => (
                  <li
                    key={key}
                    className="transform transition-transform duration-300 hover:scale-105"
                  >
                    {t(`footer.services.${key}`)}
                  </li>
                ))}
              </ul>
            </div>
            {/* Column 3 */}
            <div className="text-left ml-0 lg:ml-16 xl:ml-16">
              <h3 className="text-lg font-bold mb-5">
                {t("footer.quickLinks.title")}
              </h3>
              <ul className="space-y-4 text-sm">
                {["knowledgeBase", "hireExpert", "faq", "contact"].map(
                  (key) => (
                    <li
                      key={key}
                      className="transform transition-transform duration-300 hover:scale-105"
                    >
                      {t(`footer.quickLinks.${key}`)}
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Column 4 */}
            <div className="text-left ml-0 lg:ml-8 xl:ml-8">
              <h3 className="text-lg font-bold mb-5">
                {t("footer.contact.title")}
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center space-x-2">
                  <FaRegEnvelope className="text-lg" />
                  <span>{t("footer.contact.email")}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaPhoneAlt className="text-lg" />
                  <span>{t("footer.contact.phone")}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaMapMarkerAlt className="text-lg" />
                  <span>{t("footer.contact.address")}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaRegClock className="text-lg" />
                  <span>{t("footer.contact.hours")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="w-full max-w-[90%] mx-auto border-t border-white mt-10 pt-4 flex flex-col md:flex-row justify-between items-center px-6 text-sm">
        <div className="text-left">
          <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
        </div>
        <div className="text-right flex space-x-2">
          <Link to="/all-rights" className="hover:underline">
            {t("footer.legal.rights")}
          </Link>
          <span>|</span>
          <Link to="/terms" className="hover:underline">
            {t("footer.legal.terms")}
          </Link>
          <span>|</span>
          <Link to="/privacy" className="hover:underline">
            {t("footer.legal.privacy")}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
