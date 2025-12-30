import { prefetchDNS } from "react-dom";

export default function PrefetchDnsExample() {
  prefetchDNS("https://google.com");
  return <div>PrefetchDnsExa</div>;
}
