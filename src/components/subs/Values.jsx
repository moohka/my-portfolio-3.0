import { useEffect, useRef } from "react";

const Values = () => {
  //scroll-effect
  const dynamicRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    observer.observe(dynamicRef.current);

    return () => observer.disconnect();
  }, []);
  return (
    <div className="values">
      <div className="value-box" id="first-box">
        <div className="text-box">
          <span className="box-span">Efficient,</span>
          <span className="box-span">concise and structured coding.</span>
        </div>

        <div className="text-landing-spot"></div>
      </div>

      <div className="value-box" id="second-box" ref={dynamicRef}>
        <div className="text-box">
          <span className="box-span">Dynamic,</span>
          <span className="box-span" id="wave-span">
            <span>m</span>
            <span>a</span>
            <span>k</span>
            <span>e&nbsp;</span>

            <span>s</span>
            <span>t</span>
            <span>a</span>
            <span>t</span>
            <span>i</span>
            <span>c&nbsp;</span>

            <span>p</span>
            <span>a</span>
            <span>g</span>
            <span>e&nbsp;</span>

            <span>c</span>
            <span>o</span>
            <span>m</span>
            <span>e</span>
            <span>s&nbsp;</span>

            <span>t</span>
            <span>o&nbsp;</span>

            <span>l</span>
            <span>i</span>
            <span>f</span>
            <span>e&nbsp;</span>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Values;
