# Frontend Mentor - In-browser markdown editor solution

This is a solution to the [In-browser markdown editor challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/inbrowser-markdown-editor-r16TrrQX9). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - In-browser markdown editor solution](#frontend-mentor---in-browser-markdown-editor-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)
- [Features built so far](#features-built-so-far)
- [Features to work on](#features-to-work-on)
- [Steps for protected component in react](#steps-for-protected-component-in-react)
- [TODO:](#todo)
- [TODO: Displaying all the fetched docs in the expandable nav and in the previewer](#todo-displaying-all-the-fetched-docs-in-the-expandable-nav-and-in-the-previewer)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Create, Read, Update, and Delete markdown documents
- Name and save documents to be accessed as needed
- Edit the markdown of a document and see the formatted preview of the content
- View a full-page preview of the formatted content
- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- **Bonus**: If you're building a purely front-end project, use localStorage to save the current state in the browser that persists when the browser is refreshed
- **Bonus**: Build this project as a full-stack application

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.proud-of-this-css {
  color: papayawhip;
}
```

```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**

Async handler code:

```js
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
  }
}

export { asyncHandler }
```

Health-check route:

```js
import { ApiResponse } from '../utils/ApiResponse.js'
import { asyncHandler } from '../utils/asyncHandler.js'

const healthCheck = asyncHandler(async function health(req, res) {
  return res.status(200).json(new ApiResponse(200, 'OK', 'Health check passed'))
})
export { healthCheck }
```

# Features built so far

- Done with the server. The server has following features:
  - The user can register themselves from the application
  - The user can login themselves from the application
  - The user can logout themselves from the application
  - The user can perfrom CRUD operations on the documents

# Features to work on

- Create a UI for the client.
- The UI should be responsvie.
- The user should be able to perform all the server functions from the UI.
- Proper error handling should also be done on the UI side.
- The user should also be to share the live link of this doc with others.
- User should also be able to download the doc by converting the doc from .md to .pdf file. (The conversion part is optional).
- The user should only be able to read the doc.

**Optional Features to work on in the feature to enhance knowledge**

- Different users should be able to collaborate on the docs when given permission.(Kind of like google docs. If one person makes changes in the docs from their side then the other user should be able to view those changes in the docs as well live)

- Test user
  test-user
  test@gmail.com
  test123

# Steps for protected component in react

- First login and store the access token in-memory(react-context) --> Done
- Now when clicked on login, it should take us to `MarkdownEditor` component --> Done
- The component is protected so before rendering we will pass another reqeuest to check if the token is valid or not. If it's valid go to the `/markdown` route but if it's not then first refresh the token to generate new refresh and access tokens. Also check if the access token is expired or not. If it is expired then generate a new access token using the refresh token but if both are expired then just redirect to the login page. If the user logs in again then both the tokens are generated again.
- Similar steps will be followed for all the other protected components

# TODO:

- Read about the useEffect cleanup function --> [React useEffect cleanup](https://medium.com/@vishalkalia.er/what-is-the-useeffect-cleanup-function-and-how-it-works-83d8c67a1a10)

# TODO: Displaying all the fetched docs in the expandable nav and in the previewer

- Fetch the created docs --> Done
- Store all these docs in a global storage which will be zustand --> Done
- Modify the docs by adding another parameter which is going to be `isSelectedFile` --> Done
- When clicked on any of the files, make the `isSelectedFile` true and display that file name at the top in a tab format --> Done
