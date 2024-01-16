import { useEffect, useState } from "react"

const NewsPage = () => {

    const [news, setNews] = useState([])

    useEffect(() => {
        fetch('/news/1', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(news)
        })
            .then((res) => res.json())
            .then((data) => setNews([data]))
    }, [])



    return (
        <div>
            {news.map((news) => <div>
                {news.title}
            </div>)}
        </div>
    )
}
export default NewsPage