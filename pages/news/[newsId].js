// /news/newsId

import { useRouter } from 'next/router';

function DetailPage() {
  const newsId = useRouter().query.newsId; // 해당 JS 파일의 [] 안에 newsId 라고 써있기때문에 query.newsId, /news/1 로 접속시 newsId 는 1이 된다.
  console.log(newsId);

  return <h1>The Detail Page</h1>;
}

export default DetailPage;
