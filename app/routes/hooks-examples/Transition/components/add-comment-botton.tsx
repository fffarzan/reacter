import { useTransition } from 'react';

function addComment(comment: string) {
    // For demonstration purposes to show Error Boundary
    if (comment == null) {
        throw new Error('Example Error: An error thrown to trigger error boundary');
    }
}

export default function AddCommentButton() {
    const [pending, startTransition] = useTransition();

    return (
        <button
            disabled={pending}
            onClick={() => {
                startTransition(() => {
                    // Intentionally not passing a comment
                    // so error gets thrown
                    addComment();
                });
            }}
        >
            Add comment
        </button>
    );
}
