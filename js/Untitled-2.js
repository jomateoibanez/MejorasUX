const delay = ms => new Promise(res => setTimeout(res, ms));

let objDocs = []


const obtenerDocs = async() => {
    for (i = 0; i < 36; i++) {
        try {
            await delay(2000);
            let data = angular.element('button.btn.btn-info.pull-right').scope().$parent.data;
            objDocs.push(data);
            await delay(2000);
            angular.element('button.btn.btn-info.pull-right').click();
            await delay(2000);

            if (document.getElementById("loading-wrapper").classList.contains("ng-hide")) {
                console.log(i)
                console.log(objDocs)
            } else {
                await delay(5000);
                if (document.getElementById("loading-wrapper").classList.contains("ng-hide")) {
                    console.log(i)
                    console.log(objDocs)
                    continue
                } else {
                    console.log("ERROR EN INTENTO" + i);
                    console.log(objDocs)
                    continue
                }
            }
        } catch {
            console.log("ERROR EN INTENTO" + i);
            console.log(objDocs)
            continue
        }
    }
    console.log(objDocs)
    return objDocs
}
obtenerDocs()