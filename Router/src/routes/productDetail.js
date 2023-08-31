import { useParams, Link } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();

  return (
    <>
      Product Detail of {productId}!
      <p>
        <Link to="..">Back</Link>
      </p>
      <p>
        <Link to=".." relative="path">
          Back relative
        </Link>
      </p>
      {/* 여기 링크의 ..는 리눅스 명령어 처럼 상위(이전)주소로 가라는 뜻인데 ProductDetail에서
      뒤로가기를 하면 원랜 Product로 가야하지만 router설정에서 ProductDetail가 Product의 자식 
      이 아닌 형제로 설정했기 때문에 ProductDetail에서 뒤로 가면 ProductDetail의 상위인 홈으로 가게 
      된다

      하지만 Link에서 relative특성을 주고 path로 값을 주면 위처럼 ProductDetail가 Product의 자식으로
      설정을 안해놔도 url의 경로에 맞춰 ProductDetail의 이전 경로인 Product로 가게 된다
      */}
    </>
  );
};
export default ProductDetail;
