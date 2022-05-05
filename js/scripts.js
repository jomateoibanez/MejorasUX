var cont = document.getElementById("asd");

if (sessionStorage.font !== null) {
    if (typeof a === 'undefined') {
        b = 62.5 + '%';
        cont.style.fontSize = b;
    } else {
        sessionStorage.name = a;
        cont.style.fontSize = a;
    }
};

function changeSizeByBtn(size) {
    // Set value of the parameter as fontSize
    act = parseFloat(window.getComputedStyle(cont, null).getPropertyValue('font-size'));
    if (act < 13 && act > 9) {
        a = size * act + "px";
        cont.style.fontSize = a;
        sessionStorage.font = a;
    }; //
};


$(function() {

    window.onload = function() {
        $("input[id='CDI']").click();
    };

    $("input[id='CDI']").click(function() {
        var cdichecked = $("input[id='CDI']:checked").val();
        if (cdichecked == "NationalId") {
            $('#tipoId').html('RUT del Paciente');
            $('#hlp-input').html('Ingrese RUT del paciente.');
            $('#rut').prop("placeholder", "Ej: 8.765.432-1");
            $('#rut').prop("value", "");
            $("input#rut").rut({
                formatOn: 'keyup change',
                minimumLength: 7, // validar largo mínimo; default: 2
                validateOn: 'keyup' // si no se quiere validar, pasar null
            });

            // muestra un mensaje de error cuando el rut es inválido
            $("input#rut").rut().on('rutInvalido', function(e) {
                $('#hlp-input').html("El rut " + $(this).val() + " es inválido");
                $('#rut').css("border-color", "#b92E25");
                $('#hlp-input').css("color", "#b92E25");
                document.getElementById("continuar").disabled = true;
            });
            // muestra un mensaje de error cuando el rut es valido
            $("#rut").rut().on('rutValido', function(e, rut, dv) {
                $('#hlp-input').html("Rut valido");
                document.getElementById("continuar").disabled = false;
                $('#hlp-input').css("color", "#028080");
                $('#rut').css("border-color", "#009999");
            });

        } else {
            $('#tipoId').html('Indique número de pasaporte del paciente. (Solo para <strong>extranjeros <u>sin</u> Cédula</strong>.)');
        };
    });

    /* Esto cambia el label del Paso 1 en función del radio button escogido */
    $("input[id='PASAPORTE']").click(function() {
        var psptchecked = $("input[id='PASAPORTE']:checked").val();
        if (psptchecked == "Passport") {
            $('#tipoId').html('Número de Pasaporte');
            $('#rut').css("border-color", "#dfdfdf");
            $('#rut').prop("value", "");
            $('#rut').prop("placeholder", "Ej: 1234567890");
            $('#hlp-input').html('Indique número de pasaporte del paciente.<br>(Solo para <strong>extranjeros <u>sin</u> Cédula de Identidad</strong>.)');
            $('#hlp-input').css("color", "#747473");
        } else {
            $('#tipoId').html('Rut del Paciente');
        }

    });








    /* Esto agrega un tooltip al hacer over en continuar sin llenar datos */
    var checkBtn = (e) => {
        const btn = document.getElementById("continuar");
        if (btn.disabled) {
            $('#test').prop('class', 'd-inline-block');
            $('#test').prop('data-bs-position', 'left');
            $('#test').prop('data-bs-toggle', 'tooltip');
            $('#test').prop('title', 'Ingrese N° de documento');
        } else {
            $('#test').prop('title', '');
        }
    };




    $("a.bx-servicio > p").css("display", "none");
    $("a.bx-servicio > img").css("display", "none");
    $("a.bx-servicio").append("<img class='loadi' src='SVG/pic.svg'>");


    /* animacion carga paso 2 */
    setTimeout(function() {
        $(".loadi").remove()
        $("a.bx-servicio > p").css("display", "");
        $("a.bx-servicio > img").css("display", "");
        $("*").removeClass("load");
    }, 3300);


    var url = window.location.pathname;

    switch (url) {
        case '/MejorasUX/':
        case '/MejorasUX/registro.html':
        case '/MejorasUX/#':
        case '/MejorasUX/paso2.html?select=cdi':
        case '/MejorasUX/paso2.html?select=pspt':
        case '/MejorasUX/paso2.html':
        case '/MejorasUX/paso3.html':
        case '/index.html':
        case '/registro.html':
        case '/MejorasUX/registro.html':
        case '/index.html#':
        case '/paso2.html?select=cdi':
        case '/paso2.html?select=pspt':
        case '/paso2.html':
        case '/paso3.html':
            $('#reservar-nav > a').css("color", "#028080");
            $('#reservar-nav > a').css("font-weight", "600");
            $('#reservar-nav > a').css("font-size", "1.2rem");
            $('#reservar-nav > a > svg > path').css("fill", "#028080");
            $('#reservar-nav > a > svg > path').css("fill-opacity", "1");
            $("#reservar-nav").css("border-top", "#028080 solid 0.2rem");
            $("#reservar-nav-top").css("font-weight", 700);
            $("#reservar-nav-top").css("border-bottom", "#009999 solid 3px");
            $("#reservar-nav-top").css("border-radius", "5px");
            $("#reservar-nav-top").css("color", "#009999");
            break;
    };

    // Comportamientos pasos
    switch (url) {
        case '/MejorasUX/':
        case '/MejorasUX/#': //Github
        case '/index.html':
        case '/index.html#':
        case '/registro.html':
        case '/MejorasUX/registro.html':
            $("#progreso").addClass("progreso");
            $("#p2").addClass("paso-off");
            $("#p3").addClass("paso-off");
            $("#p4").addClass("paso-off");
            $("#p5").addClass("paso-off");
            $("#p1").html("1");
            break
        case '/MejorasUX/paso2.html?select=cdi':
        case '/MejorasUX/paso2.html?select=pspt':
        case '/MejorasUX/paso2.html':
        case '/paso2.html?select=cdi':
        case '/paso2.html?select=pspt':
        case '/paso2.html':
            $("#progreso").addClass("progreso-2");
            $("#p1").html("✓");
            $("#p1").addClass("paso-ok");
            $("#p3").addClass("paso-off");
            $("#p4").addClass("paso-off");
            $("#p5").addClass("paso-off");
            $("#p2").html("2");
            break
        case '/paso3.html':
        case '/MejorasUX/paso3.html':
            $("#progreso").addClass("progreso-3");
            $("#p1").html("✓");
            $("#p1").addClass("paso-ok");
            $("#p2").html("✓");
            $("#p2").addClass("paso-ok");
            $("#p3").html("3");
            $("#p4").addClass("paso-off");
            $("#p5").addClass("paso-off");
            break
    };

});


async function validar() {
    if (document.getElementById("continuar").disabled) {} else {
        const DocumentValue = document.getElementById("rut").value.replace(/[\.-]/g, "");
        DocumentType = document.querySelector('input[name="select"]:checked').value;
        body = '{"DocumentValue": "' + DocumentValue + '","DocumentType" :"' + DocumentType + '","DocumentCountry": "CL"}';
        const response = await fetch("https://proxy.megasalud.cl/AWAPatients/Patients/VerifyPatient", {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: body
        });

        console.log("hola 1");

        return response.json().then(data => {
            patientid = data.PatientId;
            console.log(data);
            if (patientid == null) {
                window.open("registro.html", "_self");
            } else if (patientid == undefined) {
                console.log("Intente nuevamente");
            } else if (patientid !== null && patientid !== undefined) {
                window.open("paso2.html", "_self");
            };
        });
    }
};