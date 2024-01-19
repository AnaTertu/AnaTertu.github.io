
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
            { text: "GIT", valuenow: 80},
            { text: "Algorithm", valuenow: 75},
            { text: "Object Orientation", valuenow: 75},
        ],
        secondColumn: [
            { text: "Logic programming", valuenow: 75},
            { text: "Word", valuenow: 60},
            { text: "Excell", valuenow: 55},
        ],
        thirdColumn: [
            { text: "Teste de Software", valuenow: 70},
            { text: "Automação Cypress", valuenow: 45},
            { text: "Consumo de API`s", valuenow: 50},
        ],
        fourthColumn: [
            { text: "Jmeter", valuenow: 40},
            { text: "Cypress", valuenow: 40},
            { text: "Postman", valuenow: 50},
        ],
        fifthColumn: [
            { text: "HTML", valuenow: 55},
            { text: "CSS", valuenow: 45},
            { text: "JavaScript", valuenow: 40},
        ],
        sixthColumn: [
            { text: "Bootstrap", valuenow: 20},
            { text: "React", valuenow: 20},
            { text: "React Native", valuenow: 15},
        ],
        seventhColumn: [
            { text: "Jira", valuenow: 60},
            { text: "Wink", valuenow: 70},
            { text: "Linux", valuenow: 40},
            { text: "Windows", valuenow: 70},
        ],
        eighthColumn: [
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



    
    document.getElementById('testeId').appendChild(
        progressColumn(args.thirdColumn, "bg-primary", 0)
    );

    document.getElementById('testeId').appendChild(
        progressColumn(args.fourthColumn, "bg-success", args.thirdColumn.length)
    );




    document.getElementById('frontId').appendChild(
        progressColumn(args.fifthColumn, "bg-primary", 0)
    );

    document.getElementById('frontId').appendChild(
        progressColumn(args.sixthColumn, "bg-success", args.fifthColumn.length)
    );



    document.getElementById('sistLangId').appendChild(
        progressColumn(args.seventhColumn, "bg-primary", 0)
    );

    document.getElementById('sistLangId').appendChild(
        progressColumn(args.eighthColumn    , "bg-success", args.seventhColumn.length)
    );


}

function progressColumn(values, color, offset) {
    const div = document.createElement('div');

    div.className = 'col-md-5';

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
