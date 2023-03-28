import styled from "styled-components";

export const ItemRepoContainer = styled.div`
    width: 80%;

    div {
        display: flex;
        align-items: center;
    }

    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }

    p {
        font-size: 16px;
        color: #FAFAFA60;
        margin-bottom: 20px;
    }

    a {
        text-decoration: none;
        padding: 10px;
        margin-right: 10px;
        background-color: #FAFAFA;
        color: #0000FF;
    }

    a.remover {
        outline: none;
        color: #FF0000;
    }

    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }
`