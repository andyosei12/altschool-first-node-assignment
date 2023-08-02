const fs = require('fs/promises');
const path = require('path');

const studentsDirectory = path.join(__dirname, 'students');
const newDirectory = path.join(__dirname, 'names');
const userFilePath = path.join(studentsDirectory, 'user.js');

const useFsModule = async () => {
  try {
    // creating the students directory
    await fs.mkdir(studentsDirectory);
    console.log('Students directory created');

    // creating the user.js file
    await fs.writeFile(userFilePath, '');
    console.log('user file created successfully');

    // renaming the students directory
    await fs.rename(studentsDirectory, newDirectory);
    console.log('Student directory renamed successfully');

    await fs.writeFile(
      `${newDirectory}/user.js`,
      'const name =  "Andrew Osei-Owusu" \n'
    );
    console.log('user file updated successfully');

    // appending contents
    await fs.appendFile(
      `${newDirectory}/user.js`,
      'const age = 25; \n const sex = "male"; \n const nationality="Ghanaian"; \n const phoneNumber = +233554670146;\n  const food = "Rice"'
    );
    console.log('New user info appended successfully');

    // rename the user file
    await fs.rename(
      `${newDirectory}/user.js`,
      `${newDirectory}/Andrew_Owusu.js`
    );
    console.log('user file name changed successfully');

    // reading file
    const content = await fs.readFile(`${newDirectory}/Andrew_Owusu.js`, {
      encoding: 'utf8',
    });
    console.log('Reading content \n', content);

    // deleting a file
    await fs.rm(`${newDirectory}/Andrew_Owusu.js`);
    console.log('file deleted successfully');

    // deleting a folder
    await fs.rmdir(newDirectory);
    console.log('folder deleted successfully');
  } catch (error) {
    console.log(error);
  }
};

useFsModule();

// fs.writeFile(
//   `${newDirectory}/user.js`,
//   'const name =  "Andrew Osei-Owusu" \n',
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('User content updated');
//     }
//   }
// );

// fs.writeFileSync(`${directory}/user.js`, '', { encoding: 'utf-8' });
// fs.renameSync(directory, 'names');
// fs.writeFileSync('./names/user.js', 'const name =  "Andrew Osei-Owusu" \n');
// fs.appendFileSync(
//   './names/user.js',
//   'const age = 25; \n const sex = "male"; \n const nationality="Ghanaian"; \n const phoneNumber = +233554670146;\n  const food = "Rice"'
// );
// fs.renameSync('./names/user.js', './names/Andrew_Owusu.js');
// fs.readFileSync('./names/Andrew_Owusu.js');
