import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Title from '../../atoms/Title/Title';
import DynamicArticleCard, {DynamicArticleCardProps} from '../../molecules/DynamicArticleCard/DynamicArticleCard';
import axios from 'axios';
import { buildArticleObject } from '../../utils/BuildArticleObject';
import Layout from '../../molecules/Layout/Layout';

const ErrorPage: React.FC = () => {

  const { id } = useParams();
  const [articles, setArticles] = useState<DynamicArticleCardProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

useEffect(() => {
  const fetchArticles = async () => {
    try {
      const response = await axios.get(`/graphql/execute.json/portfolioproject/Dynamic%20Articles%20query`);

      //build the articles objects to work with components 
      const articles = buildArticleObject(response);
      
      //set the articles in state
      setArticles(articles.filter((article) => article)); // Filter out null or undefined

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
      {error ? (
        <>
          <Title size={1}>404 - Page Not Found</Title>
          <p>Sorry, the page you are looking for does not exist.</p>
          <Link to="/" style={{color:'#fad07e', }}>Go Back to Home</Link>
        </>
      ):(
        articles.map((article, index) => {
          return (
            article && (
              <div key={index}>
                <DynamicArticleCard key={article.id} id={article.id} articleTitle={article.articleTitle} featuredImage={article.featuredImage} articleIntro={article.articleIntro} articleContent={article.articleContent} categoryTag={article.categoryTag}  />
              </div>
            )
          );
        })
      )}
    </Layout>
  );
};

export default ErrorPage;