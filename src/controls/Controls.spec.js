// Test away!
import React from 'react';
import {render} from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import Controls from './Controls';


test('it renders correctly', ()=> {
  expect(render(<Controls />)).toMatchSnapshot();
});

describe('<Controls />', () => {
  it('button is disabled', ()=> {
    const {getByText, getByTestId,container} = render(
    <Controls locked={true} closed={true}/>
    );
    const disabledButton = getByText(/disabled/i);

    expect(getByTestId(container, disabledButton)).toBeDisabled();
    expect(disabledButton).toHaveAttribute('disabled');
  });
  it('unmounts component after each test', () => {
    console.log(document.body.outerHTML);
  });
});