import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';


describe('Pruebas en <GifGridItem />', () => {
    const title = 'title';
    const url = 'url';
    let wrapper = shallow(<GifGridItem title = {title} url = {url} />);

    beforeEach(() => {
        wrapper = shallow(<GifGridItem title = {title} url = {url} />);
    })

    test('Debe de mostrar <GifGridItem /> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de tener un párrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })
    
    test('Debe de tener un imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');   
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    test('Div debe de tener un animate__fadeIn', () => {
        const img = wrapper.find('div');   
        const className = img.prop('className');
        expect(className.includes('animate__fadeIn')).toBe(true);
    })
})