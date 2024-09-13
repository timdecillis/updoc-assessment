Hi Robert and company,

Thanks very much for your consideration of my application for the Frontend Engineer role at UpDoc!

During the live assessment I got a little tripped up with processing the data from the API and setting up a store with Svelte, but after reading the docs a bit more I arrived at the solution of first fetching the data in the root layout.server and processing it there (calculating the total employees for each company and adding each one to the company's list of employees), and then creating a store.js and importing the store and setting it in the layout.svelte page. Having done this I was able to access it in the root page.svelte, as well as the other routes that I would subsequently implement.

With the store available, I then sorted the keys of the store object and then used the sorted list to render a component for each company in alphabetical order to the root page, including the necessary info to be displayed, and wrapped the component in an anchor tag which would link to the /employees/[name] route.

On the layout page for the /employees/[name] route I used the layout server to pass params.name to display the company name on the page, and within the root page.svelte I could easily access the employee list from the shared store. I then performed some logic to extract the last name for each employee and create an employee list sorted alphabetically by last name to be looped over to create components displaying the employee's name, email, and phone number.

Having completed the basic requirements of the assessment, I turned my attention to styling, installing tailwind and making the necessary changes to the svelte and tailwind configs and adding the app.css with tailwind directives. At this point I also broke up the html components that I had written into the CompanyCard and EmployeeCard files in order to tidy up my code and make it a bit more readable and easier to style. I quickly added some basic styling but in deference to the time constraints of the live assessment I did not delve too deep into further aesthetic choices.

Thanks again for your consideration, and please let me know if you'd like to discuss further!