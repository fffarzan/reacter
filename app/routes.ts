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
] satisfies RouteConfig;
