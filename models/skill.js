const skills = [
    {id: 124353, skill: 'Front-End Development'},
    {id: 256754, skill: 'Back-End Development'},
    {id: 343264, skill: 'Full-Stack Development'}
  ];
	
  module.exports = {
    getAll,
    getOne
  };

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }
	
  function getAll() {
    return skills;
  }