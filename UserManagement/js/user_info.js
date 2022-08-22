let userDataList = new Array();

const userInfoInput = document.querySelectorAll(".user-info-input");
const saveButton = document.querySelector(".save-button");

saveButton.onclick = () => {
    let user = {
        username: userInfoInput[0].querySelector("input").value,
        password: userInfoInput[1].querySelector("input").value,
        name: userInfoInput[2].querySelector("input").value,
        email: userInfoInput[3].querySelector("input").value
    }
    userDataList.push(user);
    clearInput();
    console.log(userDataList);
    appendList();
}

function clearInput() {
    for(let input of userInfoInput) {
        input.querySelector("input").value = "";
    }
}

function appendList() {
    const tbody = document.querySelector("tbody");

    tbody.innerHTML = "";

    userDataList.forEach((user, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${user.username}</td>
                <td>${user.password}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td><button class="delete-button">삭제</button></td>
            </tr>
        `;
    });

    const deleteButton = document.querySelectorAll(".delete-button");
    
    deleteButton.forEach((button, index) => {
        button.onclick = () => {
            userDataList.splice(index, 1);

            appendList();
        }
    });
}