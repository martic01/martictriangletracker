function inputSideA() {
    return document.getElementById("inputi").value;

}
function inputSideB() {
    return document.getElementById("inputii").value;

}
function inputSideC() {
    return document.getElementById("inputiii").value;

}
function limitNumA() {
    let inputLength = 4
    let length1 = $("#inputi").val()
    return length1.length > inputLength
}
function textLength() {
    let long = $("#inputi").val()
    let realLength = long.length
    return $(".uslength").html(realLength)
}
function textLength2() {
    let long = $("#inputii").val()
    let realLength = long.length
    return $(".uslength").html(realLength)
}
function textLength3() {
    let long = $("#inputiii").val()
    let realLength = long.length
    return $(".uslength").html(realLength)
}

function PromtTimer() {
    let alert = document.getElementById("alert");
    alert.style.display = "block"
    setTimeout(function () {
        alert.style.display = "none";
    }, 2000);
}

function limitNumB() {
    let inputLength = 4
    let length1 = $("#inputii").val()
    return length1.length > inputLength
}
function limitNumC() {
    let inputLength = 4
    let length1 = $("#inputiii").val()
    return length1.length > inputLength
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

    // let inputLength = 4
    // let length1 = $(".limit").val()

    if (limitNumA()) {
        $("#inputi").val(inputSideA())
        $(".sdA").html("0");
        $(".numa").html("0");
        PromtTimer()
        textLength()
    }
    else if (inputA !== "") {
        $(".sdA").html(inputSideA());
        $(".side1").hide();
        $(".side2").show();
        $(".edit1").show();
    }
    if (limitNumB()) {
        $("#inputii").val(inputSideB())
        $(".sdB").html("0");
        $(".numb").html("0");
        PromtTimer()
        textLength2()
    }
    else if (inputB !== "") {
        $(".sdB").html(inputSideB());
        $(".side2").hide();
        $(".side3").show();
        $(".edit2").show();

    }
    if (limitNumC()) {
        $("#inputiii").val(inputSideC())
        $(".sdC").html("0");
        $(".numc").html("0");
        PromtTimer()
        textLength3()
    }
    else if (inputC !== "") {
        $(".sdC").html(inputSideC());
        $(".side3").hide();
        $("#enter").hide();
        $(".edit3").show();
        $("#result").show();

    }
}
function requirement() {
    let sda = parseInt($(".sdA").text());
    let sdb = parseInt($(".sdB").text());
    let sdc = parseInt($(".sdC").text());
    $(".numa").html(inputSideA());
    $(".numb").html(inputSideB());
    $(".numc").html(inputSideC());

    if (addSideAB() <= sda || addSideAC() <= sdb || addSideBC() <= sdc) {
        $(".keep1").hide();
        $(".keep2").hide();
        $(".keep3").hide();
        $(".keep4").show();
    } else if (sda === 0 || sdb === 0 || sdc === 0) {
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
    $(".limit").click(function () {
        $("#enter").show();

    });

}