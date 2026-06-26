'use server';

import fs from 'fs';

export async function addTodo(prevState: any, formData: any) {
    const todo = formData.get('todo');

    // validation arguments
    if (!todo || todo.trim().length < 3) {
        return {
            error: 'Todo must be at least 3 characters',
            success: false,
        };
    }
    if (todo.length > 100) {
        return {
            error: 'Todo too long (max 100 chars)',
            success: false,
        };
    }

    try {
        fs.readFile('data.json', 'utf8', (err, data) => {
            if (err) {
                console.error('err:', err);
                return;
            }

            let jsonArray = JSON.parse(data);
            jsonArray.push({
                text: todo,
                createdAt: new Date(),
            });

            const updatedJson = JSON.stringify(jsonArray, null, 2);
            fs.writeFile('data.json', updatedJson, 'utf8', (err) => {
                if (err) {
                    console.error('err:', err);
                } else {
                    console.log('Successful');
                }
            });
        });

        // revalidatePath('/todos'); // Refresh the page data

        return {
            success: true,
            message: 'Todo added!',
        };
    } catch (err) {
        return {
            error: `err: ${err}`,
            success: false,
        };
    }
}
