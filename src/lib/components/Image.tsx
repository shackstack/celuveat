import styled from "@emotion/styled";

const Image = styled.img<{ width: number; height: number }>`
  flex: none;

  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  object-fit: cover;
`;

export default Image;
