'use strict';
const questions = [];

function Question(questionStr, answerVarName, answerType, choices, defaultAnswer) {
  this.message = questionStr;
  this.name = answerVarName;
  this.type = answerType;
  this.choices = choices;
  this.default = defaultAnswer
   questions.push(this);
}
new Question(
  ' developer name',
  'developerName',
  'input',
  null,
  'andy',
);
 new Question(
  'github username',
  'userName',
  'input',
  null,
  'geertza',
);

new Question(
  'Project Name?',
  'projectName',
  'input',
  null,
  'readthisb'
);
new Question(
  'purpose of project / how it can be useful',
  'purpose',
  'input',
  null,
  'write stupid readme',
);
 new Question(
  'description of project',
  'projectDescription',
  'input',
  null,
  'answer questions and get readme written out for you',
);

new Question(
  'installation instructons',
  'installation',
  'input',
  null,
  "inti npm and install modules",
);
new Question(
  'Required module / add ons?',
  'modules',
  'input',
  null,
  'until,fx,begger',
);


new Question(
  'app instructions for using',
  'instructions',
  'input',
  null,
  'answer questions',
);

new Question(
  'other contributors',
  'credits',
  'input',
  null,
  'none',
);

 new Question(
  'lincense type',
  'licenseType',
  'input',
  null,
  'freebase',
);



 new Question(
  'where to test and how to use',
  'tests',
  'input',
  null,
  "none",

  new Question(
    'chnages you would make in the future',
    'future',
    'input',
    null,
    "none",
  )
);

module.exports = questions;