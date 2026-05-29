# Definition

Manages a promise resolution which can be used to fetch data.

You can use an Effect to fetch data for your component.

## Downsides of using your ouwn fetching hook

- Effects don’t run on the server.
- Makes fetching easy to create “network waterfalls”: You render the parent component, it fetches some data, renders the child components, and then they start fetching their data. If the network is not very fast, this is significantly slower than fetching all data in parallel.
- Usually there is no preload or cache data.

# Sources

[useEffect: fetching data with effects](https://react.dev/reference/react/useEffect#fetching-data-with-effects)
