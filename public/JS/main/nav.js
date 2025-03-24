const siteMap = {
    "swe": "public/Pages/SweetDiscovery.html",
    "cho": "https://chobrothers.com.ng/",
    "wik": "https://www.wikipedia.org",
    "ama": "https://www.amazon.com",
    "fac": "https://www.facebook.com"
};

function searchSite() {
    const searchInput = document.getElementById("iframeSearch").value;
    const prefix = searchInput.slice(0, 3).toLowerCase();
    const iframe = document.getElementById("contentFrame");

    if (siteMap[prefix]) {
        iframe.src = siteMap[prefix];
    } else {
        alert("Site not found.");
    }
}

document.getElementById("iframeSearch").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchSite();
    }
});