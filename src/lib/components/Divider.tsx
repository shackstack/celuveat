import styled from "@emotion/styled";

const Divider = styled.div<{ size?: number; color?: string }>`
  width: 100%;
  height: ${({ size }) => size ?? 1}px;

  background-color: ${({ color }) => color ?? "#00000014"};
`;

export default Divider;
