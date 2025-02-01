document.addEventListener("DOMContentLoaded", function () {
    const editBtn = document.getElementById("edit-btn");
    const saveBtn = document.getElementById("save-btn");

    const fields = ["first-name", "last-name", "username", "email", "phone", "password"];

    function loadStoredData() {
        fields.forEach(field => {
            let savedValue = localStorage.getItem(field);
            if (savedValue) {
                document.getElementById(field).innerText = savedValue;
            }
        });
    }


    loadStoredData();

    editBtn.addEventListener("click", function () {
        fields.forEach(field => {
            let span = document.getElementById(field);
            let value = span.innerText;
            let inputType = field === "password" ? "password" : "text";

            let input = document.createElement("input");
            input.type = inputType;
            input.value = value;
            input.id = field;

            span.replaceWith(input);
        });

        editBtn.style.display = "none";
        saveBtn.style.display = "block";
    });

    saveBtn.addEventListener("click", function () {
        fields.forEach(field => {
            let input = document.getElementById(field);
            let value = input.value;

            let span = document.createElement("span");
            span.id = field;
            span.innerText = value;

            input.replaceWith(span);

         
            localStorage.setItem(field, value);
        });

        editBtn.style.display = "block";
        saveBtn.style.display = "none";

        alert("✅ Information updated successfully!");
    });
});
