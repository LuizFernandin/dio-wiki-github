import { ItemRepoContainer } from "./styles";

interface Props {
    handleRemoveRepo: (id: number) => void
    id: number
    name: string
    fullName: string
    urlGit: string
}

export function ItemRepo({ id, name, fullName, urlGit, handleRemoveRepo }: Props) {
    return(
        <ItemRepoContainer>
            <h3>{name}</h3>
            <p>{fullName}</p>
            <div>
                <a href={urlGit} target='_blank'>Ver Repositório</a><br />
                <a href="#" className="remover" onClick={() => handleRemoveRepo(id)}>Remover</a>
            </div>
            <hr />
        </ItemRepoContainer>
    )
}