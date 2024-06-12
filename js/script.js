function inputSideA() {
    return document.getElementById("inputi").value;

}
function inputSideB() {
    return document.getElementById("inputii").value;

}
function inputSideC() {
    return document.getElementById("inputiii").value;

}
function addSideAB() {
    let fristsd = parseInt($(".sdA").text());
    let secondsd = parseInt($(".sdB").text());
    return fristsd + secondsd
}
function addSideAC() {
    let fristsd = parseInt($(".sdA").text());
    let secondsd = parseInt($(".sdC").text());
    return fristsd + secondsd
}
function addSideBC() {
    let fristsd = parseInt($(".sdB").text());
    let secondsd = parseInt($(".sdC").text());
    return fristsd + secondsd
}



function enter() {
    let inputA = inputSideA();
    let inputB = inputSideB();
    let inputC = inputSideC();

    if (inputA !== "") {
        $(".sdA").html(inputSideA());
        $(".numa").html(inputSideA());
        $(".side1").hide();
        $(".side2").show();
        $(".edit1").show();
    }
    if (inputB !== "") {
        $(".sdB").html(inputSideB());
        $(".numb").html(inputSideB());
        $(".side2").hide();
        $(".side3").show();
        $(".edit2").show();

    }
    if (inputC !== "") {
        $(".sdC").html(inputSideC());
        $(".numc").html(inputSideC());
        $(".side3").hide();
        $("#enter").hide();
        $(".edit3").show();
    }


}

function requirement() {
    let sda = parseInt($(".sdA").text());
    let sdb = parseInt($(".sdB").text());
    let sdc = parseInt($(".sdC").text());

    if (addSideAB() <= sda || addSideAC() <= sdb || addSideBC() <= sdc) {
        $(".keep1").hide();
        $(".keep2").hide();
        $(".keep3").hide();
        $(".keep4").show();
    } else if (sda === sdb && sdb === sdc) {
        $(".keep1").show();
        $(".keep2").hide();
        $(".keep3").hide();
        $(".keep4").hide();
    } else if (sda === sdb || sdb === sdc || sda === sdc) {
        $(".keep1").hide();
        $(".keep2").show();
        $(".keep3").hide();
        $(".keep4").hide();
    } else {
        $(".keep1").hide();
        $(".keep2").hide();
        $(".keep3").show();
        $(".keep4").hide();
    }
}


window.onload = function () {
    $("#enter").click(function () {
        enter();
    });

    $("#result").click(function () {
        requirement();

    });

    $(".edit1").click(function () {
        $(".side1").show();
        $(".side2").hide();
        $(".side3").hide();
        $("#enter").show();
    });
    $(".edit2").click(function () {
        $(".side2").show();
        $(".side1").hide();
        $(".side3").hide();
        $("#enter").show();
    });
    $(".edit3").click(function () {
        $(".side3").show();
        $(".side1").hide();
        $(".side2").hide();
        $("#enter").show();
    });


}