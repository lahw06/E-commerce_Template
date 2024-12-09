function toggleContent(contentId, iconId) {
    var content = document.getElementById(contentId);
    var icon = document.getElementById(iconId);
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        icon.innerHTML = "-";
    } else {
        content.style.display = "none";
        icon.innerHTML = "+";
    }
}