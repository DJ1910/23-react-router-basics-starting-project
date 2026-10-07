import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  function navigateClickHandler() {
    navigate("products");
  }

  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to the <Link to="products">Products page</Link> .
      </p>
      <p>
        <button onClick={navigateClickHandler}>Navigate</button>
      </p>
    </>
  );
}
