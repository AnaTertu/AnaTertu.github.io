
// Add your javascript here
function load() {
    professional()
    console.log("finished")
}

function professional() {

    const args = { 
        firstColumn: [
            { text: "HTML", valuenow: 100},
            { text: "CSS", valuenow: 85},
            { text: "JavaScript", valuenow: 75},
        ],
        secondColumn: [
            { text: "Adobe Photoshop", valuenow: 75},
            { text: "Sketch", valuenow: 85},
            { text: "Adobe XD", valuenow: 80},
        ]
    }

    progressBody(args);
}

function progressBody(args) {

    document.getElementById('contentId').appendChild(
        progressColumn(args.firstColumn, "bg-primary", 0)
    );

    document.getElementById('contentId').appendChild(
        progressColumn(args.secondColumn, "bg-success", args.firstColumn.length)
    );
}

function progressColumn(values, color, offset) {
    const div = document.createElement('div');

    div.className = 'col-md-6';

    values.forEach(function (element, i) {
        div.appendChild(progressRow(color, element.text, (i+1+offset)*100, element.valuenow))
    });

    return div;
}

function progressRow(color, text, delay, valuenow) {
    const mainDiv = document.createElement('div');
    const span = document.createElement('span');
    const innerDiv = document.createElement('div');
    const progressDiv = document.createElement('div');

    mainDiv.className = 'mb-2';

    span.innerHTML = text;

    innerDiv.className = 'progress my-1';

    progressDiv.className = 'progress-bar ' + color;
    progressDiv.setAttribute('role', 'progressbar');
    progressDiv.setAttribute('data-aos', 'zoom-in-right');
    progressDiv.setAttribute('data-aos-anchor', '.skills-section');
    progressDiv.setAttribute('aria-valuemin', '0');
    progressDiv.setAttribute('aria-valuemax', '100');
    progressDiv.setAttribute('data-aos-delay', delay);
    progressDiv.style = "width: " + valuenow + "%";
    progressDiv.setAttribute('aria-valuenow', valuenow);

    innerDiv.appendChild(progressDiv);
    mainDiv.appendChild(span);
    mainDiv.appendChild(innerDiv);

    return mainDiv;
}
