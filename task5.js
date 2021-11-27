 function getDays(month,year) {
    return new Date(year, month, 0).getDate();
 };

 console.log(getDays(7,2012));
