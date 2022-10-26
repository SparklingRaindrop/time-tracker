# Timekeeper

This is a time tracking application that is designed for a mobile-sized screen.

## How to run
- npm install
- If you are testing backend and client running on the different device in the same network<br />
Change in .env: REACT_APP_BASE_URL=http://(localIP):4000
- npm start

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
I'm using this package to generate calendar data. The reason why I chose to use a package is that I thought generating calendar data wouldn't be so simple, but it wasn't the core of this assignment. Because of this package, I could focus on other logics.

- **uuid4**<br />
I generate ID for new projects and tasks using uuid4. The server can generate ID, but this can cause confusion because a task and a project can have the same ID number. To avoid unnecessary confusion, I chose to use this package.

