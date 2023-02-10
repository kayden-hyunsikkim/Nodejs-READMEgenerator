// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadge = {
    MIT : '![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)',
    APACHE : '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
    Eclipse : '![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)',
    BSD : '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)',
    GNU : '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    None : ''
  }


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = {
    MIT : 'https://opensource.org/licenses/MPL-2.0',
    APACHE : 'https://opensource.org/licenses/Apache-2.0',
    Eclipse : 'https://opensource.org/licenses/EPL-1.0',
    BSD : 'https://opensource.org/licenses/BSD-3-Clause',
    GNU : 'https://www.gnu.org/licenses/gpl-3.0',
    None : ''
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licensesection = {
    MIT : '```MIT ```',
    APACHE : '```APACHE 2.0 ```',
    Eclipse : '```GPL 3.0 ```',
    BSD : '```Eclipse Public License 1.0 ```)',
    GNU : '```GNU GPL v3 ```',
    None : ''
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  renderLicenseBadge(license),
  renderLicenseLink(license),
  renderLicenseSection(license)

  //return `# ${data.title}`;
}

module.exports = {
  generateMarkdown
};


