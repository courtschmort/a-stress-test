function add(number1, number2) {
  return number1 + number2;
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var totalStress = 0

    $("input:checkbox[name=warning-signs]:checked").each(function() {
      var warningSigns = parseInt($(this).val());
      totalStress += warningSigns;
    });
    $("input:checkbox[name=health-symptoms]:checked").each(function() {
      var healthSymptoms = parseInt($(this).val());
      totalStress += healthSymptoms;
    });
    $("input:checkbox[name=coping-methods]:checked").each(function() {
      var copingMethods = parseInt($(this).val());
      totalStress += copingMethods;
    });

    // if (totalStress > 0) This is where we left off.

    console.log(totalStress)
  });
});
