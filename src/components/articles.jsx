import './articles.css'
import { useState } from 'react';
// import ReactMarkdown from 'react-markdown';
import PointerInCpp from '../articles/pointersInC++.jsx';
import MemoryManagementInCpp from '../articles/memorymanagementinC++.jsx';
import OOPInCpp from '../articles/oopsInC++.jsx';
import TemplatesInCpp from '../articles/templatesInC++.jsx';
import ExceptionHandlingInCpp from '../articles/exceptionHandlingInC++.jsx';

function Articles(){
   const[expandArticle, setExpandArticle] = useState(null);

   const articles = [
      {
         id: 1,
         title: 'Pointers in C++',
         image: 'pointers.jpg',
         description: 'Here is the description of Pointers in C++.',
         fullContent: <PointerInCpp/>,
      },
      {
         id: 2,
         title: 'Memory Management in C++',
         image: 'memory-management.jpg',
         description: 'Here is the description of Memory Management in C++.',
         fullContent: <MemoryManagementInCpp/>,
      },
      {
         id: 3,
         title: 'Object-Oriented Programming in C++',
         image: 'oops.png',
         description: 'Here is the description of Object-Oriented Programming in C++.',
         fullContent: <OOPInCpp/>,
      },
      {
         id: 4,
         title: 'Templates in C++',
         image: 'templates.jpg',
         description: 'Here is the description of Templates in C++.',
         fullContent: <TemplatesInCpp/>
      },
      {
         id: 5,
         title: 'Exception Handling in C++',
         image: 'exception.png',
         description: 'Here is the description of Exception Handling in C++.',
         fullContent: <ExceptionHandlingInCpp/>
      },
   ];

 

   const toggleArticle = (id) => {
      setExpandArticle(expandArticle === id ? null : id);  //toggle expansion
   };

   return (
      <div className="Home">
         <div className="content">
              {articles.map((article) =>(
               <div className="article-div">
                     <div className="article-div-intro" key={article.id} onClick={() => toggleArticle(article.id)}>
                           <div className="image-div">
                              <img src={`/assets/${article.image}`} alt={article.title} className="article-image"/>
                           </div>
                           <div className="content-div">
                              <h2>{article.title}</h2>
                              <p>{article.description}</p>
                           </div>
                     </div>
                     {expandArticle === article.id && (
                        <div className="article-div-contents">
                              {article.fullContent}
                        </div>
                   )}
               </div>
              ))}
         </div>
    </div>
   )
}
export default Articles;