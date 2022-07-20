"use strict";

window.addEventListener("load", () => {
    const box = document.querySelectorAll(".box_items .box_item");
    const button = document.querySelectorAll(".giving .button button");
    const buttonDollar = document.querySelectorAll(".giving_dollar .button button");

    box.forEach((elem) => {
        elem.addEventListener("click", () => {// Click button
            box.forEach((remove) => {
                remove.classList.remove("active");// Remove class button
            });
            elem.classList.add("active");// Add class button
        });
    });

    button.forEach((elem) => {
        elem.addEventListener("click", () => { // Click button
            button.forEach((remove) => { // Remove class button
                remove.classList.remove("active");
            });
            elem.classList.add("active"); // Add class button
        });
    });

    buttonDollar.forEach((elem) => {
        elem.addEventListener("click", () => {
            buttonDollar.forEach((remove) => { // Click button
                remove.classList.remove("active");// Remove class button
            });
            elem.classList.add("active");// Add class button
        });
    });
});