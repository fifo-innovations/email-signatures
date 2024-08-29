import fs from 'node:fs';
import * as path from 'node:path';

const __dirname = path.dirname(process.argv[1]).replace(/%20/g, ' ');;

// Get the current directory name
const dirName = __dirname.split(path.sep);
console.log(`Current directory: ${dirName}`);


// Get the path to the employees JSON file
const jsonFilePath = path.join(__dirname, 'employees.json');
console.log(`JSON file path: ${jsonFilePath}`);

// Read the contents of the employees JSON file
const {data: employees} = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));
console.log('Loaded employees list');


// Get the path to the email signature template file
const templateFilePath = path.join(__dirname, '/emails/fifo-email-signature.tsx');
console.log(`Template file path: ${templateFilePath}`);

// Read the contents of the email signature template file
const templateContent = fs.readFileSync(templateFilePath, 'utf8');
console.log('Loaded template contents');


// Create copy of template file where placeholders are replaced with employee data
function replacePlaceholders(original, name, title) {
  const content = original;
  return content.replace(/{name}/g, name).replace(/{title}/g, title);
}

// Loop through the JSON array and create a new email signature file for each employee
employees.forEach((entry, index) => {
  const { name, title } = entry;
  console.log(`Creating email signature for ${name} (${title})`);
  
  // Replace placeholders in the template with the employee data
  const newContent = replacePlaceholders(templateContent, name, title);
  console.log('Replaced placeholders with employee data');
  
  
  // Create name for the new email signature file
  const nameSlug = name.toLowerCase().split(' ').join('-');

  // check the for the __dirname/emails/signatures directory - if it doesn't exist, create it
  const outDirPath = path.join(__dirname, '/emails/signatures');
  if (!fs.existsSync(outDirPath)) {
    fs.mkdirSync(outDirPath);
    console.log('Created signatures directory');
  }

  const newFilePath = path.join(__dirname, `/emails/signatures/${nameSlug}-email-signature.tsx`);

  // Write the new email signature file to the signatures directory
  fs.writeFileSync(newFilePath, newContent, 'utf8');
  console.log(`${name}'s email signature saved at: ${newFilePath}`);
});