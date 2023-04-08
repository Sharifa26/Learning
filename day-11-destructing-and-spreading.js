const num = [1, 3, 5, 7, 9];

let [num1, num2, num3] = num;

console.log(num3);


const full = [['css', 'html'], ['java', 'Node', 'js'], ['RDBMS', 'mysql', 'workbench']];

let [front, back, DB] = full;

console.log(front, front.length);


let n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let [n1, n2, n3, ...rest] = n;

console.log(rest);


const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  job: 'Instructor and Developer',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  languages: ['Amharic', 'English', 'Suomi(Finnish)']
}


const getPersonInfo = obj => {
  const skills = obj.skills
  const formattedSkills = skills.slice(0, -1).join(', ')
  const languages = obj.languages
  const formattedLanguages = languages.slice(0, -1).join(', ')

  let personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${obj.age
    } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${skills[skills.length - 1]
    }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

  return personInfo
}

console.log(getPersonInfo(person));

const constants = [2.72, 3.14, 9.81, 37, 100];
let [e, pi, , humanBody, waterboil] = constants;
console.log(e, pi, humanBody, waterboil);