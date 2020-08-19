import styled from "styled-components/native";
import { Icon } from "native-base";

export const TotalPrice = styled.Text`
    color: blue;
    font-size: 15px;
    font-weight: bold;
    margin-left: 10px;
`;
export const TrashIcon = styled(Icon)`
  color: red;
`;
export const CheckoutButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: #ff6900;
  margin-top: 30px;
`;

export const CheckoutButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;