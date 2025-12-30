import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <h1>Hooks</h1>
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
        <li>
          <Link to="hooks-examples/useDeferredValueExample">
            useDeferredValue example
          </Link>
        </li>
      </ul>
      <h1>APIs</h1>
      <ul>
        <li>
          <Link to="apis-examples/prefetchDNSExample">prefetchDNS example</Link>
        </li>
      </ul>
    </>
  );
}
