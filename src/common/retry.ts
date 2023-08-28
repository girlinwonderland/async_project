
const TIMES = 3;
const DELAY = 1000;

const delay = (timer: number) => new Promise((res) => setTimeout(res, timer));

/** Функция позволяет перезапрашивать другие функции с небольшой задержкой при появлении ошибки */
export const retry = async <T, M>(request: (body?: M) => Promise<T>, body?: M): Promise<T | undefined> => {
    let retryNumber = TIMES;
    let result;

    while (retryNumber > 0){
        try {
            const data = await request(body);
            retryNumber = 0;
            result = data
        } catch (e) {
            await delay(DELAY);
            retryNumber -= 1;
        }
    }
    return result;
}
