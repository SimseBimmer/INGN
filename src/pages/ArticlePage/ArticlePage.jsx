import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticles } from "../../utils/contentful";
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";
import "./ArticlePage.scss";

const ArticlePage = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        fetchArticles().then(articles => {
            const found = articles.find(a => a.sys.id === id);
            setArticle(found ? found.fields : null);
        });
    }, [id]);

    if (!article) {
        return <ContentWrapper><div>Indlæser artikel...</div></ContentWrapper>;
    }

    return (
        <ContentWrapper>
            <section className="articlePageSection">
                <div className="articlePageContainer">
                    {article.headerImage && article.headerImage.fields && (
                        <img
                            className="articlePageImage"
                            src={article.headerImage.fields.file.url}
                            alt={article.headerImage.fields.title || ""}
                        />
                    )}
                    <h2 id="ArticleTitle" className="articlePageTitle">
                        {article.title}
                    </h2>
                    <p id="DateAndAutor" className="articlePageAuthor">
                        {article.authorDate}
                    </p>
                    <div className="articlePageText">
                        {article.description && (
                            <p>{article.description}</p>
                        )}
                        {article.descriptionTwo && (
                            <p>{article.descriptionTwo}</p>
                        )}
                        {article.descriptionThree && (
                            <p>{article.descriptionThree}</p>
                        )}
                    </div>
                </div>
            </section>
        </ContentWrapper>
    );
};

export default ArticlePage;
                          