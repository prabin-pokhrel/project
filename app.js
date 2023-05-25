window.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    var form = document.getElementById('uploadForm');

    // Add submit event listener to the form
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Validate the form inputs
        var title = document.getElementById('title').value.trim();
        var description = document.getElementById('description').value.trim();
        var file = document.getElementById('file').value.trim();

        if (title === '') {
            alert('Please enter a title for the notes.');
            return;
        }

        if (description === '') {
            alert('Please enter a description for the notes.');
            return;
        }

        if (file === '') {
            alert('Please select a file to upload.');
            return;
        }

        // If all inputs are valid, submit the form
        form.submit();
    });
});