const skills = [
    {id: 124353, skill: 'Front-End Development'},
    {id: 256754, skill: 'Back-End Development'},
    {id: 343264, skill: 'Full-Stack Development'}
  ];
	
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };

  function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }

  function create(skill) {
    skill.id = Date.now() % 1000000;
    skills.push(skill)
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }
	
  function getAll() {
    return skills;
  }