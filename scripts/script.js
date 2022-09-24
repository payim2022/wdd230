let x = document.lastModified;
    document.getElementById("lastModified").innerHTML = "Last Updated: " + x;

    let d = new Date();
    let n = d.getFullYear();
    document.getElementById("thisYear").innerHTML = n;