// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'MIT'){return '![badge ](https://img.shields.io/badge/MIT-License-red)'
} else if (license == 'GNU'){return '![badge](https://img.shields.io/badge/GNU-License-green)'
} else if (license == 'Apache'){return '![badge](https://img.shields.io/badge/Apache-License-blueviolet)'
} else if (license == 'Rust'){return '![badge](https://img.shields.io/badge/Rust-License-orange)'}
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'MIT'){ return 'https://choosealicense.com/licenses/mit/'
} else if(license == 'GNU') {return 'https://www.gnu.org/licenses/licenses.html#GPL'
} else if(license == 'Apache') {return 'https://www.apache.org/licenses/'
} else if(license == 'Rust') {return 'https://rust-lang.github.io/api-guidelines/necessities.html#crate-and-its-dependencies-have-a-permissive-license-c-permissive'}
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, name) {
  if (license == 'MIT') {return `
  MIT License

  Copyright (c) ${new Date().getFullYear()} ${name}
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.`
} else if(license == 'GNU') {return `The GNU General Public License
The GNU General Public License is often called the GNU GPL for short; it is used by most GNU programs, and by more than half of all free software packages. The latest version is version 3.

The GNU General Public License is available in these formats: HTML, plain text, ODF, Docbook v4 or v5, Texinfo, LaTeX, Markdown, and RTF. These documents are not formatted for standalone publishing, and are intended to be included in another document.
A Quick Guide to GPLv3
Older versions of the GNU GPL`
} else if(license == 'Apache') {return `APACHE LICENSES
The Apache Software Foundation uses various licenses to distribute software and documentation, and to accept regular contributions from individuals and corporations and larger grants of existing software products.

These licenses help us achieve our goal of providing reliable and long-lived software products through collaborative, open-source software development. In all cases, contributors retain full rights to use their original contributions for any other purpose outside of Apache while providing the ASF and its projects the right to distribute and build upon their work within Apache.`
} else if(license == 'Rust') {return `The software produced by the Rust project is dual-licensed, under either the MIT or Apache 2.0 licenses. Crates that simply need the maximum compatibility with the Rust ecosystem are recommended to do the same, in the manner described herein. Other options are described below.

These API guidelines do not provide a detailed explanation of Rust's license, but there is a small amount said in the Rust FAQ. These guidelines are concerned with matters of interoperability with Rust, and are not comprehensive over licensing options.`}
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

${renderLicenseBadge(data.license)}

## Table of Contents 
${data.tableOfContents}


## Installation
${data.installation}


## Usage
${data.usage}


## Credits
${data.credits}


## Licenses
${renderLicenseLink(data.license)}

${renderLicenseSection(data.license, data.name)}



## Contributing
${data.contributing}


## Tests 
${data.tests}


## Questions
For additional questions please email me at ${data.email}. 

You can also find me on GitHub at https://github.com/${data.username}.
`;
}

module.exports = generateMarkdown;
