import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { useStudentContext } from './context/studentContext'; // Adjust the import as necessary

test('renders learn react link', () => {
  render(
    <Student>
      <App />
    </Student>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
