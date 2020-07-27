import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories = { setCategories } />);
    
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories = { setCategories } />);
    });

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', {
            target: {
                value: value
            }
        });
        expect(wrapper.find('p').text().trim()).toBe(value);
    })

    test('No debe mostrarse la información después del submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault() {} });
        expect(setCategories).not.toHaveBeenCalled();
    })

    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'Samurai X';
        const input = wrapper.find('input');
        input.simulate('change', {
            target: {
                value: value
            }
        })
    
        const form = wrapper.find('form');
        form.simulate('submit', { preventDefault() {} });
        
        expect(wrapper.find('input').prop('value')).toBe('');
        expect(setCategories).toHaveBeenCalledTimes(1);
    })
})
