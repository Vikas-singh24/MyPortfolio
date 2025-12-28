import { useEffect, useRef } from "react";
import './AnimateOnScroll.css'
const AnimateOnScroll = ({
  children,
  animation = "fade-up",
  delay = "0s",
  duration = "0.8s",
  once = false,
  className="",
  id,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          entry.target.classList.remove("show");
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      id = {id}
      className={`animate ${animation} ${className}`}
      style={{ transitionDelay: delay, transitionDuration: duration }}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
