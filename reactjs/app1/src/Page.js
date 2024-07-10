import React from "react";
import MyPost from './MyPost';

export default class Page extends React.Component
{
    render()
    {
        return(<div className='container'>
            <div className='row'>
                <MyPost title='My First Business Innogration' photo='https://picsum.photos/300?random=2' />
               
                <MyPost title='My First visit to france' photo='https://picsum.photos/300?random=3' />

                <MyPost title='My First visit to Library' photo='https://picsum.photos/300?random=4' />


            </div>
        </div>);
    }
}