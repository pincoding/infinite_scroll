import { useLocation, useNavigate } from "react-router-dom";

export const Detail = () => {
  const {
    state: { title },
  } = useLocation();
  const nav = useNavigate();

  const homeClick = () => {
    nav("/", { state: { good: 123 } });
  };

  return (
    <div>
      <h2>Detail</h2>
      <h3>받아온 데이터값 : {title}</h3>
      <button onClick={homeClick}>홈</button>
    </div>
  );
};
