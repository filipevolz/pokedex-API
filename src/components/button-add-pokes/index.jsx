import styled from "styled-components";

const ButtonAddPokes = ({ addPokes }) => {

    return(
        <CustomButton onClick={addPokes}>Carregar mais</CustomButton>
    )
}

const CustomButton = styled.button`
font-size: 20px;
border: 1px solid;
border-radius: 5px;
padding: 5px;
transition: 0.2s ease-in-out;
background: ${props => props.theme.colors.background};
color: ${props => props.theme.colors.text};

&:hover {
  cursor: pointer;
  transform: scale(1.2);
`

export default ButtonAddPokes;