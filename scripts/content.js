function load() {
    professional()
    console.log("finished")
}

function professional() {

    const args = { 
        firstColumn: [
            { text: "GIT", valuenow: 40},
            { text: "Algorithm", valuenow: 35},
            { text: "Object Orientation", valuenow: 35},
        ],
        secondColumn: [
            { text: "Logic programming", valuenow: 45},
            { text: "Word", valuenow: 45},
            { text: "Excell", valuenow: 40},
        ],
        thirdColumn: [
            { text: "Teste de Software", valuenow: 35},
            { text: "Automação Cypress", valuenow: 35},
            { text: "Consumo de API`s", valuenow: 25},
        ],
        fourthColumn: [
            { text: "Jmeter", valuenow: 35},
            { text: "Cypress", valuenow: 20},
            { text: "Postman", valuenow: 35},
        ],
        fifthColumn: [
            { text: "Swift", valuenow: 35},
            { text: "CSS", valuenow: 35},
        ],
        sixthColumn: [
            { text: "JavaScript", valuenow: 35},
            { text: "HTML", valuenow: 35},
        ],
        seventhColumn: [
            { text: "Jira", valuenow: 40},
            { text: "Wink", valuenow: 50},
        ],
        eighthColumn: [    
            { text: "Linux", valuenow: 35},
            { text: "Windows", valuenow: 40},
        ],
        ninthColumn: [
            { text: "English", valuenow: 20},
            { text: "Español", valuenow: 35},
        ],
        tenthColumn: [
            { text: "日本語", valuenow: 10},
            { text: "Italiano", valuenow: 35},
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

    document.getElementById('operationId').appendChild(
        progressColumn(args.seventhColumn, "bg-primary", 0)
    );

    document.getElementById('operationId').appendChild(
        progressColumn(args.eighthColumn, "bg-success", args.seventhColumn.length)
    );

    document.getElementById('sistLangId').appendChild(
        progressColumn(args.ninthColumn, "bg-primary", 0)
    );

    document.getElementById('sistLangId').appendChild(
        progressColumn(args.tenthColumn, "bg-success", args.ninthColumn.length)
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
