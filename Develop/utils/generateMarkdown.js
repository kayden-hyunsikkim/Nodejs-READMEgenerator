const fs = require('fs');

let licenseBadge = [];
let licenseLink = [];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(userlicense) {
  console.log(userlicense);

  if (userlicense.includes('MIT')) {
    licenseBadge.push(`MIT ![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)\n`)
  }

  if (userlicense.includes('APACHE')) {
    licenseBadge.push(`APACHE ![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`)
  }

  if (userlicense.includes('EPL')) {
    licenseBadge.push(`EPL ![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)`)
  }

  if (userlicense.includes('GNU')) {
    licenseBadge.push(`GNU ![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`)
  }

  if (userlicense.includes('None')) {
    licenseBadge.push(`None`)
  }
  console.log(licenseBadge);
  return licenseBadge;

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(userlicense) {

 console.log(userlicense);

  if (userlicense.includes('MIT')) {
    licenseLink.push(`[MIT] (https://opensource.org/licenses/MPL-2.0)`)
  }

  if (userlicense.includes('APACHE')) {
    licenseLink.push(`[APACHE] (https://opensource.org/licenses/Apache-2.0)`)
  }

  if (userlicense.includes('EPL')) {
    licenseLink.push(`[EPL] (https://opensource.org/licenses/EPL-1.0)`)
  }

  if (userlicense.includes('GNU')) {
    licenseLink.push(`[GNU] (https://www.gnu.org/licenses/gpl-3.0)`)
  }

  if (userlicense.includes('None')) {
    licenseLink.push(`None`)
  }
  console.log(licenseLink);
  return licenseLink; 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseBadge,licenseLink) {
  fs.appendFileSync('READme.md', `## License\n\n\n  ${licenseBadge}\n\n  ${licenseLink}\n\n `);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  const { username, email, projectname, description, userlicense, dependencies, tests, know, contributing } = data;
  renderLicenseBadge(userlicense);
  renderLicenseLink(userlicense);
  const filename = 'READme.md'
  fs.writeFileSync(filename, `# 09 Node.js Challenge: Professional README Generator\n`);
  fs.appendFileSync(filename, `## Git hub user name\n[${username}](https://github.com/${username})\n`);
  fs.appendFileSync(filename, `## E-mail address\n ${email}\n`);
  fs.appendFileSync(filename, `## Project name\n ${projectname}\n`);
  fs.appendFileSync(filename, `## Description\n ${description}\n`);
  fs.appendFileSync(filename, `## dependencies\n ${dependencies}\n`);
  fs.appendFileSync(filename, `## tests\n ${tests}\n\n`);
  fs.appendFileSync(filename, `## Usage\n ${know}\n\n`);
  fs.appendFileSync(filename, `## Contributing\n ${contributing}\n`);
  renderLicenseSection(licenseBadge,licenseLink);
  //console.log(data.title);
  //return `# ${data.title}`;
}

module.exports = {
  generateMarkdown
};


