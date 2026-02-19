    let students = [];

    const nameInput  = document.getElementById('name');
    const ageInput   = document.getElementById('age');
    const gradeInput = document.getElementById('grade');
    const addBtn     = document.getElementById('addBtn');
    const tbody      = document.getElementById('studentBody');

    function renderTable() {
      tbody.innerHTML = '';

      students.forEach((student, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${student.name}</td>
          <td>${student.age}</td>
          <td>${student.grade}</td>
          <td><button class="delete">Delete</button></td>
        `;

        row.querySelector('.delete').onclick = () => {
          students.splice(index, 1);
          renderTable();
        };

        tbody.appendChild(row);
      });
    }

    addBtn.onclick = () => {
      const name  = nameInput.value.trim();
      const age   = ageInput.value.trim();
      const grade = gradeInput.value.trim();

      if (name && age && grade) {
        students.push({ name, age, grade });
        renderTable();
        nameInput.value = ageInput.value = gradeInput.value = '';
        nameInput.focus();
      }
    };

    gradeInput.onkeypress = (e) => {
      if (e.key === 'Enter') addBtn.click();
    };