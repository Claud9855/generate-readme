// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "None"){
    return "";
  }

  return `![badge]${renderLicenseLink(license)}`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'None'){
    return "";
  }

  return `(https://img.shields.io/badge/license-${license}-blue.svg)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'None'){
    return "";
  }

  return `## License
  ${renderLicenseBadge(license)}\n
  This application is covered by the ${license} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, installationInstructions, usageInformation, contribution, testInstructions, license, githubUserName, email}) {
  return `# ${title}
  ${renderLicenseBadge(license)}
  
  ## Description 
  ${description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  ${installationInstructions}

  ## Usage 
  ${usageInformation}

  ${renderLicenseSection(license)}

  ## Contributing 
  ${contribution}

  ## Tests
  ${testInstructions}

  ## Questions
  If you have any questions about this projects, please contact me directly at [email](mailto:${email}), You can view more of my projects at [GitHub](https://github.com/${githubUserName})
`;
}

module.exports = generateMarkdown;