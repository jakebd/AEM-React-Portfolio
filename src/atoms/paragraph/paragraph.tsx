// Paragraph.tsx
import './paragraph.css'
import { ReactNode } from 'react';

interface ParagraphProps {
    children: ReactNode;
}

const Paragraph = ({children}: ParagraphProps) => {
    return (
        <section className='paragraph-content'>
            {children}
        </section>
    )
};

export default Paragraph;