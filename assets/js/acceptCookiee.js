const buttonTag = document.querySelector(".btn");
const parentTag = document.querySelector(".accept-cokkiee");

const openToastAlert = () => {
    const Hello = "Hi";
    parentTag.innerHTML = "";
    const toastAlertContainerTag = document.createElement("div");
    toastAlertContainerTag.classList.add("toastAlertContainer");
    // create toastAlertTextTag
    const toastAlertTextTag = document.createElement("div");
    toastAlertTextTag.append(
        `My Wesbsite Using Cookiee...`
    );
    toastAlertTextTag.classList.add("toastAlertText");

    // create AcceptButtonTag
    const closeButtonTag = document.createElement("div");
    closeButtonTag.append("Accept");
    closeButtonTag.classList.add("btn", "btn-sm", "buttonSmall");
    // create AcceptButtonTag
    const closeUnAcceptButtonTag = document.createElement("div");
    closeUnAcceptButtonTag.append("Close");
    closeUnAcceptButtonTag.classList.add("btn", "btn-sm", "ms-1", "buttonSmall");
    // append toastAlertTextTag, closeButtonTag to toastAlertContainerTag
    toastAlertContainerTag.append(toastAlertTextTag, closeButtonTag, closeUnAcceptButtonTag);

    // append toastAlertContainerTag to parentTag
    parentTag.append(toastAlertContainerTag);
    parentTag.style.bottom = `-${parentTag.offsetHeight}px`;
    setTimeout(() => {
        parentTag.style.bottom = `0px`;
    }, 100);

    // Attach event listener on closeButtonTag
    closeButtonTag.addEventListener("click", () => {
        localStorage.setItem("accepted", "1");
        location.reload();
        parentTag.style.bottom = `-${parentTag.offsetHeight}px`;
    });

    // Attach event listener on closeButtonTag
    closeUnAcceptButtonTag.addEventListener("click", () => {
        parentTag.style.bottom = `-${parentTag.offsetHeight}px`;
    });
};

window.addEventListener('load', () => {
    const accept = localStorage.getItem('accepted');
    if (accept != "1") {
        openToastAlert();
    }
})

