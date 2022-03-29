//  /news

import Link from 'next/link';

function newsPage() {
  // Link는 앵커 태그를 렌더하지만 클릭시 브라우저의 새 HTML 요청을 막고 로드된 컴포넌트를 로드하고 URL을 바꿈, 마치 페이지를 바꾼 것 처럼

  return (
    <>
      <h1>The News Page</h1>;
      <ul>
        <li>
          <Link href="/news/Something">NextJS Something</Link>
        </li>
        <li>
          <Link href="/">Return Home</Link>
        </li>
      </ul>
    </>
  );
}

export default newsPage;
