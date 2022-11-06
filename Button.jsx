import React from "react";
import styled from "styled-components";
//styled-컴포 써서 버튼 태그에 스타일 입힌 styleButton 컴포 생성
const StyledButton = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    border-width: 1px;
    border-radius: 8px;
    cursor: pointer;
`;

function Button(props) {
    const {title, onClick} = props;

    return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
//props로 받은 제목이 버튼에 뜨도록! 온클릭도 속성으로 넣음
}

export default Button;
