import './Category.css'
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../../molecules/Layout/Layout';
import ArticleCard from '../../molecules/ArticleCard/ArticleCard';
import { mapRawDataToArticles } from '../../utils/mapRawDataToArticles';
import { ArticleCardProps } from '../../molecules/ArticleCard/ArticleCard';
import Title from '../../atoms/Title/Title';

const Category: React.FC = () => {
    const { id } = useParams();
    const [articles, setArticles] = useState<ArticleCardProps[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(`/graphql/execute.json/portfolioproject/Article-Filter-By-Tag;tag=portfolio-tags:${id}`);
        const allArticles = mapRawDataToArticles(response.data)
        setArticles(allArticles);
        setLoading(false);

      } catch (err) {
        setError('Failed to fetch the article.');
        console.log(err)
        setLoading(false);
      }
    };
    fetchArticles();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return (
    <Layout>
      <Title size={2}>Explore My latest {id} Projects</Title>
      <br/>
      <div className="articles-container">
        {error || !articles || articles.length === 0 ? (
          <>
            <h1>Nothing Published Yet!</h1>
            <p>Please Try Again Later: <Link className='return-link' to="/">Return Home</Link></p>
          </>
        ):(
          articles.map((article) => {
            return(<ArticleCard key={article.id}id={article.id} articleTitle={article.articleTitle} featuredImage={article.featuredImage} articleIntro={article.articleIntro} articleContent={article.articleContent} categoryTag={article.categoryTag} />)
          })
        )}
      </div>
    </Layout>
  );
};

export default Category;
