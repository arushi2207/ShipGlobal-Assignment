document.addEventListener('DOMContentLoaded', function() {
    var headers = document.querySelectorAll('.accordion-header');

    headers.forEach(function(header) {
        header.addEventListener('click', function() {
            var content = this.nextElementSibling;

            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});