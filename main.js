var startYear = 1900;
for (i = new Date().getFullYear(); i > startYear; i--) {
    $('#yearSelect').append($('<option />').val(i).html(i));
}

function findRate(year, currency) {
    for (const key in data) {
        if (data[key].year == year && data[key].currency == currency)
            return data[key].value;
    }
}

$("#currencySelect").on('change', (e) => {
    var currency = $(e.target).val()
    var year = parseInt($("#yearSelect").find(":selected").val());
    var rate = findRate(year, currency);
    console.log(rate);
    if (rate)
        $("#exchangeRate").val(rate);
    else
        $("#exchangeRate").val(`No Record for ${currency} in ${year}`);
});
$("#yearSelect").on('change', (e) => {
    var year = $(e.target).val()
    var currency = $("#currencySelect").find(":selected").val();
    var rate = findRate(year, currency);
    console.log(rate);
    if (rate)
        $("#exchangeRate").val(rate);
    else
        $("#exchangeRate").val(`No Record for ${currency} in ${year}`);
});


$("#currencySelect").change();