import * as React from 'react'
import { shallow } from 'enzyme'

import { Radio } from '../../../src/components/ui/Radio'


describe('<Radio/>', () => {
    it('can render', () => {
        const component = shallow(
            <Radio/>,
        )

        expect(component.hasClass('root')).toBeTruthy()
    })

    it('can render in indeterminate state', () => {
        const component = shallow(
            <Radio
                checked={null}
            />,
        )

        expect(component.hasClass('isChecked')).toBeFalsy()
        expect(component.hasClass('isIndeterminate')).toBeTruthy()
    })

    it('can render in checked state', () => {
        const component = shallow(
            <Radio
                checked={true}
            />,
        )

        expect(component.hasClass('isChecked')).toBeTruthy()
        expect(component.hasClass('isIndeterminate')).toBeFalsy()
    })

    it('can render in unchecked state', () => {
        const component = shallow(
            <Radio
                checked={false}
            />,
        )

        expect(component.hasClass('isChecked')).toBeFalsy()
        expect(component.hasClass('isIndeterminate')).toBeFalsy()
    })

    it('can render in disabled, indeterminate state', () => {
        const component = shallow(
            <Radio
                disabled
                checked={null}
            />,
        )

        expect(component.hasClass('isChecked')).toBeFalsy()
        expect(component.hasClass('isIndeterminate')).toBeTruthy()
        expect(component.hasClass('isDisabled')).toBeTruthy()
    })

    it('can render in disabled, checked state', () => {
        const component = shallow(
            <Radio
                disabled
                checked={true}
            />,
        )

        expect(component.hasClass('isChecked')).toBeTruthy()
        expect(component.hasClass('isIndeterminate')).toBeFalsy()
        expect(component.hasClass('isDisabled')).toBeTruthy()
    })

    it('can render in disabled, unchecked state', () => {
        const component = shallow(
            <Radio
                disabled
                checked={false}
            />,
        )

        expect(component.hasClass('isChecked')).toBeFalsy()
        expect(component.hasClass('isIndeterminate')).toBeFalsy()
        expect(component.hasClass('isDisabled')).toBeTruthy()
    })

    it('honors classname from props', () => {
        const component = shallow(
            <Radio
                className="test-classname"
            />,
        )

        expect(component.hasClass('test-classname')).toBeTruthy()
    })

    it('renders ring with custom class', () => {
        const component = shallow(
            <Radio
                checked={true}
                classes={{
                    ring: 'test-ring-classname',
                }}
            />,
        )

        expect(component.find('.ring').hasClass('test-ring-classname')).toBeTruthy()
    })

    it('renders dot with custom class', () => {
        const component = shallow(
            <Radio
                checked={null}
                classes={{
                    dot: 'test-dot-classname',
                }}
            />,
        )

        expect(component.find('.dot').hasClass('test-dot-classname')).toBeTruthy()
    })

    it('emits `onChange` when clicked', () => {
        const stub = jest.fn()
        const component = shallow(
            <Radio
                onChange={stub}
            />,
        )

        component.simulate('click')

        expect(stub).toHaveBeenCalledTimes(1)
        expect(stub).toHaveBeenCalledWith(true)
    })

    it('does not emit `onChange` when clicked if disabled', () => {
        const stub = jest.fn()
        const component = shallow(
            <Radio
                disabled
                onChange={stub}
            />,
        )

        component.simulate('click')

        expect(stub).toHaveBeenCalledTimes(0)
    })
})
