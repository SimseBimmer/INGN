import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper"
import React, { useEffect, useState } from "react";
import { fetchArticles } from "../../utils/contentful";
import { useNavigate } from "react-router-dom";

export const AllePage = () => {
    const [articles, setArticles] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchArticles().then(setArticles);
    }, []);

    // Helper to get article by index, repeating if needed
    const getArticle = (idx) => {
        if (!articles.length) return null;
        return articles[idx % articles.length].fields;
    };
    const getArticleId = (idx) => {
        if (!articles.length) return null;
        return articles[idx % articles.length].sys.id;
    };

    // Helper to handle click
    const handleArticleClick = (idx) => {
        const id = getArticleId(idx);
        if (id) navigate(`/article/${id}`);
    };

    return (
        <ContentWrapper>
            <section id="allePageContainer">
                {/* wide article */}
                <div
                    id="wideArticle"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleArticleClick(0)}
                >
                    <div className="ArticleText">
                        {getArticle(0) ? (
                            <>
                                <h2 id="ArticleTitle">{getArticle(0).title}</h2>
                                <p id="ArticleSubTitle">{getArticle(0).headerText}</p>
                                <p id="DateAndAutor">{getArticle(0).authorDate}</p>
                                <div id="ReadMoreContainer">
                                    <p id="ReadMore">Læs mere</p>
                                </div>
                            </>
                        ) : (
                            <>
                                <h2 id="ArticleTitle">Politiet finder gammel mand i deres egen bil</h2>
                                <p id="ArticleSubTitle">Da Københavns politi mandag morgen mædte ind på stationen fik de sig noget af en overraskelse...</p>
                                <p id="DateAndAutor">D. 18/08-2023 - af Janne Melorm</p>
                                <div id="ReadMoreContainer">
                                    <p id="ReadMore">Læs mere</p>
                                </div>
                            </>
                        )}
                    </div>
                    {getArticle(0) && getArticle(0).headerImage && getArticle(0).headerImage.fields ? (
                        <img src={getArticle(0).headerImage.fields.file.url} alt={getArticle(0).headerImage.fields.title || ""} />
                    ) : (
                        <img src="/INGN-Nyheder.png" />
                    )}
                </div>
                <div id="articlesContainer">
                    <div id="Column">
                        {/* 2/3 article */}
                        <div
                            id="twoThirdArticle"
                            style={{ cursor: "pointer" }}
                            onClick={() => handleArticleClick(1)}
                        >
                            <div className="ArticleText">
                                {getArticle(1) ? (
                                    <>
                                        <h2 id="ArticleTitle">{getArticle(1).title}</h2>
                                        <p id="DateAndAutor">{getArticle(1).authorDate}</p>
                                        <p id="ReadMore">Læs mere</p>
                                    </>
                                ) : (
                                    <>
                                        <h2 id="ArticleTitle">Politiet finder gammel mand i deres egen bil</h2>
                                        <p id="DateAndAutor">D. 18/08-2023 - af Janne Melorm</p>
                                        <p id="ReadMore">Læs mere</p>
                                    </>
                                )}
                            </div>
                            {getArticle(1) && getArticle(1).headerImage && getArticle(1).headerImage.fields ? (
                                <img src={getArticle(1).headerImage.fields.file.url} alt={getArticle(1).headerImage.fields.title || ""} />
                            ) : (
                                <img src="/Rectangle 3.png" />
                            )}
                        </div>
                        {/* 1/3 article */}
                        <div
                            id="oneThirdArticle"
                            style={{ cursor: "pointer" }}
                            onClick={() => handleArticleClick(2)}
                        >
                            <div className="ArticleText">
                                {getArticle(2) ? (
                                    <>
                                        <h2 id="ArticleTitle">{getArticle(2).title}</h2>
                                        <p id="DateAndAutor">{getArticle(2).authorDate}</p>
                                        <p id="ReadMore">Læs mere</p>
                                    </>
                                ) : (
                                    <>
                                        <h2 id="ArticleTitle">Politiet finder gammel mand i deres egen bil</h2>
                                        <p id="DateAndAutor">D. 18/08-2023 - af Janne Melorm</p>
                                        <p id="ReadMore">Læs mere</p>
                                    </>
                                )}
                            </div>
                            {getArticle(2) && getArticle(2).headerImage && getArticle(2).headerImage.fields ? (
                                <img src={getArticle(2).headerImage.fields.file.url} alt={getArticle(2).headerImage.fields.title || ""} />
                            ) : (
                                <img src="/Rectangle 6.png" />
                            )}
                        </div>
                    </div>
                    <div id="ColumnTwo">
                        {/* 2/3 article */}
                        <div
                            id="twoThirdArticle"
                            style={{ cursor: "pointer" }}
                            onClick={() => handleArticleClick(3)}
                        >
                            <div className="ArticleText">
                                {getArticle(3) ? (
                                    <>
                                        <h2 id="ArticleTitle">{getArticle(3).title}</h2>
                                        <p id="DateAndAutor">{getArticle(3).authorDate}</p>
                                        <p id="ReadMore">Læs mere</p>
                                    </>
                                ) : (
                                    <>
                                        <h2 id="ArticleTitle">Politiet finder gammel mand i deres egen bil</h2>
                                        <p id="DateAndAutor">D. 18/08-2023 - af Janne Melorm</p>
                                        <p id="ReadMore">Læs mere</p>
                                    </>
                                )}
                            </div>
                            {getArticle(3) && getArticle(3).headerImage && getArticle(3).headerImage.fields ? (
                                <img src={getArticle(3).headerImage.fields.file.url} alt={getArticle(3).headerImage.fields.title || ""} />
                            ) : (
                                <img src="/INGN-Nyheder.png" />
                            )}
                        </div>
                        {/* 1/3 article */}
                        <div
                            id="oneThirdArticle"
                            style={{ cursor: "pointer" }}
                            onClick={() => handleArticleClick(4)}
                        >
                            <div className="ArticleText">
                                {getArticle(4) ? (
                                    <>
                                        <h2 id="ArticleTitle">{getArticle(4).title}</h2>
                                        <p id="DateAndAutor">{getArticle(4).authorDate}</p>
                                        <p id="ReadMore">Læs mere</p>
                                    </>
                                ) : (
                                    <>
                                        <h2 id="ArticleTitle">Politiet finder gammel mand i deres egen bil</h2>
                                        <p id="DateAndAutor">D. 18/08-2023 - af Janne Melorm</p>
                                        <p id="ReadMore">Læs mere</p>
                                    </>
                                )}
                            </div>
                            {getArticle(4) && getArticle(4).headerImage && getArticle(4).headerImage.fields ? (
                                <img src={getArticle(4).headerImage.fields.file.url} alt={getArticle(4).headerImage.fields.title || ""} />
                            ) : (
                                <img src="/INGN-Nyheder.png" />
                            )}
                        </div>
                    </div>
                </div>
                {/* horizontalArticles */}
                <div id="horizontalArticles">
                    {/* horizontal Article One */}
                    <div
                        id="horizontalArticle"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleArticleClick(5)}
                    >
                        {getArticle(5) && getArticle(5).headerImage && getArticle(5).headerImage.fields ? (
                            <img src={getArticle(5).headerImage.fields.file.url} alt={getArticle(5).headerImage.fields.title || ""} />
                        ) : (
                            <img src="/INGN-Nyheder.png" />
                        )}
                        <div id="horizontalArticleText">
                            <div className="ArticleText" id="ahahahah">
                                {getArticle(5) ? (
                                    <>
                                        <h2 id="ArticleTitle">{getArticle(5).title}</h2>
                                        <p id="ArticleSubTitle">{getArticle(5).headerText}</p>
                                        <p id="DateAndAutor">{getArticle(5).authorDate}</p>
                                        <p id="ReadMore">Læs mere</p>
                                    </>
                                ) : (
                                    <>
                                        <h2 id="ArticleTitle">Politiet finder gammel mand i deres egen bil</h2>
                                        <p id="ArticleSubTitle">Da Københavns politi mandag morgen mædte ind på stationen fik de sig noget af en overraskelse...</p>
                                        <p id="DateAndAutor">D. 18/08-2023 - af Janne Melorm</p>
                                        <p id="ReadMore">Læs mere</p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    {/* horizontal Article Two (reversed) */}
                    <div
                        id="horizontalArticle"
                        style={{ flexDirection: "row-reverse", display: "flex", cursor: "pointer" }}
                        onClick={() => handleArticleClick(6)}
                    >
                        {getArticle(6) && getArticle(6).headerImage && getArticle(6).headerImage.fields ? (
                            <img src={getArticle(6).headerImage.fields.file.url} alt={getArticle(6).headerImage.fields.title || ""} />
                        ) : (
                            <img src="/INGN-Nyheder.png" />
                        )}
                        <div id="horizontalArticleText">
                            <div className="ArticleText" id="ahahahah">
                                {getArticle(6) ? (
                                    <>
                                        <h2 id="ArticleTitle">{getArticle(6).title}</h2>
                                        <p id="ArticleSubTitle">{getArticle(6).headerText}</p>
                                        <p id="DateAndAutor">{getArticle(6).authorDate}</p>
                                        <p id="ReadMore">Læs mere</p>
                                    </>
                                ) : (
                                    <>
                                        <h2 id="ArticleTitle">Politiet finder gammel mand i deres egen bil</h2>
                                        <p id="ArticleSubTitle">Da Københavns politi mandag morgen mædte ind på stationen fik de sig noget af en overraskelse...</p>
                                        <p id="DateAndAutor">D. 18/08-2023 - af Janne Melorm</p>
                                        <p id="ReadMore">Læs mere</p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {/* wide articles */}
                <div id="wideArticles">
                    <div
                        id="wideArticle"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleArticleClick(7)}
                    >
                        <div className="ArticleText">
                            {getArticle(7) ? (
                                <>
                                    <h2 id="ArticleTitle">{getArticle(7).title}</h2>
                                    <p id="DateAndAutor">{getArticle(7).authorDate}</p>
                                    <p id="ReadMore">Læs mere</p>
                                </>
                            ) : (
                                <>
                                    <h2 id="ArticleTitle">Politiet finder gammel mand i deres egen bil</h2>
                                    <p id="DateAndAutor">D. 18/08-2023 - af Janne Melorm</p>
                                    <p id="ReadMore">Læs mere</p>
                                </>
                            )}
                        </div>
                        {getArticle(7) && getArticle(7).headerImage && getArticle(7).headerImage.fields ? (
                            <img src={getArticle(7).headerImage.fields.file.url} alt={getArticle(7).headerImage.fields.title || ""} />
                        ) : (
                            <img src="/INGN-Nyheder.png" />
                        )}
                    </div>
                    <div
                        id="wideArticle"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleArticleClick(8)}
                    >
                        <div className="ArticleText">
                            {getArticle(8) ? (
                                <>
                                    <h2 id="ArticleTitle">{getArticle(8).title}</h2>
                                    <p id="DateAndAutor">{getArticle(8).authorDate}</p>
                                    <p id="ReadMore">Læs mere</p>
                                </>
                            ) : (
                                <>
                                    <h2 id="ArticleTitle">Politiet finder gammel mand i deres egen bil</h2>
                                    <p id="DateAndAutor">D. 18/08-2023 - af Janne Melorm</p>
                                    <p id="ReadMore">Læs mere</p>
                                </>
                            )}
                        </div>
                        {getArticle(8) && getArticle(8).headerImage && getArticle(8).headerImage.fields ? (
                            <img src={getArticle(8).headerImage.fields.file.url} alt={getArticle(8).headerImage.fields.title || ""} />
                        ) : (
                            <img src="/INGN-Nyheder.png" />
                        )}
                    </div>
                </div>
            </section>
        </ContentWrapper>
    )
}