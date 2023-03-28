import { ButtonContainer } from "./styles";

interface Props {
    onClick: () => void
}

export function Button({onClick}: Props) {
    return(
        <ButtonContainer onClick={onClick} >
            Buscar
        </ButtonContainer>
    )
}