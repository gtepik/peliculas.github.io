let names = [];

function addName() {
    const nameInput = document.getElementById("nameInput");
    const newName = nameInput.value.trim();
    
    if (newName !== "") {
        if (names.includes(newName)) {
            alert("El nombre ya está en la lista.");
        } else {
            names.push(newName);
            renderNames();
            nameInput.value = "";
        }
    } else {
        alert("Por favor ingrese un nombre válido.");
    }
}

function editName(index) {
    const newName = prompt("Editar nombre:", names[index]);
    if (newName !== null && newName.trim() !== "") {
        names[index] = newName.trim();
        renderNames();
    }
}

function deleteName(index) {
    if (confirm("¿Estás seguro de que quieres eliminar este nombre?")) {
        names.splice(index, 1);
        renderNames();
    }
}

function renderNames() {
    const nameTable = document.getElementById("nameTable");
    nameTable.innerHTML = `
        <tr>
            <th>Nombre</th>
            <th>Acciones</th>
        </tr>
    `;
    names.forEach((name, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${name}</td>
            <td>
                <button onclick="editName(${index})">Editar</button>
                <button onclick="deleteName(${index})">Eliminar</button>
            </td>
        `;
        nameTable.appendChild(row);
    });
}


