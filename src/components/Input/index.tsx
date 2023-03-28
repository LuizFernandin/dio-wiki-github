import { InputContainer } from "./styles";

interface Props {
    onChange: (event: any) => void
}

export function Input({ onChange }: Props) {
    return(
        <InputContainer >
            <input type="text" onChange={onChange} />
        </InputContainer>
    )
}