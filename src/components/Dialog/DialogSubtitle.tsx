import styled from 'styled-components';
import React from 'react';

type DialogSubtitleProps = React.ComponentProps<any> & {
  children: React.ReactNode;
};

const Title = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #9a9ea3;
`;

const DialogSubtitle = styled(({ children, ...props }: DialogSubtitleProps) => {
  return (
    <div {...props}>
      <Title>{children}</Title>
    </div>
  );
})`
  display: flex;
  align-items: center;
`;

export default DialogSubtitle;
