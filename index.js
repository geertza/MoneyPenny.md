const fs=require("fs") 
inquirer = require('inquirer');
  axios = require('axios').default;
 questions = require('./utils/questions');
answers =""
layout= ""
gitInfo=""

async function init() {
     answers = await inquirer.prompt(questions); 
     
     convertToArray();
     console.log(modBadge)
     gitInfo = await axios.get(`https://api.github.com/users/${answers.userName}`);
     layout= createMD(answers)
     console.log(layout)
     writeToFile();

}

function createMD() {
    return  `# ${answers.projectName}
  ${lincenseBadge} ${modBadge}
    
  <img src= ${answers.image}></img>
  
  ## Table of Contents
  ${answers.purpose}
  
  ## Purpose of Application
  ${answers.purpose}
  
  ## Description 
  ${answers.projectDescription}
  
  ## Required downloads/modules/Apis etc..
  ${answers.modules}
  
  ## Installation
  ${answers.installation}
  
  ## License
  ${lincenseBadge}
  ## Contributions
  ${answers.credits}
  
  ## Tests
  ${answers.tests}
  
  ##Future developement
  ${answers.future}
  ![profile image](${gitInfo.data.avatar_url})

  `}
  
  modBadge=""
  lincenseBadge=""
  function convertToArray(){
     x= answers.licenseType.split(" ")
     y = answers.mods.split(" ")
      for (i=0;i<=x.length-1;i++){
          lincenseBadge += '![License](https://img.shields.io/badge/License-'+x[i]+'-blue.svg) '}
          for (i=0;i<=y.length-1;i++){
          modBadge += '=='+y[i]+'== '}
      }
  








function writeToFile(fileName, data) {
    fs.writeFile(`readme.md`, layout,(err) => {
        return console.log("Success");
    });
}



init();
