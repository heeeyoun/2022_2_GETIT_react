import React from "react";
import styled from "styled-components";

const Wrapper =styled.div`
    width:calc(100% -32px);
    padding: 8px 16px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
    border: 1px solid grey;
    border-radius:8px;
    cursor:pointer;
    background: white;
    :hover {
        background:lightgrey;
    }
`;

const ContentText=styled.p`
    font-size:20px;
    white-space:pre-wrap;
`;

function CommentListItem(props) {
    const { comment }= props;

    return (
        <Wrapper>
            <ContentText>{comment.content}</ContentText>
        </Wrapper>
    );
}
//타이틀 텍스트로 props로 받은 post객체의 제목 문자열 표시해줌
export default CommentListItem;