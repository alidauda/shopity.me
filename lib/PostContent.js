import  Link  from "next/link";
import ReactMarkdown from "react-markdown";

export default function PostContent({post}){
    
    return (
        <div className="card">
          <h1>{post?.title}</h1>
          
          <ReactMarkdown>{post?.description}</ReactMarkdown>
        </div>
      );   
}