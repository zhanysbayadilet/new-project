import styled from 'styled-components';
import {ConstStyles} from "../../_app/Theme";

export const NavBarStyle = styled.div`
  border: ${ConstStyles.border};
  border-radius: ${ConstStyles.borderRadius};
  padding: ${ConstStyles.padding};
  display: flex;
  gap: 5px;
  justify-content: space-between;
`;