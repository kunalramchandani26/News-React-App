import React, { useState, useEffect } from "react";
import NewsItems from "./NewsItems";

export default function News() {
    const [articles, setarticles] = useState([]);

    const updateNews = async () => {
        const url =
            "https://newsapi.org/v2/top-headlines?country=us&apiKey=7215d1813d32434b9d5e86563bef50d4";
        let data = await fetch(url);
        let parsedData = await data.json();
        setarticles(parsedData.articles);
    };

    useEffect(() => {
        updateNews();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="row row-cols-1 row-cols-md-4 g-4">
            {articles.map((element) => {
                return (
                    <div key={element.url}>
                        <NewsItems
                            title={element.title ? element.title : ""}
                            description={element.description ? element.description : ""}
                            urlToImage={element.urlToImage}
                            url={element.url}
                            author={element.author}
                        />
                    </div>
                );
            })}
        </div>);
}

