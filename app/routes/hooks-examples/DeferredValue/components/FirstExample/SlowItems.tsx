export type SlowItemPropsType = {
    text: string;
};

export default function SlowItem({ text }: SlowItemPropsType) {
    let startTime = performance.now();

    // Do nothing for 1 ms per item to emulate extremely slow code
    while (performance.now() - startTime < 1) {}

    return <li>Text: {text}</li>;
}
