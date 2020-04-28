const fs=require("fs") 
inquirer = require('inquirer');
// layoutMD = require('./utility/layoutMD')
 questions = require('./utils/questions');
 MarkdownIt = require('markdown-it')
 md = new MarkdownIt();
 result = md.render('./results/readme.md');
answers =""
layout= ""
async function init() {
     answers = await inquirer.prompt(questions);
     layout= createMD(answers)
     console.log(layout)
     writeToFile();

}

function createMD() {
    return  `# ${answers.projectName}
  
  
  ## Table of Contents

  
  ## Purpose of Application
  ${answers.purpose}
  
  ## Description 
  ${answers.projectDescription}
  
  ##Required downloads/modules/Apis etc..
  ${answers.modules}
  
  ## Installation
  ${answers.installation}
  
  ## License
  ${'Licensed under the ' + (answers.licenseType)}
  
  ## Contributions
  ${answers.credits}
  
  ## Tests
  ${answers.tests}
  
  ##Future developement
  ${answers.future}
  `}
  









function writeToFile(fileName, data) {
    fs.writeFile(`readme.md`, layout,(err) => {
        return console.log("Success");
    });
}



init();
