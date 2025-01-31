//Title.tsx
import { ReactNode } from 'react';
import './Title.css';
import { Link } from 'react-router-dom';

interface TitleProps {
    children: ReactNode;
    size: number;
    link?: string;
    color?: 'brand-primary-text-color' | 'brand-secondary-text-color' | 'brand-tertiary-text-color'; 
    upperCase?: boolean;
    centerText?: boolean;
}

const Title = ({children, size, link, color = 'brand-primary-text-color', upperCase = false, centerText=false}: TitleProps) => {
    const Heading = `h${size >= 1 && size <= 6 ? size : 1}` as keyof JSX.IntrinsicElements;
    const dynamicStyles = {
        fontSize: `${(7 - size) * 0.5}rem`, // Dynamically set font size based on size prop
        margin: `${(7 - size) * 0.2}rem 0`, // Adjust margin proportionally
    };
    
    let classtoUpperCase
    let classCenterText

    if(upperCase){
        classtoUpperCase = "toUpperCase";
    } else {
        classtoUpperCase = "";
    }

    if(centerText){
        classCenterText = "toCenterText";
    } else {
        classCenterText = "";
    }

    return link ? (
        <div className={`grow  ${classCenterText}`} style={dynamicStyles}>
            <div className="link-wrapper">
                <Link to={link} className={`${color} subjectLink ${classtoUpperCase} ${classCenterText}`} >
                    {children}
                </Link>
                <div className="catcard__bar"></div>
            </div>
        </div>
    ) : (
        <Heading className={`${color} sectionHeader ${classtoUpperCase} ${classCenterText}`} style={dynamicStyles}>
            {children}
        </Heading>
    )
};

export default Title;