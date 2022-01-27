import React from "react";
import { useGlobalContext } from './context';

const Stories = () =>
{
    const { isLoading, hits, removeStory} = useGlobalContext();
    console.log(isLoading)
    if (isLoading)
    {
        return <div className='spinner-border m-5' role='status'>
                <span className='sr-only'></span>
        </div>
    }
    return <section className='stories'>
    {hits.map((story) =>
        {   const { objectID, title, num__comments,url,points,author } = story;
            return  <div className="container">
            <hr className="rounded"></hr>
            <hr className="rounded"></hr>
            <div className="col"><div className="col"><article key={objectID} className='story'><h4 className='title'>{title}</h4>
            <p className='info'>{points} by <span>{author} | </span>
            {num__comments}{' '}
            comments
            
            </p>
            <div>
                <a href={url} 
                className='read-link' 
                target="_blank" 
                rel="noreferrer">
                read more
                </a>
            
                <button className='remove-btn' onClick={() => removeStory(objectID)}>remove</button>
                
                </div>
               
            <hr className="rounded"></hr>
            
            </article>
            </div>
            </div>
            </div>
            
        })}
    
    </section>
   
}

export default Stories