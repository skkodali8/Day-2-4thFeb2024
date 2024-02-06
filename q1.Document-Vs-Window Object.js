/*
Document Object Vs Window Object

Imagine your web browser is like a house and when you open a webpage, the first thing that comes in is the window. The window is like the outer frame of the house where it has information about its size, name and whether it's open or closed. Now, inside this web browser there's a special document. Think of the document as the content or the interior of the house. It holds all the details about what's displayed on the webpage like the text, images, and everything you see. So, in a simple way, the window is like the overall container, providing information about the browser environment, while the document is the specific content inside that browser, holding details about what's on the webpage you're looking at.

INTRODUCTION

Document Object:
The document object is a tool that helps us access with different parts of the webpage, like text or pictures. When we want to add dynamic content or change what's already there on the webpage, we can use the document object.
The document object is the key to the webpage. The document object can be accessed with a “window.document” or just document.  It's how we make web pages more interesting by adding new stuff or changing what's already there.

Window Object:
The window object is the topmost object of the DOM (Document Object Model) hierarchy. The whole screen that shows everything on a webpage when  every time you see a new webpage on your screen, the window object is in it.
It represents a browser window or frame that displays the contents of the webpage. Whenever a window appears on the screen to display the contents of the document, the window object is created. 

DIFFERENCES:

Document Objects
1.It represents any HTML document or web page that is loaded in the browser.
2.It is loaded inside the window.
3.It is the object of window property.
4.All the tags, elements with attributes in HTML are part of the document.
5.We can access the document from a window using the window. document
6.The document is part of BOM (browser object model) and dom (Document object model)
7.Properties of document objects such as title, body, cookies, etc can also be accessed by a window like this window. document.title
8.syntax: document.propertyname;
9.example: document.title :  will return the title of the document.

Window Objects
1.It represents a browser window or frame that displays the contents of the webpage.
2.It is the very first object that is loaded in the browser.
3.It is the object of the browser.
4.Global objects, functions, and variables of JavaScript are members of the window object.
5.We can access the window from the window only. i.e. window.window
6.The window is part of BOM, not DOM.
7.Properties of the window object cannot be accessed by the document object.
8.syntax: window.propertyname;
9.example:window.innerHeight : will return the height of the content area of the browser.

CONCLUSION

Knowing the difference between Window and Document in JavaScript is very important for web development. Window Object handles how your browser works, while Document Object lets you change what's actually on the webpage. By using these tools, developers can make good and interactive websites.

*/