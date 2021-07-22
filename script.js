const input = document.querySelector("#guess");
const button = document.querySelector("#btn");
const answer = Math.floor(Math.random() * 20) + 1;

input.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        play();
    }
})

button.addEventListener('click', play);

function play() {
    const userNumber = document.querySelector("#guess").value;
    if (userNumber < 1 || userNumber > 20) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter number from 1 to 20!',

        })
    } else if (isNaN(userNumber)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter number !',
        })
    } else {
        if (userNumber < answer) {

            Swal.fire('Try higher number, The Computer is winning');
        } else if (userNumber > answer) {
            Swal.fire('Try lower number, The Computer is winning');;
        } else {

            Swal.fire({
                title: 'Sweet!',
                text: 'Modal with a custom image.',
                imageUrl: 'https://images.unsplash.com/photo-1578269174936-2709b6aeb913?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2lufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
            });
        }
    }
}