import { News } from "../models/news.model"

const API_KEY = '86fb064a04c94b90ba6a4efc586dff7e'

export const fetcher = () => fetch(`https://newsapi.org/v2/top-headlines?country=fr&sortBy=latest&apiKey=${API_KEY}`)
  .then(response => response.json())
  .then(({ articles }) => (articles as News[])
    .filter(item => !!item.description && !!item.urlToImage)
    .slice(0, 4)
  )
