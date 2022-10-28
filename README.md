# Timekeeper

This is a time tracking application that is designed for a mobile-sized screen.

## How to run
1. npm install for backend & client
2. If you are testing backend and client running on the different device in the same network<br />
Change .env: REACT_APP_BASE_URL=http://(localIP):4000<br>
Change start script for backend to the same local IP
```
"scripts": {
    "start": "npx json-server --host (localIP) --watch db.json"
}
```
3. npm start for backend & client (port number: backend(4000) / frontend(3000))

## Features
- **Calendar**<br />
    - See both ongoing and finished timers on a specific date and time
    - Delete timers from history
- **Timekeeper**<br />
    - See ongoing timers
    - Stop timers (The timer has to be selected first in order to stop.)
- **Overview**<br />
    - **Projects**
        - See list of projects
        - Delete, add and edit projects
    - **Projects**
        - See list of tasks for the selected project
        - Delete, add and edit tasks
        - Start timers for tasks

## Styling

- **Styled Components**<br />
I wanted to style the application from scratch.
But I knew that I didn't have enough time to learn a new package.
Styled Component was the best option for me 
because it allows me to style freely and I am familiar with the package already.

## Other Packages

- **axios**<br />
It's a clean and simple way to deal with requests. I have never used axios for school assignments, so I wanted to try it out.

- **calendar-js**<br />
I'm using this package to generate calendar data. The reason why I chose to use a package is that I thought generating calendar data wouldn't be so simple, but it wasn't the core of this assignment. The package is simple and has everything I needed. Because of this package, I could focus on other logics.

- **uuid4**<br />
I generate ID for new projects and tasks using uuid4. The server can generate ID, but this can cause confusion because a task and a project can have the same ID number. To avoid unnecessary confusion, I chose to use this package.
