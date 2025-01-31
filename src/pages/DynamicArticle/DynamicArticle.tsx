import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../../molecules/Layout/Layout';
import './DynamicArticle.css'
import Title from '../../atoms/Title/Title';
import Paragraph from '../../atoms/paragraph/paragraph';

export interface DynamicArticleProps {
  article: {
    id: string;
    articleTitle: string;
    featuredImage: string;
    articleContent: Array<{type: string, content: string}>;
  };
}

interface ParagraphModel {
  __typename: "ParagraphModel";
  paragraph?: { plaintext: string };
}

interface TitleModel {
  __typename: "TitleModel";
  title: string;
}

interface ImageModel {
  __typename: "ImageModel";
  image?: { _authorUrl: string };
}

type ArticleContent = ParagraphModel | TitleModel | ImageModel;

const Article: React.FC = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<DynamicArticleProps["article"] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`/graphql/execute.json/portfolioproject/Dynamic-Article-By-Path;path=/content/dam/portfolioproject/content-fragments/${id}`);
        //build the articles objects to work with components 
        const item = response?.data?.data?.dynamicArticleModelByPath?.item;
        const articleObject = {
            id: item._path.split('/').pop() || 'unknown', // Use _path (article title) as a unique ID
            articleTitle: item.articleTitle?.title || "Untitled",
            featuredImage: item.featuredImage._authorUrl,
            articleContent: item.articlecontent.map((content: ArticleContent) => {
                switch (content.__typename) {
                    case "ParagraphModel":
                      return { type: "paragraph", content: content.paragraph?.plaintext || "" };
                    case "TitleModel":
                      return { type: "title", content: content.title || "" };
                    case "ImageModel":
                      return { type: "image", content: content.image?._authorUrl || "" };
                    default:
                     return null;
                }
            }),
            categoryTag: item._tags?.[0]?.split(":")[1] || "Uncategorized", // Extract tag after colon
        };
        setArticle(articleObject);
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
        <div className="article-content">
          {article.articleContent.map((content, index) => {
            switch (content.type) {
              case "paragraph":
                return <Paragraph key={index}>{content.content}</Paragraph>;
              case "title":
                return <Title key={index} size={2}>{content.content}</Title>;
              case "image":
                return (
                  <figure key={index}>
                    <img className="article-image" src={content.content} alt={`Image ${index + 1}`} />
                  </figure>
                );
              default:
                return null;
            }
          })}
        </div>
      </div>
  </Layout>
  );
};

export default Article;
