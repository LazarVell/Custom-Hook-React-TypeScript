# React Typescript UseFormatted Hook

<h2><b>Objective</b></h2> - This hook was made as part of a job interview for a great company! The objective of this task was to create a mini-library project that could be used as a custom hook with various sorting capabilities.
  
<h2><b>How I did it</b></h2> - Most of the logic is inside the UseFormatted component. Each of the sorting functions will trigger a state update, ensuring that they can be chained and rely on the results of the previous action. I also wrote some CSS and a test for the app.

<h2><b>Greatest challenge</b></h2> - My greatest challenge for this task was the "chaining" of functions, as state is async and it would not update before the next function called it, thus resulting in incorrect data being used.

<h2><b>What I learned</b></h2> - I learned of a new way to handle the async nature of useState when useEffect will not be sufficient.
