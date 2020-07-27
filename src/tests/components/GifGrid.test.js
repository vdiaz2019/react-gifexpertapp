import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas del componente <GifGrid />>', () => {
    const category = 'Samurai X';

    test('Debe mostrarse correctamente el componente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category = { category } />);
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de mostrar items cuando se cargar imágenes useFetchGifs', () => {
        
        const gifs = [{
            id: '123',
            title: 'cualquierCosa.jpg',
            url: 'https://localhost.com'
        },
        {
            id: '456',
            title: 'cualquierCosa.jpg',
            url: 'https://localhost.com'
        }]
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category = { category } />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })
    
})
