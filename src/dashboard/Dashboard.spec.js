// Test away
import React from 'react';
import {render, fireEvent} from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import Dashboard from './Dashboard';

  it('renders the display', ()=> {
    const {getByTestId} = render(<Dashboard />);
    const display = getByTestId('display');
    expect(display).toHaveClass('display panel');
  });

  it('renders the controls', () => {
    const {getByTestId} = render(<Dashboard />);
    const controls = getByTestId('controls');
    expect(controls).toHaveClass('controls panel');
  });

