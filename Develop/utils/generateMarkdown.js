const fs = require('fs');

let licenseBadge = [];
let licenseLink = [];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(userlicense) {
  console.log(userlicense);

  if (userlicense.includes(' MIT ')) {
    licenseBadge.push(` ![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)  `)
  }

  if (userlicense.includes(' APACHE ')) {
    licenseBadge.push(` ![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)  `)
  }

  if (userlicense.includes(' EPL ')) {
    licenseBadge.push(` ![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)  `)
  }

  if (userlicense.includes(' GNU ')) {
    licenseBadge.push(` ![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)  `)
  }

  if (userlicense.includes(' None ')) {
    licenseBadge.push(` `)
  }
  console.log(licenseBadge);
  return licenseBadge;

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(userlicense) {

 console.log(userlicense);

  if (userlicense.includes(' MIT ')) {
    licenseLink.push(` [MIT] (https://opensource.org/licenses/MPL-2.0)  `)
  }

  if (userlicense.includes(' APACHE ')) {
    licenseLink.push(` [APACHE] (https://opensource.org/licenses/Apache-2.0)  `)
  }

  if (userlicense.includes(' EPL ')) {
    licenseLink.push(` [EPL] (https://opensource.org/licenses/EPL-1.0)  `)
  }

  if (userlicense.includes(' GNU ')) {
    licenseLink.push(` [GNU] (https://www.gnu.org/licenses/gpl-3.0)  `)
  }

  if (userlicense.includes(' None ')) {
    licenseLink.push(` `)
  }
  console.log(licenseLink);
  return licenseLink; 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(userlicense,licenseBadge,licenseLink) {
  fs.appendFileSync('READme.md', `## License\n\n\n ${userlicense}\n\n ${licenseBadge}\n\n  ${licenseLink}\n\n `);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  const { username, email, projectname, description, userlicense, dependencies, tests, know, contributing } = data;
  renderLicenseBadge(userlicense);
  renderLicenseLink(userlicense);
  const filename = 'README.md'
  fs.writeFileSync(filename, `# ${projectname}  ${licenseBadge}\n`);
  fs.appendFileSync(filename, `## Table of contents\n\n * [Description](#description)\n\n * [Installation](#installation)\n\n * [Tests](#tests)\n\n * [Usage](#usage)\n\n * [License](#license)\n\n * [Contributing](#contributing)\n\n * [Questions](#questions)\n\n`);
  fs.appendFileSync(filename, `## Description\n ${description}\n`);
  fs.appendFileSync(filename, `## Installation\n ${dependencies}\n`);
  fs.appendFileSync(filename, `## Tests\n ${tests}\n\n`);
  fs.appendFileSync(filename, `## Usage\n ${know}\n\n`);
  renderLicenseSection(userlicense,licenseBadge,licenseLink);
  fs.appendFileSync(filename, `## Contributing\n ${contributing}\n`);
  fs.appendFileSync(filename, `## Questions\n * GitHub : [${username}](https://github.com/${username})\n * E-mail :  ${email}\n\n * How to reach me : (${contributing}  for further questions)`);
}

module.exports = {
  generateMarkdown
};


