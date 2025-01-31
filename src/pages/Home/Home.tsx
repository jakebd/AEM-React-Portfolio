import './Home.css';
import Header from '../../molecules/Header/Header';
import Footer from '../../molecules/Footer/Footer';
import ArticleCard from '../../molecules/ArticleCard/ArticleCard';
import Hero from '../../molecules/Hero/Hero';
import heroImg from '../../assets/img/Hero_img.jpg'
import tags from '../../assets/tags';
import axios from 'axios';
import { ArticleCardProps } from '../../molecules/ArticleCard/ArticleCard';
import { useEffect, useState } from 'react';
import { mapRawDataToArticles } from '../../utils/mapRawDataToArticles';
import Title from '../../atoms/Title/Title';

const Home: React.FC = () => {

  const [articles, setArticles] = useState<ArticleCardProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      
      const username = "admin";
      const password = "admin";
      const encodedCredentials = btoa(`${username}:${password}`);

      try {
        const allTagsPromises = tags.map((tag) =>
          axios.get(
            `/graphql/execute.json/portfolioproject/Article-Filter-By-First-Tag;tag=portfolio-tags:${tag.id}`,
            {
              headers: {
                Authorization: `Basic ${encodedCredentials}`,
              },
            }
          )
        );

        const responses = await Promise.all(allTagsPromises);

        const allArticles = responses.flatMap((response) =>
          mapRawDataToArticles(response.data)
        );
        
        setArticles(allArticles.filter((article) => article)); // Filter out null or undefined
        setLoading(false);

      } catch (err) {
        setError('Failed to fetch articles. Please try again later.');
          console.log(err);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) return <p>Loading...</p>;

  const hero = {
    imageUrl: heroImg,
    title: "Jacob Dixon",
    subtitle: "Please explore my latest projects as an upcoming Web Developer",
  }

  return (
    <>
      <Header/>
      <Hero imageUrl={hero.imageUrl} title={hero.title} subtitle={hero.subtitle}/>
      <main className="home">
        <Title upperCase={true} centerText={true} size={1}>Most Recent Projects</Title>
        {error ? (
          <Title size={5} centerText={true}>No Projects Yet! Check Back Later</Title>
        ):(
          tags.map((tag, index) => {
            const article = articles[index];
            return (
              article && (
                <div key={tag.id}>
                  <Title size={2} link={`/category/${tag.id}`}>{tag.name}</Title>
                  <ArticleCard key={article.id} id={article.id} articleTitle={article.articleTitle} featuredImage={article.featuredImage} articleIntro={article.articleIntro} articleContent={article.articleContent} categoryTag={article.categoryTag}  />
                </div>
              )
            );
          })
        )}
      </main>
      <Footer/>
    </>
  );
};

export default Home;
