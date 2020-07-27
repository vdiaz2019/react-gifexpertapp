import {getGifs} from '../../helpers/getGifs';

describe('Pruebas con getGifs Fetch', () => {

    test('Debe de traer 10 elementos', async() => {
        const gifs = await getGifs('Samurai X');
        expect(gifs.length).toBe(10);
    })

    test('Sino enviamos categoría debe de traer 0 elementos', async() => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    })
})