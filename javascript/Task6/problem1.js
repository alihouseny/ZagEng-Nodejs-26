let students = [];

    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const gradeInput = document.getElementById('grade');
    const addBtn = document.getElementById('add');
    const saveBtn = document.getElementById('save');
    const loadBtn = document.getElementById('load');
    const jsonArea = document.getElementById('jsonOutput');
    const list = document.getElementById('studentList');

    function renderStudents() {
      list.innerHTML = '';
      students.forEach(student => {
        const li = document.createElement('li');
        li.textContent = `${student.name} - ${student.age} years old - Grade: ${student.grade}`;
        list.appendChild(li);
      });
    }
    addBtn.addEventListener('click', () => {
      const name = nameInput.value.trim();
      const age = Number(ageInput.value);
      const grade = gradeInput.value.trim();

      if (name && age && grade) {
        students.push({ name, age, grade });
        renderStudents();
        nameInput.value = '';
        ageInput.value = '';
        gradeInput.value = '';
      }
    });
    saveBtn.addEventListener('click', () => {
      const jsonString = JSON.stringify(students, null, 2);
      jsonArea.value = jsonString;
      console.log('Saved JSON:', jsonString);
    });

    loadBtn.addEventListener('click', () => {
      const jsonString = jsonArea.value.trim();
      if (jsonString) {
        try {
          students = JSON.parse(jsonString);
          renderStudents();
          console.log('Loaded students:', students);
        } catch (e) {
          console.error('Invalid JSON');
          alert('Invalid JSON format');
        }
      }
    });