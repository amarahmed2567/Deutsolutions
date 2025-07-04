import { useEffect, useState } from "react";
import styles from "./AnimatedText.module.css"; 

const {MainText,AnimatedWord} =styles
const words = ["Translation", "AI", "Education", "Automation"];

export default function AnimatedText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className={MainText}>
      <span key={index} className={AnimatedWord}>
        {words[index]}
      </span>
    </h1>
  );
}
