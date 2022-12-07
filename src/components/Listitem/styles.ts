import styled from "styled-components";

type PropsContainer = {
    done: boolean,
}

export const Container = styled.div<PropsContainer>`
    display: flex;
    background: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;

    input {
        width:25px;
        height: 25px;
        margin-right: 5px;
    }

    label {
        color #CCC;
        text-decoration: ${props => props.done ? 'line-through' : 'initial'};
    }

`;