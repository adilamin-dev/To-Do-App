var myInput = document.getElementById("task-input");
var taskBtn = document.getElementById("task-btn");
var container1 = document.querySelector(".status-box-1");
var container2 = document.querySelector(".status-box-2");
var container3 = document.querySelector(".status-box-3");

// var taskCheckBox = document.querySelector(".task-box").querySelector("input");
// var taskCheckBox = document.querySelector("input").closest("task-box");


var creatTask = function(event){
    event.preventDefault();
    if(myInput.value != ""){
        //Task element
        var nTaskElement = document.createElement("div");
        nTaskElement.className = "task-box";
        nTaskElement.setAttribute("id", "task");
        container1.appendChild(nTaskElement);

        // input (Checkbox) element
        var nTaskCheckbox = document.createElement("input");
        nTaskCheckbox.setAttribute("type", "checkbox");
        nTaskElement.appendChild(nTaskCheckbox);

        // Text (p) element
        var nTaskP = document.createElement("p");
        nTaskElement.appendChild(nTaskP);
        nTaskP.innerHTML = myInput.value;
        myInput.value = null;

        //Delet btn element
        var nTaskD = document.createElement("div");
        nTaskD.className = "d-btn-wraper";
        nTaskElement.appendChild(nTaskD);
        var nTaskDBtn = document.createElement("button");
        nTaskD.appendChild(nTaskDBtn);
        var nTaskDBtnX = document.createElement("p");
        nTaskDBtn.appendChild(nTaskDBtnX);
        nTaskDBtnX.innerHTML = "x";



        nTaskCheckbox.addEventListener("change", (e) => {
            if(e.target.checked){
                container2.appendChild(nTaskElement);
                e.target.checked = false;
                nTaskCheckbox.addEventListener("change", (x) => {
                    if(x.target.checked == false){
                        container3.appendChild(nTaskElement);
                        
                    };
                });
                
            };
        });

        nTaskDBtn.addEventListener("click", () => {
            nTaskElement.remove();
        });

    };

} ;


taskBtn.addEventListener("click", creatTask);


