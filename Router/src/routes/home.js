import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <p>
        to <Link to="/products">Products</Link>
        {/* Link경로에 /를 빼면 상대경로로 링크를 찾는데 이는 현재 주소에 products를 붙여서 이동하게됨 */}
      </p>
    </>
  );
};
export default HomePage;
