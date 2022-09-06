// import React, { Component } from 'react'
import Article from "../../components/Article/Article";
import { useState } from "react";

function Main() {
    const [articles,setArticles] = useState(['1','2','3'])

    return(
        <div>
            {
                articles.map((article,idx)=>{
                    return (
                        <Article key={idx} title={article}></Article>
                    )
                })
            }
        </div>
    )
}

export default Main;