import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../../molecules/Layout/Layout';
import './Article.css'
import Title from '../../atoms/Title/Title';
import Paragraph from '../../atoms/paragraph/paragraph';

export interface ArticleProps {
  article: {
    id: string;
    articleTitle: string;
    featuredImage: string;
    articleContent: string;
  };
}

const Article: React.FC = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<ArticleProps["article"] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`/graphql/execute.json/portfolioproject/Article-By-Path;path=/content/dam/portfolioproject/content-fragments/${id}`);
        setArticle(
            {
                id: response.data.data.articleModelByPath.item._path.split('/').pop() || 'unknown',
                articleTitle: response.data.data.articleModelByPath.item.articleTitle,
                featuredImage: response.data.data.articleModelByPath.item.featuredImage._authorUrl,
                articleContent: response.data.data.articleModelByPath.item.articleIntro[0]?.plaintext
            });
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch the article.');
        console.log(err)
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  if (!article) return <p>Article not found.</p>;

  return (
    <Layout>
      <div className="article">
        {/* Article Header */}
        <Title size={1}>{article.articleTitle}</Title>

        {/* Article Image */}
        <figure className="article-image-container">
          <img
            src={article.featuredImage}
            alt={article.articleTitle}
            className="article-image"
          />
        </figure>

        {/* Article Content */}
        <Paragraph>{article.articleContent}</Paragraph>
      </div>
  </Layout>
  );
};

export default Article;
