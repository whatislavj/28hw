async function showUsers() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=5');
      if (!response.ok) {
        throw new Error('Eroare la solicitarea datelor');
      }
  
      const users = await response.json();
  
      users.forEach((utilizator, index) => {
        console.log(`Utilizatorul ${index + 1}: ${utilizator.name}`);
      });
    } catch (error) {
      console.error('Eroare:', error.message);
    }
}
  
showUsers();

// toDoList o sa il fac cand o sa fiu acasa