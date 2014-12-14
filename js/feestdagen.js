//Bron: 'timeleft.js' voorbeeld uit les Hay Kranen

//Note: aanpassingen: drie aparte 'deadlines', één per feestdag. 'dagen' toevoegen aan string en plaatsen in tabel. 'Kies een feestdag' toevoegen.

function timeleft() {
    var kerst = new Date(2014, 11, 25, 0, 0);
    var oudnieuw = new Date(2014, 11, 31, 0, 0);
    var pasen = new Date(2015, 3, 5, 0, 0);
    var type = 'onload';

    function updateTime() {
        var now = new Date();
        var leftKerst = (kerst - now) / 1000;
        var leftOudNieuw = (oudnieuw - now) / 1000;
        var leftPasen = (pasen - now) / 1000;
        var str;

			if (type === 'onload') {
                str = 'Kies een feestdag...';
            }

            if (type === 'kerst') {
                str = Math.floor(leftKerst / (3600 * 24)) + ' dagen tot kerst';
            }

            if (type === 'oudnieuw') {
                str = Math.floor(leftOudNieuw / (3600 * 24)) + ' dagen tot oud & nieuw';
            }

            if (type === 'pasen') {
                str = Math.floor(leftPasen / (3600 * 24)) + ' dagen tot pasen';
            }


        d3.select("#timeleft").text(str);
        setTimeout(updateTime, 1000);
    }

    d3.select('#kerst').on('click', function() {
        type = 'kerst';
    });

    d3.select('#oudnieuw').on('click', function() {
        type = 'oudnieuw';
    });

    d3.select('#pasen').on('click', function( ){
        type = 'pasen';
    });


    updateTime();
}
