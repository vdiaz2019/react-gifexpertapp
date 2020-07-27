import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('Debe de funcionar correctamente el componente <GifExpertApp />', () => {

    test('Debe de renderizarse correctamente el componente', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    })
    
    test('Debe de mostrar una lista de categorías', () => {
        const categories = ['Samurai X', 'Simpsons'];
        const wrapper = shallow(<GifExpertApp defaultCategories = {categories} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
    
})
