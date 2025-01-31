import { ArticleCardProps } from '../molecules/ArticleCard/ArticleCard';
import { generateTeaser } from './generateTeaser';

export interface RawArticleData {
    _path: string;
    _tags: string[];
    articleTitle: string;
    _metadata: {
      calendarMetadata: {
        __typename: string;
        name: string;
        value: string;
      }[];
    };
    featuredImage: {
      _path: string;
      _authorUrl: string;
    };
    articleIntro: {
      html: string;
      plaintext: string;
    }[];
  }
  
  export interface RawApiResponse {
    data: {
      articleModelList: {
        items: RawArticleData[];
      };
    };
  }

  export const mapRawDataToArticles = (rawData: RawApiResponse): ArticleCardProps[] => {
    return rawData.data.articleModelList.items.map((item: RawArticleData) => ({
      id: item._path.split('/').pop() || 'unknown',
      articleTitle: item.articleTitle,
      featuredImage: item.featuredImage._authorUrl,
      articleIntro: generateTeaser(item.articleIntro[0]?.plaintext || '', 250),
      articleContent: item.articleIntro[0]?.plaintext,
      categoryTag: item._tags.map(tag => tag.split(":").pop())[0] || 'Unknown',
    }));
  };
