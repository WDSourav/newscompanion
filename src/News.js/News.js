import { useEffect, useState } from "react";
import "./News.css";

const News = () => {

    const [myNews, setMyNews] = useState([])

    const fetchData = async () => {
        let url = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=9dbda4ab0df04a0d8286821f49a6c827");

        let data = await url.json();

        setMyNews(data.articles)
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
            <>
            <div className="mainDiv">
            {myNews.map((ele) => {
                    console.log(ele)
                    return (
                    <>
                        <div className="card" style={{ width: "350px", height: "500px", marginLeft: "7.2rem", marginTop:"5rem" }}>
                                <img src={ele.urlToImage == null ? "https://www.hindustantimes.com/ht-img/img/2024/03/20/1600x900/Narendra_Modi_rising_bharat_1710949743154_1710949743386.jpg" : ele.urlToImage} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{ele.title}</h5>
                                    <p className="card-text">{ele.description}</p>
                                 <a href={ele.url} target="_blank" className="btn btn-primary">Read more</a>
                                </div>
                            </div>
                    </>
                    )
                })}
            </div>
            </>
    );
};



export default News
