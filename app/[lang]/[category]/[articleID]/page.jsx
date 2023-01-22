export default function Article({params: {lang, category, articleID}}) {
  return (
    <main>
      <p>{lang}</p>
      <p>{category}</p>
      <p>{articleID}</p>
    </main>
  );
}