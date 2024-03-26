import { useContext } from 'react';
import Switch from 'react-switch';
import styled, { ThemeContext } from 'styled-components';
import { shade } from 'polished';

const Header = ({toggleTheme}) => {

    const { colors, title } = useContext(ThemeContext);

    return(
        <Container>
            <Switch 
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            offColor={shade(0.1, colors.primary)}
            onColor={colors.secundary}
            /> 
        </Container>
    )
}

const Container = styled.div`
    height: 60px;
    background: ${props => props.theme.colors.primary};
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: right;
    padding: 20px;
`

export default Header