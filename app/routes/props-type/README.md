What is the role of PropTypes in React?
PropTypes was React's runtime prop type-checker. You declared expected types, and React would warn in the console when a mismatch occurred in development.

```js
import PropTypes from 'prop-types';

function MyComponent({ name, age }) {
    return (
        <div>
            {name} is {age} years old
        </div>
    );
}

MyComponent.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
};
```

PropTypes is deprecated as of React 19 and no longer ships from the react package. Use TypeScript instead — it catches the same mismatches at compile time and integrates with editor tooling.
