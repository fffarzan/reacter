import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
    index('routes/home.tsx'),

    route('hooks-examples/transition', 'routes/hooks-examples/Transition/index.tsx'),
    route('hooks-examples/optimistic', 'routes/hooks-examples/Optimistic/index.tsx'),
    route('hooks-examples/deferred-value', 'routes/hooks-examples/DeferredValue/index.tsx'),
    route('hooks-examples/callback', 'routes/hooks-examples/Callback/index.tsx'),
    route('hooks-examples/layout-effect', 'routes/hooks-examples/LayoutEffect/index.tsx'),
    route('hooks-examples/context', 'routes/hooks-examples/Context/index.tsx'),

    route('apis-examples/prefetchDNSExample', 'routes/apis-examples/prefetchDnsExample/index.tsx'),

    route('infinite-scroll/from-scratch', 'routes/infinite-scroll/from-scratch/index.tsx'),
    route(
        'rendering/parent-child-rendering-priority',
        'routes/rendering/parent-child-rendering-priority/index.tsx',
    ),
] satisfies RouteConfig;
