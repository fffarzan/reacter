# Definition

React Fragments are used to group multiple elements without adding extra nodes to the DOM.

## Benfits

- Valid HTML structure: Some elements have strict children rules: a `<select>` only accepts `<option>` and `<optgroup>` children. Fragments let a component return multiple `<option>` siblings without breaking the parent's HTML contract.
- CSS layout integrity (when using `flex` or `grid`).
- HOC and composition.
- Cleaner markup.
- Misconception: Fragments are often described as a performance optimization, on the assumption that one extra `<div>` per component is a meaningful cost. In practice, the cost is negligible. The actual reasons to reach for a fragment are structural, not performance-related.

## Syntax

- `<></>`: it doesn't accept any props.
- `<React.Fragment>` (`key` is the only prop `React.Fragment` accepts).

## Usage

- Returning multiple elements
- Assigning multiple elements to a variable
- Rendering a list of Fragments
- Grouping elements with text

```js
function DateRangePicker({ start, end }) {
    return (
        <>
            From
            <DatePicker date={start} />
            to
            <DatePicker date={end} />
        </>
    );
}
```

## Note

Canary features of Fragments are coming soon...!

# Source

[what are react fragments usedfor](https://www.greatfrontend.com/questions/quiz/what-are-react-fragments-used-for)
[Fragment](https://react.dev/reference/react/Fragment)
