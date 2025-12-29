import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <h1 className="mb-4">HOME</h1>
      <ul>
        <li>
          <Link to="hooks-examples/useTransitionExample">
            useTransition example
          </Link>
        </li>
        <li>
          <Link to="hooks-examples/useOptimisticExample">
            useOptimistic example
          </Link>
        </li>
      </ul>
    </>
  );
}
