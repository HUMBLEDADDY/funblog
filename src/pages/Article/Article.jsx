import React from 'react'
import { useSearchParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown'


function Article (props){
    const [searchParams, setSearchParams] = useSearchParams();
    const input = '# This is a header\n\nAnd this is a paragraph'
    return(
        <div>
            <ReactMarkdown>{input}</ReactMarkdown>
        </div>
    )
}

export default Article;