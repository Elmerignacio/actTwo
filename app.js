import {info} from "./info.js"
import {imagess} from "./img.js"

let container = document.getElementById("container")

const data = {
title :"This is a resume of Elmer's",
para: "Hello, I'm Elmer Ignacio, an IT student. I'm passionate about technology and eager to learn more in the field of information technology.",
images:"elmers.jpg",
buttonOne:"About me",
buttonTwo:"learn more",
buttonthree :"Contact Us",
buttonfour:"Follow Us"
}

const{title, para, images,buttonOne, buttonTwo, buttonthree,buttonfour} = data
container.append(info(title, para,buttonOne, buttonTwo, buttonthree,buttonfour))
container.append(imagess(images))