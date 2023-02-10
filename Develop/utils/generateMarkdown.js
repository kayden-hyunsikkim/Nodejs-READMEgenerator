const fs = require('fs');


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(userlicense) {
  console.log(userlicense);
  const licenseBadge = {
    MIT: '![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)',
    APACHE: '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
    Eclipse: '![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)',
    BSD: '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)',
    GNU: '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    None: ''
  }
  return licenseBadge;

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = {
    MIT: 'https://opensource.org/licenses/MPL-2.0',
    APACHE: 'https://opensource.org/licenses/Apache-2.0',
    Eclipse: 'https://opensource.org/licenses/EPL-1.0',
    BSD: 'https://opensource.org/licenses/BSD-3-Clause',
    GNU: 'https://www.gnu.org/licenses/gpl-3.0',
    None: ''
  }
  console.log(licenseLink);
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  const licensesection = {
    MIT: '```MIT ```',
    APACHE: '```APACHE 2.0 ```',
    Eclipse: '```GPL 3.0 ```',
    BSD: '```Eclipse Public License 1.0 ```)',
    GNU: '```GNU GPL v3 ```',
    None: ''
  }

  console.log(licensesection);
  return licensesection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  const { username, email, projectname, description, userlicense, dependencies, tests, know, contributing } = data;
  const filename = 'READme.md'
  fs.writeFileSync(filename, `# 09 Node.js Challenge: Professional README Generator\n`);
  fs.appendFileSync(filename, `## Git hub user name\n\n\n [${username}](https://github.com/${username})\n\n`);
  fs.appendFileSync(filename, `## E-mail address\n\n\n ${email}\n\n`);
  fs.appendFileSync(filename, `## Project name\n\n\n ${projectname}\n\n`);
  fs.appendFileSync(filename, `## Description\n\n\n ${description}\n\n`);
  fs.appendFileSync(filename, `## License\n\n\n ${userlicense}\n\n`);
  fs.appendFileSync(filename, `## dependencies\n\n\n ${dependencies}\n\n`);
  fs.appendFileSync(filename, `## tests\n\n\n ${tests}\n\n`);
  fs.appendFileSync(filename, `## Usage\n\n\n ${know}\n\n`);
  fs.appendFileSync(filename, `## Contributing\n\n\n ${contributing}\n\n`);

  //return `# ${data.title}`;
}

module.exports = {
  generateMarkdown
};


