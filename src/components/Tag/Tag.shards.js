import styled from '@emotion/styled';
import theme from '../../Themes/theme';

export const Tag = styled.div`
  display: flex;
  align-items: center;
  margin-left: 6px;
  border: ${({ show }) => show && theme.commons.borders.tag};
  padding: ${({ show }) => show && '8px'};
  border-radius: ${({ show }) => show && theme.commons.borderRadius.card}px;
`;

export const Circle = styled.div`
  height: ${({ show }) => (show ? '18px' : '12px')};
  width: ${({ show }) => (show ? '18px' : '12px')};
  border-radius: 50%;
  background-color: ${({ color }) => color};
  `;

export const Name = styled.span`
  margin-left: 6px;
  font-size: ${theme.commons.fontSizes.tagName}rem;
  color: ${theme.colors.text.tagName};
`;

export const CancelButton = styled.button`
  display: block;
  width: 20px;
  background-color: transparent;
  border: none;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
`;
