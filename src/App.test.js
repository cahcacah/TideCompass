// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TideCompass title', () => {
    render(<App />);
    const titleElement = screen.getByText(/TideCompass/i);
    expect(titleElement).toBeInTheDocument();
});
