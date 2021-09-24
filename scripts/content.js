
// Add your javascript here
function load() {
    professional()
    portifolio()
    console.log("finished")
}

//professional
function professional() {

    const args = { 
        firstColumn: [
            { text: "GIT", valuenow: 30},
            { text: "Algorithm", valuenow: 25},
            { text: "Object Orientation", valuenow: 25},
        ],
        secondColumn: [
            { text: "Logic programming", valuenow: 25},
            { text: "Word", valuenow: 50},
            { text: "Excell", valuenow: 35},
        ],
        thirdColumn: [
            { text: "HTML", valuenow: 35},
            { text: "CSS", valuenow: 25},
            { text: "JavaScript", valuenow: 20},
        ],
        fourthColumn: [
            { text: "Bootstrap", valuenow: 20},
            { text: "React", valuenow: 20},
            { text: "React Native", valuenow: 15},
        ],
        fifthColumn: [
            { text: "Php", valuenow: 10},
            { text: "NodeJs", valuenow: 10},
            { text: "MySQL", valuenow: 15},
        ],
        sixthColumn: [
            { text: "PhpMyAdmin", valuenow: 15},
            { text: "NoSQL (MongoDB)", valuenow: 15},
            { text: "React", valuenow: 10},
        ],
        seventhColumn: [
            { text: "Linux", valuenow: 30},
            { text: "Windows", valuenow: 50},
        ],
        eightColumn: [
            { text: "Inglês - English", valuenow: 20},
            { text: "Espanhol - Español", valuenow: 20},
            { text: "Japonês - 日本", valuenow: 10},
        ]
    }

    progressBody(args);
}

function progressBody(args) {

    document.getElementById('hardId').appendChild(
        progressColumn(args.firstColumn, "bg-primary", 0)
    );

    document.getElementById('hardId').appendChild(
        progressColumn(args.secondColumn, "bg-success", args.firstColumn.length)
    );

    document.getElementById('frontId').appendChild(
        progressColumn(args.thirdColumn, "bg-primary", 0)
    );

    document.getElementById('frontId').appendChild(
        progressColumn(args.fourthColumn, "bg-success", args.thirdColumn.length)
    );

    document.getElementById('backId').appendChild(
        progressColumn(args.fifthColumn, "bg-primary", 0)
    );

    document.getElementById('backId').appendChild(
        progressColumn(args.sixthColumn, "bg-success", args.fifthColumn.length)
    );

    document.getElementById('sistLangId').appendChild(
        progressColumn(args.seventhColumn, "bg-primary", 0)
    );

    document.getElementById('sistLangId').appendChild(
        progressColumn(args.eightColumn, "bg-success", args.seventhColumn.length)
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
