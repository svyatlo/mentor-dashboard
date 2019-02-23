import data from '../../data/data.json';
import compare from './compare';

const mentors = [];
const dataMentorsArray = data[1];

for (let i = 0; i < dataMentorsArray.length; i += 1) {
  const mentor = {
    label: dataMentorsArray[i].mentorNickName,
  };
  mentors.push(mentor);
}

mentors.sort(compare);

export default mentors;
