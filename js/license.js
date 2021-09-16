const data = {
    "text": "This product is under the GNU General Public License v3.0\nFor the full license, please click \"View full license\" at the bottom of this page."
}

document.getElementById("text").innerText += data.text;

function back(){
    history.back();
}