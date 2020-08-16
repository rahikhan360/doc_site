//! Seach Bar Code
timeout_var = null;

function typeWriter(
    selector_target,
    text_list,
    placeholder = false,
    i = 0,
    text_list_i = 0,
    delay_ms = 200
) {
    if (!i) {
        if (placeholder) {
            document.querySelector(selector_target).placeholder = "";
        } else {
            document.querySelector(selector_target).innerHTML = "";
        }
    }
    txt = text_list[text_list_i];
    if (i < txt.length) {
        if (placeholder) {
            document.querySelector(selector_target).placeholder += txt.charAt(
                i
            );
        } else {
            document.querySelector(selector_target).innerHTML += txt.charAt(i);
        }
        i++;
        setTimeout(
            typeWriter,
            delay_ms,
            selector_target,
            text_list,
            placeholder,
            i,
            text_list_i
        );
    } else {
        text_list_i++;
        if (typeof text_list[text_list_i] === "undefined") {
            setTimeout(
                typeWriter,
                delay_ms * 5,
                selector_target,
                text_list,
                placeholder
            );
        } else {
            i = 0;
            setTimeout(
                typeWriter,
                delay_ms * 3,
                selector_target,
                text_list,
                placeholder,
                i,
                text_list_i
            );
        }
    }
}

text_list = ["Search..."];

return_value = typeWriter("#searchbar", text_list, true);

//! Dropdown Menu Code

//// Variable Declaration
const dropdown = document.querySelector(".dropdown");
const conDropdown = document.querySelector(".con-dropdown");
const items = document.querySelectorAll(".con-effect .dropdown-menu button");

//// Main Code
conDropdown.addEventListener("click", (evt) => {
    dropdown.classList.toggle("open");
});

document.addEventListener("click", (evt) => {
    if (!evt.target.closest(".dropdown")) {
        dropdown.classList.remove("open");
    }
});

items.forEach((item) => {
    item.addEventListener("click", (evt) => {
        conDropdown.querySelector(".text").innerHTML = "";
        conDropdown
            .querySelector(".text")
            .appendChild(evt.target.cloneNode(true));
        items.forEach((_item) => {
            _item.classList.remove("selected");
        });
        evt.target.classList.add("selected");
    });
});
