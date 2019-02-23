export default function findMentor(name, mentorArray) {
  let index = 0;
  mentorArray.forEach((mentor) => {
    if (mentor.label === name) {
      index = mentorArray.indexOf(mentor);
    }
  });
  return mentorArray[index];
}
