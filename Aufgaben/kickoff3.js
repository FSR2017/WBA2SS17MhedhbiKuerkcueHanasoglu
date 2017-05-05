function rotateColor() {
  var rotation = colorRotator++;
  if(colorRotator >= colors.length) {
    colorRotator = 0;
  }
  return colors[rotation];

}
fs.readFile(__dirname + "/staedte.json", function(err, data) {
  var cities = JSON.parse(data).cities;

  cities.forEach(function(city) {
    for (var attribute in city) {
      if (city.hasOwnProperty(attribute)) {
        console.log(chalk[rotateColor()](attribute + ': '+ city[attribute]));
      }
    }
    console.log('-------------------------------');
  });
  cities.sort(function (a, b) {
    return a.population - b.population;
  });
  fs.writeFile(__dirname + '/stadte_sortiert.json', JSON.strinify(cities), function(err, data){
    if(err) {
      console.log(chalk.green('-> Datei erfolgreich gespeichert!'));
    }
  });
});
