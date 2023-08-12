window.addEventListener('load', () => {
    const form = document.querySelector('#newtask-form');
    const input = document.querySelector('#new-task-input');
    const list_element = document.querySelector('#tasks');



    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;
        if (!task) {
            alert('Please fill in your task.');
            return;
        }

        const task_element = document.createElement('div');
        task_element.classList.add('task');

        const task_element_content = document.createElement('div');
        task_element_content.classList.add('content');

        /* task_element_content.innerText = task;*/

        task_element.appendChild(task_element_content);

        const task_element_input = document.createElement('input');
        task_element_input.classList.add('text');
        task_element_input.type = 'text';
        task_element_input.value = task;
        task_element_input.setAttribute('readonly', 'readonly');

        task_element_content.appendChild(task_element_input);

        const task_actions_element = document.createElement('div');
        task_actions_element.classList.add('actions');

        const task_edit_element = document.createElement('buttons');
        task_edit_element.classList.add('edit');
        task_edit_element.innerText = 'Edit';

        const task_delete_element = document.createElement('buttons');
        task_delete_element.classList.add('delete');
        task_delete_element.innerText = 'Delete';

        task_actions_element.appendChild(task_edit_element);
        task_actions_element.appendChild(task_delete_element);

        task_element.appendChild(task_actions_element);

        list_element.appendChild(task_element);

        input.value = "";


        task_edit_element.addEventListener('click', (e) => {
            if (task_edit_element.innerText.toLowerCase() == "edit") {
                task_edit_element.innerText = "Save";
                task_element_input.removeAttribute("readonly");
                task_element_input.focus();
            } else {
                task_edit_element.innerText = "Edit";
                task_element_input.setAttribute("readonly", "readonly");
            }
        });


        task_delete_element.addEventListener('click', (e) => {
            list_element.removeChild(task_element);
        });
    });



});