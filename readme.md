# FIFO Email signature generator

## How to use
- The `emails/fifo-email-signature.tsx` is the template - modify it as desired
- Add an `employees.json` file to the project root that contains the details of all employees you wish to generate signature for.
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
      }
    ]
  }
  ```