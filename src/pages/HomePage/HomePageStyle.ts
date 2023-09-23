import styled from 'styled-components';
import {ConstStyles} from "../../_app/Theme";

export function paintBackground(color: string) {
    document.documentElement.style.setProperty('--bodyColor', color)
}

export const Content = styled.div`
  border: ${ConstStyles.border};
  border-radius: ${ConstStyles.borderRadius};
  padding: ${ConstStyles.padding};
  color: white;
  margin-top: 5px;
`;