import { useEffect, useState } from "react";
import { getMovie } from "./api";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";

const Banner = styled.div`
  height: 80vh;
  background-color: lightgray;
`;
const Container = styled.div`
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
`;
const Con = styled.div``;
const Bg = styled.img``;

export const Home = () => {
  const [movieData, setmovieData] = useState();
  const [resultData, setresultData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const result = await getMovie(1);
        // 숫자 1은 페이지 값
        setmovieData(result?.results);
        // 영화 데이터 배열값 저장
        setresultData(result);
        // 요청값 저장
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const fetchData = async () => {
    try {
      let page = (resultData.page += 1);
      if (resultData.page <= resultData.total_pages) {
        //
        const { results } = await getMovie(page);
        setmovieData(movieData.concat(results));
        console.log(results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(movieData);
  //   console.log("데이터" + resultData);
  //   console.log(movieData?.backdrop_path);

  return (
    <div>
      <Banner>
        {movieData && (
          <Container>
            <InfiniteScroll
              dataLength={movieData.length}
              next={fetchData}
              hasMore={true}
            >
              <div>
                {movieData.map((data) => (
                  <Con key={data.id}>
                    <Link
                      to={`detail/${data.id}`}
                      state={{ title: data.title }}
                    >
                      <Bg
                        src={`https://image.tmdb.org/t/p/w500/${data?.backdrop_path}`}
                      ></Bg>
                    </Link>
                  </Con>
                ))}
              </div>
            </InfiniteScroll>
          </Container>
        )}
      </Banner>
    </div>
  );
};
// npm사이트 : react-infinite-scroll-component
