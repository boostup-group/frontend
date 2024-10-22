import { useContext, useEffect, useState } from "react";
import { RiArrowUpSLine } from "react-icons/ri";
import ThemeOptionContext from "@/Helper/ThemeOptionsContext";
import WhatsAppBubble from "../WhatsAppBubble";

const TapTop = () => {
  const [taptopStyle, setTapTopStyle] = useState("none");
  const { themeOption } = useContext(ThemeOptionContext);

  const executeScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (window.scrollY > 600) {
      setTapTopStyle("block");
    } else {
      setTapTopStyle("none");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="theme-option flex justify-between items-center fixed bottom-5 w-full px-5 z-50">
        {/* <WhatsAppBubble /> */}
        <div className="back-to-top" style={{ display: taptopStyle }}>
          {themeOption?.general?.back_to_top_enable && (
            <a onClick={() => executeScroll()}>
              <RiArrowUpSLine />
            </a>
          )}
        </div>
        <div className="whatsapp-bubble">
          <WhatsAppBubble />
        </div>
      </div>
    </>
  );
};

export default TapTop;
