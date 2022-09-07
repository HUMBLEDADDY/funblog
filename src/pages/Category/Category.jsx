// import React, { Component } from 'react'
import { useState } from "react";
import ArticleBox from "../../components/ArticleBox.jsx/ArticleBox";
import Article from "../../components/Article/Article";

function Category() {
    const [articleTree,setArticleTree] = useState([
        {name:'1',articles:[1,2,3]},
        {name:'2',articles:[4,5,6,7]}
    ])
    return (
        <div>
            {
                articleTree.map((category,idx)=>(
                    <ArticleBox key={idx} name={category.name}>
                        {
                            category.articles.map((article,idx)=>(
                                <Article key={idx} title={article}></Article>
                            ))
                        }
                    </ArticleBox>
                ))
            }
            <ArticleBox>

            </ArticleBox>
        </div>
    )
}

export default Category;