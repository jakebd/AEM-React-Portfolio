import "./Tag.css"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";


interface TagProps {
    tagText: string;
    articleId?: string;
    categoryTag?: string;
    icon?: FontAwesomeIconProps["icon"];
}

const Tag: React.FC<TagProps> = ({ tagText, articleId, categoryTag, icon }) => {
     if(articleId){
        return (
            <li className="tag__item play blue">
                <Link to={`/article/${articleId}`}>
                    {icon && <FontAwesomeIcon className="icon" icon={icon}/>}
                    {tagText}
                </Link>
            </li>
        );
    }else if(categoryTag){ 
        return (
            <li className="tag__item play blue">
                <Link to={`/category/${categoryTag}`}>
                    {icon && <FontAwesomeIcon className="icon" icon={icon}/>}
                    {tagText}
                </Link>
            </li>
        );
    }else{
        return (
            <li className="tag__item">
                {icon && <FontAwesomeIcon className="icon" icon={icon}/>}
                {tagText}
            </li>
        )
    }
};

export default Tag;