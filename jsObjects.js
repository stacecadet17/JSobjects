let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

for(let student in students){
  console.log(students[student]);
}

for (var key in users){
  console.log(key.toUpperCase());
    for(var item in users[key]){
      console.log(parseInt(item) + 1 + " - "+users[key][item].last_name.toUpperCase()+", "+users[key][item].first_name.toUpperCase()+" - "+(users[key][item].last_name.length+users[key][item].first_name.length))
  }
}
