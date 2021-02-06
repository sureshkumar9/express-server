2. Git Integration
Sometimes using Git can be fun or hard, but Visual Studio Code comes with integrated Git that allows for Adding, Committing, Pulling and Pushing Changes to a remote Git repository using a simple GUI.

Let's go through a simple workflow that will involve the following steps.

Create a project with git initialized.
Make some changes
Commit the changes
We have the two files we created app1.js and app2.js. Let's initialize a git repository in this directory. And then open Visual Studio Code with this directory.

git init
code .
Where . represents the current directory your terminal is in.

You'll immediately notice that Git is active in the left most pane. It has a badge with 2 on it.

The two files have a U in on their right, which means they are untracked. If you click on the git Icon with a badge of 2, you get this view. Hover over the first file app1.js, and these icons appear

The + sign is an equivalent of git add command. click it. and the view changes to this.

We can now see a Staged Changes section, with the file we've added, and the status has changed to A which represents Index Added.

Next, click on the Open File Icon on the file app1.js in the Staged Changes, and open the file. Edit the file to this. Replace message.

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Scotch!'
  }
})
Now, there's a new entry in Changes section with the same file. When you click on the file app1.js in the Changes Section, you will see a diff displayed, like we saw in topic 1.



You can then click on the + sign to stage the changes. Committing the file to git is as simple as typing in the commit message at the top section with the Message (Press..., and pressing CMD + Enter or Ctrl + Enter. Below, I wrote Initial Commit.

Pressing CMD + Enter, changes the view back to Changes only for the files we did not add..

Other helpful features that are git related include

A helpful Context Menu: - When you click on the menu icon ... within the Git Panel, this is what you see.
We see useful commands that are sometimes quite hard to grasp.

At the bottom of Visual Studio Code, in the status bar, you can also see the branch you are currently in. Clicking on that branch allows you to select any other branches that exist.

When you click on that, a list of branches appears in the search panel, with the first option being the ability to create a new branch

3. Debugging


Visual Studio Code has a rich API for enabling debugging tools, Here are some articles here in scotch referencing them.

https://scotch.io/tutorials/debugging-javascript-in-google-chrome-and-visual-studio-code
https://scotch.io/tutorials/debugging-node-code-in-vs-code
https://scotch.io/@chenster/debugging-php-in-visual-studio-code205
Debugging is a large topic, and is usually language/stack specific. Depending on the language you are using, there are available plugins that enable support for debugging, and you'll be able to use breakpoints to debug your code when developing.

4. Live Share
Visual Studio Code Live Share is a feature that enables you to share your VS Code instance, and allow someone remote to control and run other things such as debuggers.

Live Share is published as a plugin, and is currently in Preview.

All that is required is for you to install the plugin, and the status bar will enable you share any working session by getting a link, once you are signed in.

Here's a Video, showing Visual Studio Code in action.

5. Split Views, Zen Mode
If you like working on multiple open editors in the same project, you will find this feature really interesting. You can press OPT, and click on a file, or right click on a file and choose Open to the Side, to open more the file in a split view like shown below..

There are a couple of built in Editor Layouts that you can view by going to the View > Editor Layout menu.

Below shows the 2x2 Grid Option

Zen Mode: Sometimes you want minimal distractions from everything, and only want to focus on your code. Below shows the zen mode, which can be accessed through the View > Toggle Zen Mode, or by opening the Command Palette, and typing in >Zen

Below shows the zen mode. Notice my code has been centered, and all other VS Code visuals removed.

6. Helpers (Intellisense, Context Menus..)
I decide to call this section helpers because it consists of little things that are quite helpful when writing code.

Here's a simple JavaScript file we'll use to demonstrate these features.

function name() {
  return "scotch"
}

function age() {
  return 8
}

function nameAndAge() {
  return {
    name: name(),
    age: age(),
  }
}
console.log(name())
console.log(age())
console.log(nameAndAge())
Peek Definition - this allows you to see the definition of a function/variable, without navigating to the it, even if it's in a different file. It works with multiple languages, though sometimes you need to install the relevant plugins. To access it, right click in the line console.log(nameAndAge()), and click on peek definition in the context menu.. VS Code will find the function, and give you an overlayed editor to peek on what's going on.You can also select Go To Definition, and you will be taken directly to where the function/variable is defined.
Find All References - This works pretty similar to Peek Definition. Right click on the function nameAndAge, and select Find All References.On the right of the overlayed editor, you will see a list of all the places the function has been referenced. This is useful in giving you an overview of how much a piece of code affects your whole codebase.
Rename Symbol - Also found in the context Menu, this allows you to rename a function or variable, and it will be changed everywhere it is referenced in the codebase.
Refactor - Currently, this works mainly for TypeScript and JavaScript, but it allows you to refactor code. e.g move a function into a file. In our example, if you right click on the nameAndAge function and click on refactor, one option will be Move To New File, and when you click on that, the function is removed, and put into a new file called nameAndAge.js
function nameAndAge() {
  return {
    name: name(),
    age: age(),
  };
}
Intellisense - Intellisense usually allows you to list members of a struct, class or object, and even get required parameters for functions, that makes writing code faster and less error prone. This is supported by default for JavaScript and TypeScript, but you may have to install language specific plugins to support the language you are using.You can also hover over anything:- variables, functions and see a pop up telling you more about them. Below is a hover over the log function in console
NPM Scripts - This sounds like it should be a feature in its own, but I'll just put it here. NPM Scripts are usually commands that we put in the scripts section of the file package.json.
"scripts": {
    "start": "node index.js"
  }
VS Code has a couple of helpers for NPM. First of all, when you are creating the scripts, there's beautiful intellisense and you can just select the script you want.Next, there's a NPM SCRIPTS panel on the left, usually at the bottom, which will list the package.json file, and within it the scripts. Right clicking on the file, gives you an option to run npm install. And Hovering over the particular script displays a Play button which will allow you run the script.

Outline - Outline was released recently, and I can't believe how much I use it. It essentially gives you an overview of your code, and navigates to sections you click on.
Take for instance the piece of code we had earlier, if you open the file, and go to the Outline section on the left pane, you'll see thisWe see an outline of the main blocks of our code, and clicking on any of them, takes the editor focus to that section of the code.

These are just a few features and tips I didn't know hot to categories. ;-)

7. Integrated Terminal
Most of the time when running code, there's usually a terminal open either to the side, or somewhere in your machine.

Visual Studio Code comes with an Integrated Terminal accessible through View > Integrated Terminal, and configurable through the settings: "terminal.external.osxExec": "iTerm.app",. The terminal usually opens by default in the workspace you are in, and can also have split views.

8. Plugins and Themes
Visual Studio Code has a rich plugin API, and this has enabled developers to create really awesome plugins. I'll list a few common ones which I've used, but to get a comprehensive list, you can look at the Visual Studio Code Marketplace. Themes can be found here

Linters
ESLint - This enables us lint JavaScript ES code based on eslint rules we provide.
TSLint - This enables us link Typescript code based on tslint rules we provide
Prettier - Prettier is a common code formatter with growing popularity and enables linting of JavaScript, Typescript and CSS.
Language Support :- Visual Studio Code has syntax support for most common languages, but to get full language feature and tools, you will find yourself downloading language plugins. Since I write mostly JavaScript and Golang I have the vscode-go tools installed. You can see a list of language plugins here
Git - There are many plugins that add more support for Git, but the most common one is Git Lense. Here's an example feature:Whenever you click on a line of code, it shows you who edited it, and a little more info about it. You can read more in the GitLense Documentation
Settings - The most common settings plugin is called Settings Sync, and allows you to sync your VS Code installations on different devices.
Docker - Developing with Docker can sometimes mean running complex docker commands, and monitoring things. Installing this Docker Extensions adds some helpful docker tools, such as generating docker files, docker files intellisense, and even monitoring. Here's an example of my running containers in VS Code right now.Also comes with a useful context menu.If you are familiar with docker, you'll find this plugin quite helpful.
NPM - I've already explained the inbuilt npm tools above. Here are a few plugins that make my npm work easier.
Version Lense - Easily manage versions of your npm packages.
Import Cost - Easily see the bytes every package import brings in your codebase.
Markdown All in One - this allows you to edit markdown as though you were writing a word document, and many other features. Useful if you write a lot of markdown.
Frameworks - I work mainly with VueJS and Golang, but there are a couple of plugins that support the various javascript frameworks.
Vetur - This gives support for VueJS
Angular Essentials - For Angular Developers.
React developers, please leave a comment, I'll edit the article ;-).