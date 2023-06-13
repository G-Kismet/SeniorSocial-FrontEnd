import React from 'react'
import UserPosts from '../../FeedComponent/UserPost'
import { useContext, useEffect } from 'react';
import SocialContext from '../../SocialContext';
const LikedPosts = () => {

    const { user, setUser, posts, setPosts, likedPosts, setLikedPosts, myPosts, setMyPosts } =
        useContext(SocialContext);
        
    return (
        <div>
            {likedPosts.map((posts) => (
                <UserPosts firstName={posts.firstName} text={posts.text} />
            ))}
        </div>
    )

}

export default LikedPosts