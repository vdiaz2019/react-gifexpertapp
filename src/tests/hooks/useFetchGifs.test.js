import React from 'react';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';


describe('Pruebas en el hook useFetchGifs', () => {
    
    test('debe retornar el estado inicial', async() => {
        const category = 'Samurai X';
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs(category));
        const {data, loading} = result.current;
        
        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })

    test('debe devolver un arreglo de imagenes y el loading igual a false', async() => {
        const category = 'Samurai X';
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs(category));
        await waitForNextUpdate();
        const {data, loading} = result.current;
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    })
})
