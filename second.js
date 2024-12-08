// Form submission handler
document.getElementById('contact-form').addEventListener('submit', function (e) 
{
    e.preventDefault(); // Prevent page reload

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) 
        {
        alert(`Thank you, ${name}! I'll get back to you soon.`);
        this.reset(); // Clear the form
        } 
    else 
    {
        alert('Please fill out all fields.');
    }
}
);
