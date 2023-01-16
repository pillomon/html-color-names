import styled from 'styled-components';

interface SpanProps {
  color: string;
}

export const Span = styled.span<SpanProps>`
  color: ${(props) => props.color};
  transition: color 1s linear;
`;
