import { useEffect, useState } from 'react';
import styles from '../styles';

const TypingEffect = ({ text, speed }) => {
    const [displayText, setDisplayText] = useState('');
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (textIndex < text.length) {
                setDisplayText((prevText) => prevText + text[textIndex]);
                setTextIndex((prevIndex) => prevIndex + 1);
            } else {
                clearInterval(interval);
            }
        }, speed);

        return () => {
            clearInterval(interval);
        };
    }, [text, textIndex, speed]);

    return <p className={`${styles.paragraph} max-w-[470px] mt-3`}>{displayText}</p>;
};

export default TypingEffect;
