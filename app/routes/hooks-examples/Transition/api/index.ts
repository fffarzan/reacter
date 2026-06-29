export async function putQuantityApi(newQuantity: number): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(newQuantity);
        }, 2000);
    });
}
