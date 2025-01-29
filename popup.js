
document.addEventListener("DOMContentLoaded", () => {
    console.log("Started")

    const yt = localStorage.getItem("yt")
    const insta = localStorage.getItem("insta")
    const fb = localStorage.getItem("fb")

    const youtube = document.getElementById("youtube")
    yt == 1 ? youtube.checked = true : youtube.checked = false

    const facebook = document.getElementById("facebook")
    fb == 1 ? facebook.checked = true : facebook.checked = false

    const instagram = document.getElementById("instagram")
    insta == 1 ? instagram.checked = true : instagram.checked = false

    const radio = document.querySelectorAll('input[type=checkbox]')
    const toast = document.getElementById("toast")
    const toastmsg = document.getElementById("toastmsg")

    radio.forEach(info => {
        info.addEventListener("change", () => {
            console.log(info.name)
            settingsaver(info.name, info.checked)

        })
    });

    function settingsaver(name, is) {
        switch (name) {
            case "youtube":
                is ? localStorage.setItem("yt", "1") : localStorage.setItem("yt", "0");
                break;
            case "facebook":
                is ? localStorage.setItem("fb", "1") : localStorage.setItem("fb", "0");
                break;
            case "instagram":
                is ? localStorage.setItem("insta", "1") : localStorage.setItem("insta", "0");
                break;
            default:
                console.log("Something might have gone wrong!!");
                break;
        }

        toastmsg.innerText = "Changes saved"
        toast.style.animation = "entry 1s ease-in forwards"
        setTimeout(() => { toast.style.animation = "leave 1s ease-out" }, 5000)
    }

    window.scrollBy(0, 200)
})