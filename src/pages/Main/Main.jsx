// import React, { Component } from 'react'
import Article from "../../components/Article/Article";
import { useState } from "react";

function Main() {
    const [articles,setArticles] = useState([{name:'1',id:'1'},{name:'2',id:'2'},{name:'3',id:'3'}])

    return(
        <div>
            {
                articles.map((article,idx)=>{
                    return (
                        <Article key={idx} title={article.name} id={article.id}></Article>
                    )
                })
            }
        </div>
    )
}

export default Main;