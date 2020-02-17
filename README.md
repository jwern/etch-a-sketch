# README

# Project: JavaScript - Etch-a-Sketch #

This is my student solution to The Odin Project's [Etch-a-Sketch project](https://www.theodinproject.com/lessons/etch-a-sketch-project).  The goal was to create a basic "sketchbook" in the browser that operates like a mouse-controlled Etch-a-Sketch: hovering over a square would color it in slightly and returning to the same square multiple times would make it increasingly darker.

## Project Post-Mortem ##

I was anxious going into this project, as it heavily revolved around directly - and significantly - editing the DOM via JavaScript, which is something I had only briefly touched upon in the [Rock, Paper, Scissors assignment](https://github.com/jwern/rock-paper-scissors).  However, the process of creating, appending, and removing HTML elements via JavaScript turned out to be less intimidating than I originally feared.  Setting up the grid, and populating it with dozens of (or more) divs turned out to be the easiest part of the project for me.  JavaScript's .style functions were invaluable for assigning grid templates on the fly.

The only significant feature change I made from the original instructions was adding a button to show/hide gridlines which allows users to see the individual div boxes.  Although a previous version used the completely random color selector as suggested in the project's (optional) instruction #5, I chose to keep the colors gray / black as it's easier to make an actual drawing this way.

## Challenges ##

The challenge I ran into most often in this project was figuring out exactly when and where to call functions to ensure states were maintained the appropriate length of time.  For example: when resetting the sketchbook, I wanted to keep the user's selected gridline state (on or off).  However, if I reset the book and deleted the existing divs before calling the adjustGridlines() function, the class would always appear as not applied.  But I also needed to create the new divs (and thus, delete the old divs) before adjusting gridlines.  I ended up storing the gridline status before deletion as a separate variable which was passed to adjustGridlines().  Then, I could freely delete while still maintaining the state of the previous book's gridlines.

I also did not add the line to remove previously created divs on reset until I was quite far along in the project.  I was troubleshooting another part of the JavaScript when I noticed in the browser inspector that my container was holding thousands of divs.  I need to remember for future projects that appending elements is editing the DOM in real time, and unless I specifically remove or undo those changes, they will persist.

## Screenshots ##

[Desktop view screenshot](/images/screenshot.png)

## To Do ##

The CSS and overall styling of this project is pretty barebones.  I chose to focus on the main goals and getting the JavaScript running smoothly over the look and feel of the page.  If I were to make edits in the future, I'd like to make it a little more interesting to look at: maybe try an actual Etch-a-Sketch styling.  I'd add more visual options, such as colors for the grid or overall grid size instead of just total number of rows and columns.  It might be fun to add a "What to draw" suggestion button that gives random ideas for things to draw.

I also think the JavaScript could be cleaned up a bit.  I could probably further reduce repetition in the code and store some repeated variables globally.  There are also some hard-coded values that might be better moved to a CSS class or a separate variable.

Finally, while this page *technically* works on mobile (tapping a square will color it in; tapping the same square will make it darker), I would like to make a mobile-friendly version that would allow you to drag your finger across the sketchbook instead of tapping, using touch events instead of mouse events.

## Technologies ##

This Etch-a-Sketch project was built with HTML, CSS, and JavaScript.  It used [CSSmatic's box-shadow generator](https://www.cssmatic.com/box-shadow) for creating button shading styles.