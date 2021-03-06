var mainContent = document.querySelector(".mainContent");
var searchBtn = document.querySelector("button");
var input = document.querySelector("input");
var select = document.querySelector("select");
var divCheckboxes = document.querySelector(".divCheckboxes");

/*****************Function declarations ***************/

// glossary array of objects is imported from glossary.js
var getClassNames = (glossary) => {
    var classNames = [];
    glossary.forEach((item) => {
        var currentItem = parseInt(item.class) < 10 ? `0${item.class}` : item.class;
        if (!classNames.includes(currentItem)) {
            classNames.push(currentItem);
        }
    });
    return classNames;
};

var getTagNames = (glossary) => {
    var tagNames = [];
    glossary.forEach((item) => {
        var tags = item.tags;
        tags.forEach((tag) => {
            if (!tagNames.includes(tag)) {
                tagNames.push(tag);
            }
        });
    });
    return tagNames.sort();
};

var fillSelect = (arrayOptions, selectElement, prefix) => {
    arrayOptions.forEach((item) => {
        var option = document.createElement("option");
        option.value = item;
        option.text = prefix + item;
        selectElement.appendChild(option);
    });
};

var isChecked = (checkboxes) => {
    var checkedArray = checkboxes.filter((checkbox) => checkbox.checked).map((checkbox) => checkbox.value);
    return checkedArray;
};

var addCheckBoxClickEventListener = (checkboxes) => {
    var parentCheckboxes = document.querySelector(".divCheckboxes");
    parentCheckboxes.addEventListener("click", function(event) {
        if (event.target && event.target.nodeName !== "DIV") {
            setSearch();
        }
    });
};

var fillCheckBoxes = (arrayOptions, divElement) => {
    var text = input.value.trim();
    arrayOptions.forEach((item) => {

        var checkbox = document.createElement('input');
        var checkboxID = `cb${item}`;
        checkbox.type = "checkbox";
        checkbox.value = item;
        checkbox.name = item
        checkbox.id = checkboxID;

        var label = document.createElement('label')
        label.htmlFor = checkboxID;
        label.innerText = item;

        divElement.appendChild(checkbox);
        divElement.appendChild(label);

    });
    var checkboxesNodeList = document.querySelectorAll("input[type='checkbox']");
    var checkboxes = Array.from(checkboxesNodeList);
    addCheckBoxClickEventListener(checkboxes);
};

var generateHTML = (glossary) => {
        mainContent.innerHTML = "";

        var allHTML = glossary.reduce((html, item) => {
                    var cardHeader = `${item.term} - Class: ${parseInt(item.class) < 10 ? `0${item.class}` : item.class}`;
                    var tags = item.tags;
                    var tagHTML = tags.reduce((html, tag) => {
                        return html + `<span class="badge badge-warning">${tag}</span>`
                    }, "");
                    return html + `
    <div class="col-lg-12 col-md-12">
        <div class="card">
            <div class="card-header">
                ${cardHeader}
            </div>
            <div class="card-body">                
                <p class="card-text">${item.definition}</p>
            </div>
            <div class="card-footer">
                Tags: ${tagHTML}
            </div>
        </div>
    </div>
    `
    }, "");
    
    var resultHeading = glossary.length > 1 ? `${glossary.length} results found` : `${glossary.length} result found`;

    mainContent.innerHTML = `<h4>${resultHeading}: </h4>` + allHTML;
};

var getSearchResults = (text,className,checkboxes) => {
    //console.log(checkboxes);
    var checkedCheckboxes = isChecked(checkboxes);
    console.log(checkedCheckboxes);
    console.log(className);
    var filteredGlossary = glossary.filter(function(item) {
        var term = item.term.toLowerCase();
        var definition = item.definition.toLowerCase();
        var tags = item.tags;
        var currentClass = parseInt(item.class, 10);
        text = text.toLowerCase();
        
        if(checkedCheckboxes.length>0)
        {
            if(className !== "-1")
            {
                console.log("hey");
                return (term.includes(text) || definition.includes(text)) && (checkedCheckboxes.some((tag)=> tags.includes(tag))) && currentClass === parseInt(className,10);
            }
            else
            {
                return (term.includes(text) || definition.includes(text)) && (checkedCheckboxes.some((tag)=> tags.includes(tag)));
            }
        }
        else
        {
            if(className !== "-1")
            {
                return (term.includes(text) || definition.includes(text)) && currentClass === parseInt(className,10);
            }
            else
            {
                return (term.includes(text) || definition.includes(text));
            }
        }
    });
    generateHTML(filteredGlossary);
    getHighlightSearchResults(text);
};

var setSearch = () => {
    var text = input.value.trim();
    var checkboxesNodeList = document.querySelectorAll("input[type='checkbox']");
    var checkboxes = Array.from(checkboxesNodeList);
    var className = select.value;

    getSearchResults(text,className,checkboxes);
};

var setHighlightSearchResults = (item, text, className) => {   
    var startIndexOfText = item.innerText.toLowerCase().indexOf(text.toLowerCase());
    var endIndexOfText = startIndexOfText+text.length;
    
    if (startIndexOfText !== -1) {
        var originalText = item.innerText.substring(startIndexOfText,endIndexOfText);
        var html = item.innerText.replace(originalText, `<span class="${className}">${originalText}</span>`);
        item.innerHTML = html;
        html = "";        
    } 
};

var getHighlightSearchResults = (text) => {
    var heading = document.querySelectorAll('.card-header');
    var body = document.querySelectorAll('.card-body');

    heading.forEach((item) => {
        setHighlightSearchResults(item, text, "highlightHeading");
    });

    body.forEach((item) => {
        setHighlightSearchResults(item, text, "highlightBody");
    });
};

/***************** Main JS ***************/

var classNames = getClassNames(glossary);

var tagNames = getTagNames(glossary);

fillCheckBoxes(tagNames,divCheckboxes);

fillSelect(classNames, select, "Class ");

searchBtn.addEventListener("click", setSearch);

input.addEventListener("keyup", setSearch);

select.addEventListener("change", setSearch);