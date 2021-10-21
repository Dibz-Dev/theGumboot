
import { render, screen } from '@testing-library/react';
import About from  '../About';





it('Does the about contain an img tag', () => {
  render(<About />);
  const aboutImages = screen.getAllByRole('img');
  expect(aboutImages.length).toBe(2);
});
