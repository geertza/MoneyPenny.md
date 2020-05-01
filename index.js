const fs=require("fs") 
inquirer = require('inquirer');
  axios = require('axios').default;
 questions = require('./utils/questions');
answers =""
layout= ""
gitInfo=""

async function init() {
     answers = await inquirer.prompt(questions); 
     
     console.log(answers.licenseType);
    //  gitInfo = await axios.get(`https://api.github.com/users/${answers.userName}`);
    //  layout= createMD(answers)
    //  console.log(layout)
    //  writeToFile();

}

function createMD() {
    return  `<center> <h1>${answers.projectName}</h1> </center>
    <img src= ${answers.image} >
  
  
  ## Table of Contents

  
  ## Purpose of Application
  ${answers.purpose}
  
  ## Description 
  ${answers.projectDescription}
  
  ## Required downloads/modules/Apis etc..
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
  ![profile image](${gitInfo.data.avatar_url})

  `}
  









function writeToFile(fileName, data) {
    fs.writeFile(`readme.md`, layout,(err) => {
        return console.log("Success");
    });
}



init();
