import './Hero.css';
import Title from '../../atoms/Title/Title';

interface HeroProps {
  imageUrl: string;
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ imageUrl, title, subtitle }) => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="hero-overlay">
        <div className="hero-text">
          <Title size={1}>{title}</Title>
          <Title size={4}>{subtitle}</Title>
        </div>
      </div>
    </section>
  );
};

export default Hero;