import React from 'react'

import LeftSidebar from '../../components/LeftSidebar/LeftSidebar' 
import TagsList from './TagsList'
import './Tags.css'

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

const Tags = () => {
    const tagsList = [{
        id: 1,
        tagName: "javascript",
        tagDesc: "For questions regarding programming in ECMAScript (JavaScript/JS) and its various dialects/implementations (excluding ActionScript). Please include all relevant tags on your question."
    },{
        id: 2,
        tagName: "python",
        tagDesc: "Python is a multi-paradigm, dynamically typed, multipurpose programming language. It is designed to be quick to learn, understand, and use, and enforces a clean and uniform syntax."
    },{
        id: 3,
        tagName: "java",
        tagDesc: "Java is a high-level object oriented programming language. Use this tag when you're having problems using or understanding the language itself."
    },{
        id: 4,
        tagName: "php",
        tagDesc: "PHP is a widely used, open source, general-purpose, multi-paradigm, dynamically typed and interpreted scripting language originally designed for server-side web development"
    },{
        id: 5,
        tagName: "C#",
        tagDesc: "C# is a high-level, statically typed, multi-paradigm programming language developed by Microsoft. C# code usually targets Microsoft's .NET family of tools and run-times, which include .NET, .NET Framework, .NET MAUI, and Xamarin among others."
    },{
        id: 6,
        tagName: "android",
        tagDesc: "Android is Google's mobile operating system, used for programming or developing digital devices (Smartphones, Tablets, Automobiles, TVs, Wear, Glass, IoT)."
    },{
        id: 7,
        tagName: "HTML",
        tagDesc: "HTML (HyperText Markup Language) is the markup language for creating web pages and other information to be displayed in a web browser. "
    },{
        id: 8,
        tagName: "jquery",
        tagDesc: "jQuery is a JavaScript library. jQuery is a popular cross-browser JavaScript library that facilitates Document Object Model (DOM) traversal, event handling, animations, and AJAX interactions by minimizing the discrepancies across browsers."
    },{
        id: 9,
        tagName: "C++",
        tagDesc: "C++ is a general-purpose programming language. Use this tag for questions about/utilizing C++."
    },{
        id: 10,
        tagName: "css",
        tagDesc: "CSS (Cascading Style Sheets) is a representation style sheet language used for describing the look and formatting of HTML (HyperText Markup Language), XML (Extensible Markup Language) documents and SVG elements including (but not limited to) colors, layout, fonts, and animations."
    },{
        id: 11,
        tagName: "sql",
        tagDesc: "Structured Query Language (SQL) is a language for querying databases."
    },{
        id: 12,
        tagName: "react",
        tagDesc: "React is a JavaScript library for building user interfaces. It uses a declarative, component-based paradigm and aims to be efficient and flexible."
    },{
        id: 13,
        tagName: "nodejs",
        tagDesc: "Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google's V8 JavaScript engine and libuv library. It is used for developing applications that make heavy use of the ability to run JavaScript both on the client as well as on the server side."
    },{
        id: 14,
        tagName: "array",
        tagDesc: "An array is an ordered linear data structure consisting of a collection of elements (values, variables, or references), each identified by one or more indexes."
    },{
        id: 15,
        tagName: "json",
        tagDesc: "JSON (JavaScript Object Notation) is a serializable data interchange format that is a machine and human readable."
    }]
  return (
    <div className='home-container-1'>
        <LeftSidebar />
        <div className='home-container-2'>
            <h1 className='tags-h1'>Tags</h1>
            <p className='tags-p'>A tag is a keyword or label that categorizes your question with other, similar questions.</p>
            <p className='tags-p'>Using the right tags makes it easier for others to find and answer your question.</p>
            <div className='tags-list-container'>
                {
                    tagsList.map((tag) => (
                        <TagsList tag={tag} key={tagsList.id} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Tags