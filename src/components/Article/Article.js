import React from 'react';
import './Article.css';

const Article = (props) => {
    return (
        <div className="Article">
            <div className="Article__pic">
                <img src={props.pic} alt={props.title} className="img-fluid"/>
            </div>
            <div className="Article__desc">
                <h4 className="Article__title">{props.title}</h4>
                <p>{props.desc}</p>
            </div>
        </div>
    );
};

export default Article;