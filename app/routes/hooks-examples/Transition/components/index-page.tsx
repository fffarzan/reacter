export type IndexPageProps = {
    navigate: (url: string) => void;
};

export default function IndexPage({ navigate }: IndexPageProps) {
    return <button onClick={() => navigate('/the-beatles')}>Open The Beatles artist page</button>;
}
