$(function() {
    var checkInput = (e) => {
        const content = $("#rut").val().trim();
        $('#continuar').prop('disabled', content === '');
    };
    $(document).on('keyup', '#rut', checkInput);


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
    $(document).on('mouseover', '#test', checkBtn);



    $("a.bx-servicio > p").css("display", "none");
    $("a.bx-servicio > img").css("display", "none");
    $("a.bx-servicio").append("<img class='loadi' src='/pic.svg'>");


    /* animacion carga paso 2 */
    setTimeout(function() {
        $(".loadi").remove()
        $("a.bx-servicio > p").css("display", "");
        $("a.bx-servicio > img").css("display", "");
        $("*").removeClass("load");
    }, 3300);


    var url = window.location.pathname;

    // Comportamientos pasos
    switch (url) {
        case 'index.html':
        case 'index.html#':
            $("#progreso").addClass("progreso");
            $("#p2").addClass("paso-off");
            $("#p3").addClass("paso-off");
            $("#p4").addClass("paso-off");
            $("#p5").addClass("paso-off");
            $("#p1").html("1");
            break
        case 'paso2.html?select=cdi':
        case 'paso2.html?select=pspt':
        case 'paso2.html':
            $("#progreso").addClass("progreso-2");
            $("#p1").html("✓");
            $("#p1").addClass("paso-ok");
            $("#p3").addClass("paso-off");
            $("#p4").addClass("paso-off");
            $("#p5").addClass("paso-off");
            $("#p2").html("2");
            break
        case 'paso3.html':
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



    /* Esto cambia el label del Paso 1 en función del radio button escogido */
    $("input[id='PASAPORTE']").click(function() {
        var psptchecked = $("input[id='PASAPORTE']:checked").val();
        if (psptchecked == "pspt") {
            $('#tipoId').html('Número de Pasaporte');
            $('#hlp-input').html('Solo para <strong>extranjeros <u>sin</u> Cédula</strong>.');
        } else {
            $('#tipoId').html('Rut del Paciente');
        }
    });


    $("input[id='CDI']").click(function() {
        var cdichecked = $("input[id='CDI']:checked").val();
        if (cdichecked == "cdi") {
            $('#tipoId').html('RUT del Paciente');
            $('#hlp-input').html('Ingrese RUT del paciente.');
        } else {
            $('#tipoId').html('Indique número de pasaporte del paciente. Solo para <strong>extranjeros <u>sin</u> Cédula</strong>.');
        }
    });


    switch (url) {
        case 'index.html':
        case 'index.html#':
        case '/paso2.html?select=cdi':
        case '/paso2.html?select=pspt':
        case '/paso2.html':
        case '/paso3.html':
            $('#reservar-nav > a').css("color", "#028080");
            $('#reservar-nav > a').css("font-weight", "600");
            $('#reservar-nav > a').css("font-size", "1.2rem");
            $('#reservar-nav > a > svg > path').css("fill", "#028080");
            $('#reservar-nav > a > svg > path').css('fill-opacity', '1');
            $("#reservar-nav").css("border-top", "#028080 solid 0.2rem");
            $("#reservar-nav-top").css("font-weight", 700);
            $("#reservar-nav-top").css("border-bottom", "#009999 solid 0.3rem");
            $("#reservar-nav-top").css("color", "#009999");
            break;
    };


    Inputmask.extendAliases({
        rut: {
            mask: '(9(.999){2}-K)|(99(.999){2}-K)',
            autoUnmask: false, //para que .val() devuelva sin mascara (sin puntos ni guion)
            keepStatic: true, //para que el formato de mascara mas corta se mantenga hasta que sea necesario el mas largo
            showMaskOnFocus: false, //oculta la mascara en focus
            showMaskOnHover: false, //oculta la mascara en hover
            definitions: {
                'K': {
                    validator: '[0-9|kK]',
                    casing: 'upper',
                }
            }
        }
    });

    $('#rut').inputmask();








});