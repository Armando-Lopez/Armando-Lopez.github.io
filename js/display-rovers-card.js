window.addEventListener('load', () => {

    const roversUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=Y7uIPtPAgYLZ0GAvIHgQbIjRLNGvWhtm2uVxP4qo`;
    const rovers_links = document.querySelectorAll('.rover-link');
    const images_container = document.querySelectorAll('.rover-image-container');
    const names_container = document.querySelectorAll('.rover-name-container');
    const launchs_container = document.querySelectorAll('.rover-launching-container');
    const landings_container = document.querySelectorAll('.rover-landing-container');
    const cameras_container = document.querySelectorAll('.rover-cameras-container');
    const photos_container = document.querySelectorAll('.rover-photos-container');
    const status_container = document.querySelectorAll('.rover-status-container');


    fetch(roversUrl)
        .then((response) => response.json())
        .then((data) => {

            data.rovers.forEach((rover, index) => {

                rovers_links[index].setAttribute('href', `#${rover.name}`)

                images_container[index].style.background = `url(../img/rovers/${rover.name}.jpg)`;
                images_container[index].style.borderTopLeftRadius = '15px'
                images_container[index].style.borderTopRightRadius = '15px'
                images_container[index].style.backgroundSize = 'cover';

                names_container[index].innerText = rover.name;

                launchs_container[index].innerText = rover.launch_date;

                landings_container[index].innerText = rover.landing_date;

                cameras_container[index].innerText = rover.cameras.length;

                photos_container[index].innerText = rover.total_photos;

                status_container[index].innerText = rover.status;

                console.log(rover)
            });
        })
        .catch(err => {
            console.log(err)
        });
});