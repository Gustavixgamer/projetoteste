var NumberBar = document.querySelector(".NumberBar")


function fatorial(n) {
    if (n < 0) return NaN;

    let resultado = 1;

    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }

    return resultado;
}


var b1 = document.getElementById("b1")
b1.onclick = function () {
    NumberBar.textContent += "1";
}

var b2 = document.getElementById("b2")
b2.onclick = function () {
    NumberBar.textContent += "2";
}

var b3 = document.getElementById("b3")
b3.onclick = function () {
    NumberBar.textContent += "3"; }

var b4 = document.getElementById("b4")
b4.onclick = function () {
    NumberBar.textContent += "4";
}

var b5 = document.getElementById("b5")
b5.onclick = function () {
    NumberBar.textContent += "5";
}

var b6 = document.getElementById("b6")
b6.onclick = function () {
    NumberBar.textContent += "6";
}

var b7 = document.getElementById("b7")
b7.onclick = function () {
    NumberBar.textContent += "7";
}

var b8 = document.getElementById("b8")
b8.onclick = function () {
    NumberBar.textContent += "8"; }

var b9 = document.getElementById("b9")
b9.onclick = function () {
    NumberBar.textContent += "9";
}

var b0 = document.getElementById("b0")
b0.onclick = function () {
    NumberBar.textContent += "0";
}

var bEqual = document.getElementById("bEqual")
bEqual.onclick = function () {
    try {
         let expressao = NumberBar.textContent;

        expressao = expressao.replace(/\^/g, "**");
        expressao = expressao.replace(/π/g, "Math.PI");
        expressao = expressao.replace(/e/g, "Math.E");
        
    
        
        expressao = expressao.replace(/(\d+)!/g, function(_, numero) {
            return fatorial(Number(numero));
        });
    
        expressao = expressao.replace(/\d*√(\d+)/g, function (_, numero) {
    return Math.sqrt(Number(numero));
});

        expressao = expressao.replace(/\d*Log₂(\d+)/g, function (_, numero) {
    return Math.log2(Number(numero));
});

        
        expressao = expressao.replace(/\d*Log(\d+)/g, function (_, numero) {
    return Math.log2(Number(numero));
});

        expressao = expressao.replace(/\d*Log\(([\d.]+),([\d.]+)\)/g,
function (_, base, numero) {
    return Math.log(Number(numero)) / Math.log(Number(base));
});

        NumberBar.textContent = eval(expressao);
    } 
    
    catch {
        NumberBar.innerHTML = "Erro";
    }
};

var bPoint = document.getElementById("bPoint")
bPoint.onclick = function () {
    NumberBar.textContent += ".";
}

var bComma = document.getElementById("bComma")
bComma.onclick = function () {
    NumberBar.textContent += ",";
}

var bSum = document.getElementById("bSum")
bSum.onclick = function () {
    NumberBar.textContent += "+";
}

var bSubtraction = document.getElementById("bSubtraction")
bSubtraction.onclick = function () {
    NumberBar.textContent += "-";
}

var bDel = document.getElementById("bDel")
bDel.onclick = function () {
    NumberBar.textContent = NumberBar.textContent.slice(0, -1);
}

var bC = document.getElementById("bC")
bC.onclick = function () {
 NumberBar.textContent = "";
}

var bDiv = document.getElementById("bDiv")
bDiv.onclick = function () {
 NumberBar.textContent += "/";
}

var bMultiply = document.getElementById("bMultiply")
bMultiply.onclick = function () {
 NumberBar.textContent += "*";
}

var bHigh = document.getElementById("bHigh")
bHigh.onclick = function () {
 
    "^" === "**"
    NumberBar.textContent += "^";

}

var bPi = document.getElementById("bPi")
bPi.onclick = function () {
 
    NumberBar.textContent += "\u03C0";

}

var bParenthesisOpen = document.getElementById("bParenthesisOpen")
bParenthesisOpen.onclick = function () {
 
    NumberBar.textContent += "(";

}

var bParenthesisClose = document.getElementById("bParenthesisClose")
bParenthesisClose.onclick = function () {
 
    NumberBar.textContent += ")";

}

var bFactorial = document.getElementById("bFactorial")
bFactorial.onclick = function () {
 
    NumberBar.textContent += "!";

}

var bE = document.getElementById("bE")
bE.onclick = function () {
 
    NumberBar.textContent += "e";

}

var bSqrt = document.getElementById("bSqrt")
bSqrt.onclick = function () {
 
    NumberBar.textContent += "√";

}

var bLog2 = document.getElementById("bLog2")
bLog2.onclick = function () {
 
    NumberBar.textContent += "Log₂";

}

var bLog10 = document.getElementById("bLog10")
bLog10.onclick = function () {
 
    NumberBar.textContent += "Log";

}

var bLogₐX = document.getElementById("bLogₐX")
bLogₐX.onclick = function () {
 
    NumberBar.textContent += "Log("

}
