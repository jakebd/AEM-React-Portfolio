
import { Link } from 'react-router-dom';
import './ArticleCard.css'
import Tag from '../../atoms/tag/Tag';
import { faClock, faNewspaper, faTag, faPlay } from '@fortawesome/free-solid-svg-icons';
import Title from '../../atoms/Title/Title';

export interface ArticleCardProps{
    id: string;
    articleTitle: string;
    featuredImage: string;
    articleIntro: string;
    articleContent: string;
    categoryTag: string;
  }
  
export default function ArticleCard({ id, articleTitle, featuredImage, articleIntro, categoryTag }: ArticleCardProps) {
    return (
        <article id={id} className={`postcard dark blue`}>
            <Link to={`/article/${id}`} className="postcard__img_link">
                <img className="postcard__img" src={featuredImage} alt={articleTitle} />
            </Link>
            <div className="postcard__text">
                <div className="postcard__title">
                    <Title size={3} link={`/article/${id}`}>{articleTitle}</Title>
                </div>
                <div className="postcard__preview-txt">{articleIntro}</div>
                <ul className="postcard__tagbox">
                    <Tag tagText='post' icon={faNewspaper}/>
                    <Tag tagText='5 mins' icon={faClock}/>
                    <Tag tagText={categoryTag} icon={faTag} categoryTag={categoryTag}></Tag>
                    <Tag tagText='Read More' icon={faPlay} articleId={id}></Tag>
                </ul>
            </div>
        </article>
    );
}