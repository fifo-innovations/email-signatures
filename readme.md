# FIFO Email signature generator
Built using React Email. 

## How to use
- The `emails/fifo-email-signature.tsx` is the template - modify it as desired
- Add an `employees.json` file to the project root that contains the details of all employees you wish to generate signature for.
  - setting an employee's `customerCareTeam` key to `true` will generate a second signature file with 'customer care team' as their title.
- run `pn export` a signature will be generated for each employee and saved in the `./out` directory

example `employees.json`
  ```
  {
    "data": [
      {
        "name": "John Doe",
        "title": "ceo"
      },
      {
        "name": "Jane Doe",
        "title": "coo"
        "customerCareTeam": true
      }
    ]
  }
  ```