// a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(answers) { 
    if (answers.license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (answers.license === "Apache2.0") { 
    return `![License:Apache2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  } else if (answers.license === "Unlicense") {
    return `![License: Unlicense](https://img.shields.io/badge/License-Unlicense-blue.svg)`
  } else {
    return ''};
  };
  
  // a function that returns the license link
  // If there is no license, return an empty string

  function renderLicenseLink(answers) {
    if (answers.license === "MIT") {
      return `https://opensource.org/licenses/MIT`
    } else if (answers.license === "Apache2.0") { 
      return `https://opensource.org/licenses/Apache-2.0`
    } else if (answers.license === "Unlicense") {
      return `http://unlicense.org/`
    } else {
      return ''};
  };
  
  // a function that returns the license section of README
  // If there is no license, return an empty string
  
  function renderLicenseSection(answers) {
  if (answers.license === "MIT") {
    return `Copyright ${answers.year} ${answers.authorName} 

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
  } else if (answers.license === "Apache2.0") { 
    return `Copyright [${answers.year}] [${answers.authorName}]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`
  } else if (answers.license === "Unlicense") {
    return `This is free and unencumbered software released into the public domain.
  
    Anyone is free to copy, modify, publish, use, compile, sell, or
    distribute this software, either in source code form or as a compiled
    binary, for any purpose, commercial or non-commercial, and by any
    means.
    
    In jurisdictions that recognize copyright laws, the author or authors
    of this software dedicate any and all copyright interest in the
    software to the public domain. We make this dedication for the benefit
    of the public at large and to the detriment of our heirs and
    successors. We intend this dedication to be an overt act of
    relinquishment in perpetuity of all present and future rights to this
    software under copyright law.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
    IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
    OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
    ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.
    
    For more information, please refer to <http://unlicense.org/>`
  } else {
    return ''};
  };

module.exports = {renderLicenseSection,renderLicenseBadge,renderLicenseLink};