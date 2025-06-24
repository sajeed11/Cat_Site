// Typing Effect Archived Code
// This code is archived and not in use. It was used to create a typing effect for
// displaying text character by character with a specified speed. The component
// used React hooks to manage the text display and interval for typing effect.
// import { useEffect, useState } from "react";

// const TypingEffect = ({ text, speed }) => {
//   const [displayText, setDisplayText] = useState("");
//   const [textIndex, setTextIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (textIndex < text.length) {
//         setDisplayText((prevText) => prevText + text[textIndex]);
//         setTextIndex((prevIndex) => prevIndex + 1);
//       } else {
//         clearInterval(interval);
//       }
//     }, speed);

//     return () => {
//       clearInterval(interval);
//     };
//   }, [text, textIndex, speed]);

//   return (
//     <p
//       className={`font-poppins font-normal text-[18px] leading-[30.8px] w-1/2 h-32 my-2 text-black`}
//     >
//       {displayText}
//     </p>
//   );
// };

// export default TypingEffect;
