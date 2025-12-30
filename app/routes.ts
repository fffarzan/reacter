import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route(
    "hooks-examples/useTransitionExample",
    "routes/hooks-examples/useTransitionExample/index.tsx"
  ),
  route(
    "hooks-examples/useOptimisticExample",
    "routes/hooks-examples/useOptimisticExample/index.tsx"
  ),
  route(
    "hooks-examples/useDeferredValueExample",
    "routes/hooks-examples/useDeferredValueExample/index.tsx"
  ),
  route(
    "apis-examples/prefetchDNSExample",
    "routes/apis-examples/prefetchDnsExample/index.tsx"
  ),
] satisfies RouteConfig;
