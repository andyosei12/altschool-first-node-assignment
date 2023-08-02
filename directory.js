const path = require('path');
const process = require('process');
const os = require('os');

const printDirectoryAndOsInfo = () => {
  console.log(`Current working directory is ${process.cwd()}`);
  console.log(`Your path separator is ${path.sep}`);
  console.log(`The file extenstion is ${path.extname('./directory.js')}`);
  console.log(`The process id is ${process.pid}`);
  console.log(os.userInfo());
  console.log(`The current os platform is ${os.platform()}`);
};

printDirectoryAndOsInfo();
