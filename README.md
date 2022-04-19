# Grip_React_sooohka

[홈페이지](http://sooohka-movie.s3-website.ap-northeast-2.amazonaws.com)

## Installation

```sh
yarn install
```

## Usage

```sh
yarn start
```

## Tech Stack

![React](https://img.shields.io/badge/-React%2017-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![Typescript](https://img.shields.io/badge/-typescript-3178C6?logo=typescript&logoColor=white&style=for-the-badge)
![Redux](https://img.shields.io/badge/-Redux-764ABC?logo=redux&logoColor=white&style=for-the-badge)
![Styled-Components](https://img.shields.io/badge/-styled%20Component-DB7093?logo=styled-components&logoColor=white&style=for-the-badge)

## 프로젝트 구조

```sh
src
 ├── @types # type 선언파일들을 모아놓은 폴더
 ├── assets # 각종 assets들을 모아놓은 폴더
 ├── components # 앱 전역에 사용하는 컴포넌트들을 모아놓은 폴더
 ├── domains # 앱 내에서 사용하는 큰 기능을 분리하기 위한 폴더
 │   │
 │   └── 기능(search, favorites)
 │       ├── api # 현재 도메인과 관련된 api들을 모아놓은 폴더
 │       ├── components # 현재 도메인과 관련된 컴포넌트들을 모아놓은 폴더
 │       ├── hooks # 현재 도메인과 관련된 훅들을 모아놓은 폴더
 │       ├── page # 현재 도메인을 나타내는 페이지를 두는 폴더
 │       └── routes # 현재 도메인과 관련된 라우트들을 모아놓은 폴더
 │
 ├── hooks # 앱 전역에서 사용하는 훅들을 모아놓은 폴더
 ├── modules # 써드파티 라이브러리나, 각종 모듈들을 모아놓은 폴더
 ├── provider # 앱내에서 사용되는 provider들을 모아놓은 폴더
 ├── routes # 앱에서 사용하는 라우터가 있는 폴더
 ├── styles # 스타일 관련 코드들이 있는 폴더
 └── utils # 앱 전역에서 사용되는 유틸리티 함수들이 있는 폴더
```

## 개발 컨셉

- 앱 내의 데이터들은 redux라이브러리를 사용해서 구현해 action이 dispatch될때만 상태가 업데이트되어 개발자가 현재 상태를 예측하기 쉽도록 구현했습니다.
- 컴포넌트의 재사용성을 고려해 컴포넌트가 최대한 불필요한 상태를 갖지 않도록 하였고 컴포넌트를 구성하는 요소들은 props를 통해 부모로 부터 전달받도록 구현했습니다. 또한 커스텀 훅을 사용해서 로직과 뷰를 분리해 기능개발과 컴포넌트 개발을 깔끔하게 하고자 했습니다.

## 개발하면서 어려웠던 점

1. 영화 검색을 현재 url의 search query를 기준으로 하는데 다른경로로 라우팅을 한 다음에 다시 돌아왔을때 search query가 초기화되서 스크롤을 내려도 영화 검색이 안되는 이슈가 있었습니다. [이슈보기](https://github.com/sooohka/Grip_React_sooohka/issues/9)

```javascript
// useMovieSearch.ts
useEffect(() => {
  sessionStorageApi.saveState("search-query", query || "");
}, [query]);
```

- 실제 쿼리값이 바뀔때마다 미리 만들어둔 saveState함수를 활용해 session storage 에 쿼리값을 저장 한 뒤

```javascript
// Footer.ts

useEffect(() => {
  setQuery(sessionStorageApi.getState("search-query"));
}, []);

return <Link to={query ? `/search?s=${query}` : "/search"} />;
```

- getState함수를 활용해 query값을 가져온 다음 Link컴포넌트의 to속성에 전달해줘서 이슈를 해결했습니다.

<br/>

2. 무한 스크롤 구현
   브라우저 api에 포함되어 있는 intersectionObserver인스턴스를 이용해서 구현했습니다.
   IntersectionObserver는 생성할떄 observerCallback을 받습니다. observerCallback은 최초 observe함수 실행시와 IntersectionObserver가 타겟으로 전달된 요소를 감지할때 실행되는데 이를 활용해서 제일 하단에 있는 요소의 reference를 타겟으로 전달해서 타겟이 현재 viewport에 감지될 때 마다 영화요청을 보내도록 구현했습니다.

   ```typescript
   useEffect(() => {
     const observer = new IntersectionObserver(observerCallback, {
       threshold: 1,
     });
     if (target.current) {
       observer.observe(target.current);
     }
     return () => {
       observer.disconnect();
     };
   }, [observerCallback]);
   ```

   - observerCallback이 바뀔떄마다 useEffect cleanUp function에서 전에 요청을 disconnect하고 새로운 타겟을 감시하도록 구현했습니다.

   ```typescript
   const observerCallback = useCallback(
     (entries) => {
       const [currentTarget] = entries;
       const isDone = totalResults <= movies.length;
       if (currentTarget.isIntersecting && isDone === false) {
         if (isFetchingMovies) {
           return;
         }
         incrementPage();
       }
     },
     [incrementPage, isFetchingMovies, movies.length, totalResults]
   );
   ```

   - IntersectionObserver가 현재 타겟을 보게되면 page가 남아있는 한 page를 증가하도록 했습니다.

   ```javascript
   useEffect(() => {
     if (isMount.current || page === 1) {
       return;
     }
     fetchMovies(() => getMoviesBySearchParam({ page, s: query }));
   }, [fetchMovies, page, query]);
   ```

   - page가 증가되면 api서버에 영화요청을 보내도록 했습니다.
