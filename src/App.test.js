import { render, screen } from '@testing-library/react';
import App from './App';

test('muestra el nombre y el correo de contacto', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: 'lalondra' })).toBeInTheDocument();
  expect(screen.getByText('alondraesquiveliba13@hotmail.com')).toBeInTheDocument();
});
