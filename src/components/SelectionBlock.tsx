import React from "react";
import styled from "styled-components";

const StyledBlock = styled.div`
  position: absolute;
  margin: auto;
`

const StyledOption = styled.div`
  position: relative;
  color: grey;
  padding: 16px;
  border-style: solid;
  border-width: 2px;
  border-image: linear-gradient(to right, transparent, grey, transparent) 0 0 1 0;

  background-repeat: no-repeat;
  &:hover {
    color: orange;
    border-image: linear-gradient(to right, transparent, orange, transparent) 0 0 1 0;
    background-image: radial-gradient(ellipse at bottom, #ffa50030, transparent 70%);
  }
`

const SelectionBlock = ({ options }: { options: string[] }) => {
  return (
    <StyledBlock>
      {options.map((s, i) => (
        <StyledOption key={i}>{s}</StyledOption>
      ))}
    </StyledBlock>
  );
};

export default SelectionBlock;
