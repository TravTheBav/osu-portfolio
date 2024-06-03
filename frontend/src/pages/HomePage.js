import React from 'react';

function HomePage() {
    return (
        <>
        <h2>A Brief Overview</h2>
        <article>
            <p>
            Hello there, my name is Travis Zito, and I am currently studying computer science at Oregon State University for a BS degree. Upon graduation, my goal is
            to become a software developer. I am particularly interested in full-stack web development, but would also love to dive into games development some day as well.
            Listed here are all the technologies used to make this website. If you want to learn more about some of these, click on the Topics tab.
            </p>
            <dl>
                <dt><strong>HTML &#40;Hyper Text Markup Language&#41;</strong></dt>
                <dd>
                    Controls the layout of a webpage. HTML is composed of <strong>tags</strong>, or <strong>elements</strong>, each with their own behaviors.
                    When a browser retrieves an HTML document from a server, the browser will parse the HTML and create the DOM based on its structure. The DOM
                    is explained below.
                </dd>

                <dt><strong>CSS &#40;Cascading Style Sheets&#41;</strong></dt>
                <dd>
                    Allows for further control on where elements are laid out on the page, as well as styling for those elements. A few things that CSS can do include
                    changing text color, adding images as page backgrounds, and using CSS pseudo classes to affect elements in a specific state &#40;such as when an element
                    is hovered over&#41;. CSS is not only used to make websites look beautiful, but also plays an important role in web accessibility. One example may include changing
                    text color to have a high contrast against the background color to make sure it is easily visible for all users.
                </dd>

                <dt><strong>JS &#40;JavaScript&#41;</strong></dt>
                <dd>
                    JavaScript is an <strong>interpreted</strong> &#40;does not need to be compiled&#41; and <strong>dynamically typed</strong> &#40;variables are assigned a type at runtime&#41;
                    programming language. For static websites &#40;a website with no backend&#41;, JavaScript is used to add interactivity by manipulating the DOM. There are a few ways in which
                    JavaScript may be incorporated into a web page. However, the best method is to link a separate JavaScript file through an HTML <code>script</code> tag, using the <code>src</code> attribute.
                    While this is all only related to the client-side of a website, the section on <strong>Node</strong> shows how JavaScript can be used for server-side programming as well.
                </dd>

                <dt><strong>Node</strong></dt>
                <dd>
                    Also known as <strong>Node.js</strong>, Node is a runtime environment for JavaScript, used for developing server-side web applications. It can be run on all major operating systems.
                    Through NPM &#40;Node Package Manager&#41;, an application using Node may incorporate other people's JavaScript code, known as <strong>modules</strong>. Use of these modules is
                    essential for fast deployment of modern web apps, as it allows developers to not have to reinvent the wheel.    
                </dd>

                <dt><strong>Express</strong></dt>
                <dd>
                    Express is a JavaScript framework that provides APIs for common backend tasks. Some of these tasks include performing CRUD operations &#40;creating, reading, updating, and deleting resources&#41;, 
                    defining ports, and setting up routes. All of this is accomplishes through the use of Express Middleware, or functions applied to HTTP requests.
                </dd>

                <dt><strong>Asynchronous programming</strong></dt>
                <dd>
                    Also referred to as async for short. In a synchronous program, each line of code is executed from top to bottom. In web applications, this can cause slow load times.
                    For example, if a page were to load a bunch of images synchronously, each image would have to be loaded one at a time. Async solves this issue. Essentially, an async function
                    returns a promise and allows the program to continue execution. Once the promise is resolved, the program returns execution to the resolved promise, where it will
                    do something based on the result.
                </dd>

                <dt><strong>DOM &#40;Document Model Object&#41;</strong></dt>
                <dd>
                    After a web browser parses an HTML document, it creates a model of the document and renders it to the display. This model is known as the DOM. The DOM has a tree
                    structure, where every node may only have one parent node, but is allowed to have an unlimited amount of child nodes. At the top of the tree is the <strong>window</strong>,
                    which has a <strong>document</strong> child. The document is the entry point for manipulating the DOM via JavaScript. A key feature of the DOM is that it is interactive in
                    a web browser. By using a <strong>web inspector</strong>, such as Chrome Dev Tools, users can click on specific DOM nodes to see their data, as well as change their contents.  
                </dd>

                <dt><strong>SPA &#40;Single Page Application&#41;</strong></dt>
                <dd>
                    A single page application is a web app that actually only has one page, as the name implies. When a link is clicked, say through the global navigation, instead of making a trip
                    to the server to get a new page, the content of the page is swapped out for new content &#40;this is achieved by manipulating the DOM&#41;. What this means is that all the website's
                    content is retrieved from the server exactly one time. After that, all the changes to the display occur client-side.
                </dd>

                <dt><strong>React</strong></dt>
                <dd>
                    React is a frontend framework for developing single page applications. Rather than directly manipulating the DOM via vanilla JavaScript, developers use <strong>React components</strong>
                    , which are JS functions that return <strong>React elements</strong>. When the browser loads in a page for a React application, the React framework converts the
                    React elements into HTML and JavaScript, which are then used to build the DOM tree. 
                </dd>

                <dt><strong>MongoDB</strong></dt>
                <dd>
                    MongoDB is a <strong>document-oriented database management system</strong>, which is a subset of the <strong>NoSQL</strong> family of DBMS's. In MongoDB, a database
                    contains <strong>collections</strong>, which contain <strong>documents</strong>, which each have <strong>properties</strong>. For example, let's say we have a fruit collection.
                    Each document in the fruit collection would represent a fruit, and each fruit document would have its own specific properties such as color, weight, taste, etc. MongoDB
                    allows CRUD operations to be performed on collections of documents from multiple users simultaneously. 
                </dd>

                <dt><strong>Mongoose</strong></dt>
                <dd>
                    Mongoose is a JavaScript library that makes working with MongoDB in Node easier. What it does is map objects in the server-side JS code to documents in the MongoDB database.
                    In the model JS file for a resource, Mongoose connects to the database and generates a class for a resource, which is mapped to a <strong>schema</strong>.
                    The schema defines the properties for the class and the types for those properties. Then, all CRUD operations for that resource are defined in the model file, using JavaScript functions,
                    which can be exported to other files &#40;usually the corresponding controller file for that model&#41;.
                </dd>

                <dt><strong>REST &#40;Representational State Transfer&#41;</strong></dt>
                <dd>
                    A REST API is an API that exposes collections, and resources within those collections, to clients through unique URLs. More specifically, it allows users
                    to manage these resources by mapping HTTP methods to these URLs to perform CRUD actions. REST is not a specific piece of software, but rather a set of guidelines.
                    If a website conforms to REST guidelines, it is said to be RESTful. To show what a REST API looks like, here is an example: if a website has users, then the REST API would expose the list of all users
                    through a GET request to the URL "http://example.com/users". Or, if we wanted to get a user with an ID of 123, a GET request to the URL "http://example.com/users/123"
                    would retrieve that specific user. A website with a REST API is also said to be <strong>stateless</strong>. In other words, CRUD can only be performed based on the resource, or resources,
                    at the specific URL. If a request is based on the result of a previous request, then the API is not RESTful. 
                </dd>

                <dt><strong>CRUD &#40;Create Read Update Delete&#41;</strong></dt>
                <dd>
                    These are the four operations which can be performed on resources within a persistent storage database. For a website that has a backend and a database, CRUD operations
                    require an HTTP method and a URL. This is known as an <strong>endpoint</strong>. For example, the operation to get a user &#40;i.e., Read&#41; and to update a user &#40;i.e., Update&#41; would both have the same URL,
                    but use a different HTTP method &#40;GET and PUT respectively&#41;. Each CRUD operation has an HTTP method tied to it:
                    <ul>
                        <li>Create: POST</li>
                        <li>Read: GET</li>
                        <li>Update: PUT</li>
                        <li>Delete: DELETE</li>
                    </ul>
                    Note that other operations do exist, such as <strong>patch</strong> &#40;a partial update of a resource, tied to the HTTP PATCH method&#41;.
                </dd>
            </dl>
        </article>
        </>
    );
}

export default HomePage;