// Article structure
//
// {
//   articleID: string,
//   author: string,
//   datePublished: datetime,
//   dateUpdated: datetime,
//   title: string,
//   shortDescription: string,
//   body: string,
//   averageReadTime: number,
// }

import { articles } from './data/articles';

export default function handler(req, res) {
  res.status(200).json(articles);
}