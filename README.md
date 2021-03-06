
## React Form Builder

### Screenshot of final version - [Demo](https://sad-mclean-051869.netlify.app/)
![Final version](./src/assets/final-app.png)

#### How to use
- Drag and drop the form element from the left sidebar to drop area to start creating forms
- Edit the properties of form element by click on the dropped element
- Delete the element by just clicking the close icon on the dropped element
- After finishing click "save" button on the top right corner of the screen 

### Component Breakup
![Component Breakup](./src/assets/Frame-with-components.png)

### First Version - Pure Javascript ( using mouse events ) [Demo](https://laughing-edison-270381.netlify.app/) -  [Github](https://github.com/karthikricssion/js-drag-and-drop)
![First version js mouse events](./src/assets/version-one.png)

### Second Version - Pure Javascript ( using Drag events ) - [Demo](https://sharp-lewin-7964ae.netlify.app/) - [Github](https://github.com/karthikricssion/js-drag-and-drop)
![Second version js drag events](./src/assets/version-two.png)

### Thoughts on Features
- Add more Form elements
- Add more properties for each form elements eg: add labels to a short text, required, hit message, etc.,
- Add Redux for maintaining state
- Create a timeline of user changes, so the user can undo changes
- Options to create multiple forms
- Preview form created
- Auto saving the changes
- Sample templates to get started initially 

### ToDo
- [x] Try on JS with mouse events
- [x] Try JS with drag events
- [x] Data driven form elements
- [x] Integrate local storage
- [x] Work on Version 2 design
- [x] Get started with React
- [x] Worked on "learn by doing"
- [x] Come up with project structure
- [x] Start working on builder using ReactJS
- [ ] Add comments

### Folder structure of the project
```
.
├── App.css
├── App.js
├── App.test.js
├── assets
│   ├── button.png
│   ├── heading.png
│   └── text-input.png
├── components
│   ├── ElementSettings.js
│   ├── FormBuilder.js
│   ├── FormElement.js
│   ├── SideBar.js
│   ├── SideBarFormElement.js
│   └── TopBar.js
├── const.js
├── index.css
├── index.js
├── logo.svg
├── normalize.css
├── serviceWorker.js
├── setupTests.js
└── utils.js

```

```
    yarn start
```
Open http://localhost:3000 to view it in the browser.
