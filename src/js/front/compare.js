function compare(a, b) {
  const mentorA = a.label.toUpperCase();
  const mentorB = b.label.toUpperCase();

  let comparison = 0;
  if (mentorA > mentorB) {
    comparison = 1;
  } else if (mentorA < mentorB) {
    comparison = -1;
  }
  return comparison;
}

export default compare;
