import React from 'react';

function TopicsPage() {
    return (
        <>
        <h2>Web Development Concepts</h2>
            <nav class="local">
                <a href="#servers">Servers</a>
                <a href="#frontendDesign">Frontend</a>
                <a href="#optimizingImages">Images</a>
                <a href="#favicons">Favicons</a>
                <a href="#css">CSS</a>
                <a href="#forms">Forms</a>
                <a href="#express">Express</a>
            </nav>
            <article id="servers">
                <h3>Web Servers</h3>
                    <p>
                    Within a URL, there may or may not be a path to a given resource at that particular domain. For example,
                    the URL <code>https://example.com/path/to/some/resource.html</code> will display the page <code>resource.html</code>, which is located at
                    <code>example.com/path/to/some/</code> on the server. However, if the client tries to access <code>https://example.com</code> or <code>https://example.com/</code>,
                    which does not have a specified resource, then the web server will send to the client what is known as a <strong>designated homepage</strong> instead.
                    For most web servers, the request for <code>/</code> is the same as requesting <code>/index.html</code>. While some servers, like Apache, use <code>index.html</code> for
                    the designated homepage, others like Microsoft's .NET platform use <code>default.html</code> instead. The web server can be configured to return other file types as well, such
                    as a JavaScript file.
                    </p>

                    <p>
                    The <strong>Network Tab</strong> shows the details of the HTTP request from the client and the response from the server, for each file at the requested resource.
                    If the file could not be sent to the client for any reason, it will be shown in red text with a red "x" next to it. For all files that can be viewed, further information
                    is shown in the <strong>headers</strong> tab. Within headers, there are three subsections; <strong>general</strong>, <strong>response headers</strong>, and
                    <strong>request headers</strong> (this is for Google Chrome dev tools). Under general, the <strong>request URL</strong> shows which URL the client requested, and the
                    <strong>request method</strong> shows which HTTP request method was used. In this case, a <strong>GET</strong> method was used for the index file, which means that
                    the client requested a HTML representation for that file. If the GET method is successful, then the HTTP <strong>status code</strong> will be 200 (which means OK), and the user will be
                    able to view the document in the browser. When requesting the file from the local machine, the request URL contains the <code>file</code> <strong>scheme</strong>, while the request URL
                    for the same file on the web server contains the <code>https</code> scheme. Other than this, the only other difference between the two requests in the general section is the
                    <strong>remote address</strong>, which shows the IP address for the web server. The local request does not show a remote address, since the file resides locally in the file system.
                    In contrast, the response headers section for the web server file request shows much more information than the same section for the local file request. Some information includes the
                    type of server (Apache), the type of content encoding (GZIP), and keep-alive, which is used for handling idle clients.
                    </p>

                    <p>
                    The <code>favicon.ico</code> file has a status of 200 because the file exists on the web server at the URL <code>https://web.engr.oregonstate.edu/favicon.ico</code>. Therefore, the GET
                    request for this file was successful. However, the other two file requests for <code>main.css</code> and <code>main.js</code> had the 404 status since these files were not found on the web server.
                    </p>
                    
                    <p>
                    My web server's URL looks like <code>https://web.engr.oregonstate.edu/~zitot/a1-zitot/</code>. The scheme is <code>https</code>, and the <strong>subdomain</strong> is <code>web.engr</code>.
                    The <strong>complete domain</strong> is <code>oregonstate.edu</code>, where <code>oregonstate</code> is the <strong>host/domain</strong>, and <code>edu</code> is the <strong>extension</strong>.
                    The last part of the URL, <code>/~zitot/a1-zitot/</code>, is the <strong>path to the page</strong>, which is the <code>index.html</code> file.
                    </p>
            </article>

            <article id="frontendDesign">
                <h3>Frontend Design</h3>
                
                <p>Everything described in the previous section is related to the <strong>backend</strong> of a website. On the other side of web design is 
                the <strong>frontend</strong>, or frontend design. While the backend is related to the server, frontend design focuses on what the user actually
                sees when they visit a webpage. This includes how elements are laid out on the page <strong>(HTML)</strong>, the overall style <strong>(CSS)</strong>, and how things like buttons are handled
                when the user clicks on them <strong>(JavaScript)</strong>. One crucial part of frontend design is the <strong>graphical user interface</strong>, or GUI. The user interface must be
                intuitive to use, as well as having a cohesive design. Consistency in colors, fonts, icons, and illustrations allows users to know that they are on the same
                website when navigating from page to page. Consistent use of the same visual style across web pages is also important for conveying a sense of
                professionalism, whether the website is designed for personal or business purposes.</p>

                <h4>The Five E's of Usability</h4>
                <dl>
                    <dt>Effective</dt>
                    <dd>The website allows users to accomplish their desired tasks with expected results.</dd>

                    <dt>Efficient</dt>
                    <dd>Web pages and resources load quickly</dd>
                    <dd>Tasks require a minimal amount of steps (e.g.- submitting a form should only require necessary information)</dd>

                    <dt>Easy to navigate</dt>
                    <dd>Intuitive design allows users to get where they want to without any struggle</dd>
                    <dd>Examples of things to help a user navigate a site include <strong>nav bars</strong>, <strong>burger menus</strong>, and <strong>breadcrumbs</strong></dd>

                    <dt>Error-free</dt>
                    <dd>The website does not produce errors, especially in common user operations</dd>

                    <dt>Enjoyable/engaging</dt>
                    <dd>The website not only works well, but is satisfying to use! The user should want to keep using it.</dd>
                </dl>

                <p>
                    The <strong>header</strong> tag is used at the very top of the page, displaying information such as a company name, logo, or marketing slogan. The header
                    usually looks the same from page to page for multiple page websites. The <strong>nav</strong> tag contains links that take the user from the current page to other pages.
                    A properly implemented nav should only take users to other pages on the same website. A webpage may have multiple nav elements throughout the page. The <strong>main</strong>
                    tag is for holding the majority of a page's content, which may include articles, photos, recipes, etc. Best practice is for the header and footer to be separate from a main
                    tag, since those elements always display the same content from page to page, while main does not. A <strong>section</strong> tag is used to group together related content.
                    This content is typically contained inside <strong>article</strong> tags, which may include text, images, videos, and more information. A section should have a <strong>h2</strong>
                    heading at the top of it, and articles should have a <strong>h3</strong> heading, although this depends on the other previously used <strong>heading</strong> tags. What matters
                    most is that the heading tags (h1, h2, h3, …) should be structured in a hierarchical ordering. Lastly, the <strong>footer</strong> tag contains contact information, legal information,
                    links to certain important pages, and copyright statements. While footers historically have had more minimal designs, recently web designers have been adding more flair to their
                    footers for interesting results.
                </p>

                <h4>Anchors: External Content, Internal Content, and Page-To-Page Navigation</h4>
                <ol>
                    <li>Linking to external content: the <strong>anchor tag</strong> takes a URL as its <strong>href</strong> and the inner text describes where the link goes to.</li>
                    <li>Linking to internal content: the anchor tag takes a href which is set to a string preceded by a hashtag symbol. This href must match an <strong>id</strong> for another
                    html element on the page. For example, to link to a section element with an id of "tasty-foods" we could use an anchor tag with its href set to "#tasty-foods".</li>
                    <li>Linking from page-to-page: the anchor tag takes an <strong>absolute path</strong> or <strong>relative path</strong> as its href, which should reference another html document
                    in the project folder or server. While absolute and relative paths can be used to navigate from page-to-page, it is standard to use relative paths for this purpose.</li>
                </ol>
            </article>

            <article id="optimizingImages">
                <h3>Optimizing Images</h3>

                <p>There are six major image optimizing specifications for the web; a descriptive file name, small file size, exact dimensions, correct file format, 
                reduced resolution, and color mode. A <strong>descriptive file name</strong> should be concise while conveying all necessary information about the image. For example, 
                a photo of a man with an orange shirt riding a unicycle might be named something like "man-orange-shirt-unicycle.jpg". This has the main benefit of allowing search engines
                to gather related images for users. It also helps developers to keep track of images, especially for larger websites that contain many image files. <strong>Small file sizes</strong> 
                are essential for faster load times, which enables a smoother experience for the user. The size of an image file can be reduced by decreasing the dimensions of the image, compressing it
                (using <strong>lossy</strong> or <strong>lossless compression</strong> techniques), or both. If an image needs to be a higher resolution, then the developer might use a 
                technique where a higher resolution version of the image is only served to higher resolution devices. For lower resolution devices, a lower resolution version would be served instead.
                Expanding further on reducing the dimensions of images, an image should have an <strong>exact dimension</strong>. If the developer knows beforehand that an image will
                take up about 600px (width) of space on the page, then the image should be set to 600px wide. Or if the image is used as a background image, then it will most likely need
                a larger size so that it covers the page. Whatever the case, the appropriate use of exact dimensions will prevent images from being drastically shrunk by the browser, which
                slows down loading times. Picking the <strong>correct file format</strong> will ensure that an image looks the best that it possibly can. Photos generally should be <code>.JPG</code>, 
                while logos and icons are usually <code>.GIF</code>, <code>.SVG</code>, or 8-bit <code>.PNG</code>. There are other file types for images as well, each best for certain use cases. As previously
                mentioned, screens with smaller resolutions should be served images with a <strong>reduced resolution</strong>. If the developer anticipates their users will have a wide variety of
                screen sizes, then they may decide to have several versions of the same image for each screen size or pixel density. Another technique is having the website serve different images
                for different screen sizes. There are cases where a cropped version of a photo might be more suitable for mobile device layouts, while the desktop layout may use the uncropped version. Lastly,
                the correct <strong>color mode</strong> should be used for certain file types. RGB is standard for <code>.PNG</code> (8-bit), <code>.JPG</code>, <code>.SVG</code>, and <code>.WebP</code>, whereas indexed is mainly
                used for <code>.GIF</code> and 24-bit <code>.PNG</code>.</p>

                <p>The file formats <code>.JPG</code> and <code>.WebP</code> are the two most commonly used for photos. Since photos have a high amount of colors and details, they are not suitable for
                the web in an unmodified state. Using <code>.JPG</code> or <code>.WebP</code> allows photos to be resized and compressed, decreasing load times with the tradeoff of reduced quality. The file formats <code>.SVG</code>,
                <code>.GIF</code>, and <code>.PNG</code> are mainly used for line art graphics. The <code>.SVG</code> format uses vector math, allowing for crisp shapes and animations that scale without getting blurry. For transparent
                line art, <code>.GIF</code> and <code>.PNG</code> are used; <code>.GIF</code> can have 8-bit transparency while <code>.PNG</code> may use 8-bit or 24-bit (true transparency). Aside from transparency,
                <code>.GIF</code> and <code>.PNG</code> serve different use cases. <code>.GIF</code> is commonly used for short photo/video animations. <code>.PNG</code> meanwhile is 
                best for biomorphic shapes and images with solid colors.</p>
            </article>

            <article id="favicons">
                <h3>Favicons</h3>

                <p>Short for "favorite icon", <strong>favicons</strong> can be displayed in multiple sizes depending on where they are being
                shown. Favicons are often seen in a browser tab, a smartwatch, a search engine results list, or a smartphone, usually displaying a company logo. When a user visits a site that has a favicon, the browser/device
                will use the favicon image files (typically .PNG, .ICO, or .SVG) and save the favicon for future use. That way, when a user looks in their bookmarks bar, or the front page of their search engine
                of choice, they will see the saved website's favicon. By showing these favicons next to the site name, users can quickly find which site they are looking for.</p>
            </article>

            <article id="css">
                <h3>Cascading Style Sheets</h3>
                
                <p><strong>Cascading Style Sheets</strong>, also known as <strong>CSS</strong>, provide a way for websites to override the default styles for HTML elements. CSS has a number
                of key uses asides from just making a website look pretty. It allows a website or app to have a consistent style, with each page using the same color palette, fonts, background
                images, and more. If a specific page or element needs a different style, then the universal style can be overwritten. Consistency in styling solidifies the image of the brand and
                lets users know they are on the same website when navigating from page to page. As well, when used right, CSS vastly improves readability and legibility. For example, with the
                right amount of line-spacing, text-size, text-color, and margins for a paragraph, users will be able to more comfortably read text without eye-strain or losing track of the line
                they are on. These design considerations are only possible with CSS.</p>

                <p>There are five ways to incorporate custom styles into a webpage. The first way is by using the <code>&lt;link&gt;</code> tag. If the CSS file is in the project folder or on the server,
                then this method will take the path to the file. For example, if the file name is <code>main.css</code>, the link tag would look like <code>&lt;link rel="stylesheet" href="main.css" /&gt;</code>
                (assuming the HTML and CSS are in the same directory). This method is usually used for the global style sheet, but can also be used for component style sheets. To do this, the link tag
                for the component would be placed after the link tag for the main style sheet. While this is valid, the second way to incorporate CSS, the <strong>import statement</strong>, is more efficient
                for utilizing external CSS components. If the file name is <code>some_component.css</code>, then the statement <code>@import "some_component.css"</code> would be placed at the top of the
                global CSS file. The next three methods are used for one-off style changes, which override the global styles. The first of these methods is by <strong>embedding</strong> the CSS
                into a <code>&lt;style&gt;&lt;/style&gt;</code> tag, which is used like this: <code>&lt;style&gt; &#123; h3 margin: 2rem &#125; &lt;/style&gt;</code>. The next method places the style <strong>inline</strong>, or
                inside the element tag, like so: <code>&lt;h2 style="margin-top: 5px"&gt;Hello World&lt;/h2&gt;</code>. Lastly, <strong>JavaScript</strong> can be used to manipulate the <strong>Document Object Model</strong>,
                or <strong>DOM</strong>. If we wanted to give the first <code>&lt;article&gt;</code> tag in a collection of article tags a blue background color, then this code would be written in the JavaScript file: 
                <code>document.getElementsByTagName('article')[0].style.backgroundColor = 'blue';</code>.  
                </p>
            </article>

            <article id="forms">
                <h3>Forms</h3>

                <p>There are 6 major goals to ensure form accessibility:
                    <ol>
                        <li><strong>Provides clear instructions</strong>: screen readers can detect labels but not placeholder text, so clear label descriptions are essential.</li>
                        <li><strong>Mark required fields</strong> and let users know <strong>why</strong> you are gathering their data. Users should not have to fill out unnecessary information. It just wastes their time and
                        can cause frustration.</li>
                        <li><strong>Apply autofocus to the first field in the form</strong>, so the user does not have to click on the field after the page loads.</li>
                        <li><strong>Must be able to complete the form only using a keyboard (when on a computer)</strong>. Some users may not be able to use a mouse, so each field should be able to be focused through the tab key.</li>
                        <li><strong>Tab indexing for complex forms</strong>. This is helpful for forms that don't have a clearly visible linear progression.</li>
                        <li><strong>Screen readable validation messages</strong>. Validations should be displayed via the input element's warning rather than through a browser alert.</li>
                    </ol>
                    Accessible forms ensure that the widest audience possible can use a website. Not everybody uses the same computer hardware, so forms must be able to be read and filled out using a variety of methods.
                    This is not only desirable for websites to expand access to the most users they can reach, but is in some cases required by law. The United States requires government funded sites to be web accessible under the Americans with Disabilities Act, Section 508.
                    Failure to comply may result in a fine.
                </p>

                <p>
                    Web forms may include a variety of HTML tags, each with specific attributes and use cases. The <strong><code>&lt;form&gt;</code></strong> tag establishes the form itself.
                    It contains all the different form fields and determines what happens when the form is submitted, through its attributes. The <code>action</code> attribute determines
                    where the request from the form is sent (may take an absolute or relative path), while the <code>method</code> attribute specifies which HTTP method is used in the request.
                    The <code>GET</code> and <code>POST</code> methods are most common for the <code>method</code> attribute. A form may also contain other non-form related elements, such as a <code>&lt;p&gt;</code> tag, but cannot
                    have another <code>&lt;form&gt;</code> inside of it. To keep forms organized, the <strong><code>&lt;fieldset&gt;</code></strong> tag is used to break up the form into logical sections. For example,
                    one <code>&lt;fieldset&gt;</code> may contain fields for required personal information, while another <code>&lt;fieldset&gt;</code> contains an optional survey. A <strong><code>&lt;legend&gt;</code></strong> tag
                    acts as a title for a <code>&lt;fieldset&gt;</code>, describing its overall purpose. Moving on to the most versatile HTML element for forms, we have the <strong><code>&lt;input&gt;</code></strong> tag.
                    The <code>&lt;input&gt;</code> tag is used for data input, and can be used for all sorts of input types by setting the <code>type</code> attribute. Some common types are <code>text</code>, <code>email</code>, <code>tel</code>, and
                    <code>password</code>. It would take an entire page of content to describe each of these types in detail, but the most important take-away is that each type will change how the <code>&lt;input&gt;</code>
                    looks and behaves. Certain input types, like the <code>&lt;radio&gt;</code> and <code>&lt;checkbox&gt;</code>, have a <strong>value</strong> attribute. When a form is submitted, the server
                    identifies each form input by its <strong>name</strong> attribute, which has a value mapped to it. For a checked <code>&lt;radio&gt;</code> or <code>&lt;checkbox&gt;</code>, the value will be
                    whatever the value attribute is set to. For any type of input that takes user-generated text, the value is set to that text. To create dropdown menus, the <strong><code>&lt;select&gt;</code></strong> tag
                    is used with nested <strong><code>&lt;option&gt;</code></strong> tags for each option. This behaves similarly to the <code>radio</code> input, where only one selection may be made. Lastly, there is
                    the <strong><code>&lt;textarea&gt;</code></strong> tag, which is similar to <code>&lt;input type="text"&gt;</code>, except that it is resizable and is usually used for longer text inputs. The <strong><code>&lt;label&gt;</code></strong>
                    tag is used for identifying any input type, whether it is an <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>, or <code>&lt;select&gt;</code> element. A <code>&lt;label&gt;</code> is given a 
                    <code>for</code> attribute, which must contain a value that matches the <code>id</code> attribute of the form tag it is labelling. A user can click on a label to focus the matching input, which is a nice accessibility feature. Once the user has finished filling out a form, they can submit it by
                    clicking on the submit button. A submit button can be made by using a <code>&lt;input type="submit"&gt;</code> tag or a <strong><code>&lt;button type="submit"&gt;</code></strong> element with its <code>name</code> attribute matching the form's <code>action</code> attribute.
                </p>

                <p>
                    Proper styling not only gives forms an elegant look, but also makes them easier to use. Users may fill out forms on a variety of devices, ranging from desktops with
                    ultrawide monitors to smartphones with tiny screens. Therefore, form inputs should have larger text and adequate padding to allow users on any device to more easily click on them. Padding 
                    should be applied to <code>&lt;fieldset&gt;</code>'s, <code>&lt;label&gt;</code>'s, <code>&lt;legend&gt;</code>'s, <code>&lt;textarea&gt;</code>'s, and <code>&lt;button&gt;</code>'s
                    as well to make all text more readable. Margins can be used to space out elements throughout the form to prevent a squashed look. There are no hard and fast rules for padding/margins;
                    the key take-away is that the form should not strain the user's eyes. Colors also play an important role in styling a form. Giving different colors to elements with <code>:focus</code>,
                    <code>:required</code>, <code>:valid</code>, and <code>:invalid</code> states help the user to identify form information before seeing a warning message. For example, a required field
                    might have a red border around it, indicating that it has not yet been filled with valid data. Once this field is filled with valid data, then the border changes to a green color, indicating
                    that that input will pass validations.
                </p>
            </article>

            <article id="express">
                <h3>Express</h3>

                <p>
                    In the broadest sense, <strong>Node.js</strong> is a runtime environment for developing server/network applications in JavaScript. While any JavaScript files
                    that are linked to HTML run in the web browser, Node.js executes JavaScript code on the backend (outside the browser, or server-side). A primary feature of Node.js
                    is that it is <strong>asynchronous</strong>. In short, a Node server can call an API, go do something else, and handle the API response whenever it is received.
                    This speeds up Node applications tremendously since they do not have to wait on each API call for a response. The <strong>Node Package Manager</strong>, or <strong>NPM</strong>,
                    serves two purposes. One of its functions is to act as an online repository for Node.js packages (JavaScript code written and uploaded by developers). This is useful
                    in that it prevents developers from "reinventing the wheel", or rewriting code which others have written before. The second purpose of NPM is as a command-line utility. 
                    Node.js packages can be installed and managed via a <strong>CLI</strong> (command-line interface). <strong>Express.js</strong>, or Express, is a great example of a Node
                    package which prevents developers from reinventing commonly used code. Express is a framework that provides various APIs for common web application functionality. It
                    is used for CRUD operations on data (create, read, update, delete), routing HTTP methods and actions to resources, defining ports for routes to take, and much more. If developers
                    had to set all of this up every time they started a new website, that would be a major headache! By using something like Express, developers can put more energy into layouts and styles
                    without stressing as much about backend functionality.
                </p>
            </article>
        </>
    );
}

export default TopicsPage;
