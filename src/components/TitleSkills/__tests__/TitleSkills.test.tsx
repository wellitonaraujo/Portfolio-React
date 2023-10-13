import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

import TitleSkills from "../../TitleSkills";

describe('TitleSkills Component', () => {
  it('renders the TitleSkills component with the expected content', () => {
    const { getByText } = render(<TitleSkills />);

    expect(getByText('Sólida experiência nas principais tecnologias de desenvolvimento de Software, com foco voltado ao Mobile, ja participei de desenvolvimento de Apps em nível nacional e internacional.')).toBeInTheDocument();
  });
});