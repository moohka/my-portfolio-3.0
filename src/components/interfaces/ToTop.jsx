import { useRef, useEffect } from "react";

const ToTop = () => {
  const totopRef = useRef();

  useEffect(() => {
    window.onscroll = () => {
      let scrollTop = document.documentElement.scrollTop;
      if (scrollTop > "1000") {
        totopRef.current.classList.add("show");
      } else {
        totopRef.current.classList.remove("show");
      }
    };
  }, []);

  return (
    <button
      className="totop"
      ref={totopRef}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      △
    </button>
  );
};

export default ToTop;
