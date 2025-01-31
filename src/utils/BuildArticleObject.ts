import { ArticleCardProps } from "../molecules/ArticleCard/ArticleCard";
import { generateTeaser } from "./generateTeaser";

export interface RawArticleData {
    _path: string;
    articleTitle: { title: string; _path: string };
    featuredImage: { _path: string; _authorUrl: string;};
    articlecontent: Array<
      | {
          __typename: "ParagraphModel";
          paragraph: { plaintext: string };
          _path: string;
        }
      | {
          __typename: "ImageModel";
          image: { _path: string };
          _path: string;
        }
      | {
          __typename: "TitleModel";
          title: string;
          _path: string;
        }
    >;
    _tags: string[];
  }


export interface RawApiResponse {
    data: {
        data: {
            dynamicArticleModelList: {
                items: RawArticleData[];
            }
        };
    };
}


export const buildArticleObject = (rawData: RawApiResponse): ArticleCardProps[] => {
    const items = rawData?.data?.data?.dynamicArticleModelList?.items;
  
    if (!items) {
      throw new Error("Invalid data structure");
    }
  
    const articleObjects = items.map((item) => {
        // Initialize the article object
        const articleObject = {
            id: item._path.split('/').pop() || 'unknown', // Use _path as a unique ID
            articleTitle: item.articleTitle?.title || "Untitled",
            featuredImage: item.featuredImage._authorUrl,
            articleIntro: generateTeaser(item.articlecontent.find((content) => content.__typename === "ParagraphModel")?.paragraph?.plaintext || "") ,
            articleContent: item.articlecontent
                .map((content) => {
                    switch (content.__typename) {
                        case "ParagraphModel":
                        return `<p>${content.paragraph?.plaintext || ""}</p>`;
                        case "TitleModel":
                        return `<h2>${content.title || ""}</h2>`;
                        case "ImageModel":
                        return `<img src="${content.image?._path || ""}" alt=""/>`;
                        default:
                        return "";
                    }
                }).join(""),
            categoryTag: item._tags?.[0]?.split(":")[1] || "Uncategorized", // Extract tag after colon
        };
        return articleObject
    })
    
    return articleObjects
    
  }
  