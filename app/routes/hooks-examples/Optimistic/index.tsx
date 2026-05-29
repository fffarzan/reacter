import TodoApp from './components/TodoApp';

const initialTodos = [
    {
        id: '1',
        title: 'first',
    },
    {
        id: '2',
        title: 'second',
    },
];

export default function Page() {
    return <TodoApp initialTodos={initialTodos} />;
}
