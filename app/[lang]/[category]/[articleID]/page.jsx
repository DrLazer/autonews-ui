import { notFound } from 'next/navigation';

const getArticle = async (articleID) => {
  const res = await fetch('http://localhost:3000/api/articles');
  const articles = await res.json();
  const article = articles.find((article) => article?.articleID === articleID);

  if (!article) {
    notFound();
  }

  return article;
};

export default async function Article({params: {lang, category, articleID}}) {
  const article = await getArticle(articleID);

  return (
    <main>
      <p>{article.title}</p>
      <p>{article.author}</p>
      <p>Published: {new Date(article.datePublished).toLocaleDateString()}</p>
      <p>Average read time: {article.averageReadTime}</p>
      <p>{article.body}</p>
    </main>
  );
}