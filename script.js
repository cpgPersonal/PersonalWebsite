function type(text, id) {
    let index = 0;
    const element = document.getElementById(id);
    function typing() {
        element.innerText = text.slice(0, index);
        index++;
        if (index <= text.length) {
            setTimeout(typing, 100);
        }
    }
    typing();
}
type("Callum Piper-Gilbert", "mainName");
type("University of Reading", "mainUni");
type("BSc Computer Science", "mainCourse");