import styled from 'styled-components';

interface TabProps {
  active: boolean;
}

export const Tab = styled.div<TabProps>`
  display: inline-block;
  padding: 0.5em 1em;
  border: 1px solid #ccc;
  border-bottom: none;
  margin-right: 0.5em;
  margin-top: 30px;
  cursor: pointer;
  color: ${props => (props.active ? '#000' : '#ccc')};
  border-color: ${props => (props.active ? '#000' : '#ccc')};
`;