//앞서 만든postlistitem 임포트 해주기
//map함수로 각 post객체에 postlistitem컴포 만들어서 랜더링해줌
import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

const Wrapper=styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content: center;
    
    &>*{
        :not(:last-child) {
            margin-bottom:16px;

        }
    }
`;

function PostList(props) {
    const { posts, onClickItem}= props;

    return (
        <Wrapper>
            {posts.map((post,index)=> {
                return (
                    <PostListItem
                        key={post.id}
                        post={post}
                        onClick={() => {
                            onClickItem(post);

                        }}
                    />
                );
            })}
        </Wrapper>
    );
}
export default PostList;
