class Train{
    constructor(trainId, dispatch, destination, capacity){
        this.trainId = trainId;
        this.dispatch = dispatch;
        this.destination = destination;
        this.capacity = capacity;
    }
}
class Passanger{
    constructor(passangerId, name, phoneNumber, ticketId){
        this.passangerId = passangerId;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.ticketId = ticketId;
    }
}
class Ticket{
    constructor(ticketId, place, trainId ){
        this.ticketId = ticketId;
        this.place = place;
        this.trainId = trainId;
    }
}
class SoldTicket{
    constructor(passangerId, ticketId){
        this.passangerId = passangerId;
        this.ticketId = ticketId;
    }
}


var Trains = new Array(0);
var Passangers = new Array(0);
var Tickets = new Array(0);
var SoldTickets = new Array(0);

function addTicket(ticketId, place, trainId) {
  if (findTicket(ticketId) == undefined) {
    Tickets.push(new Ticket(ticketId, place, trainId));
    return;
  }
  console.log(
    "Error. Ticket " + ticketId + " has already been created. It must be unique!"
  );
}
function addPassanger(passangerId, name, phoneNumber, ticketId) {
  if (findPassanger(passangerId) == undefined) {
    Passangers.push(new Passanger(passangerId, name, phoneNumber, ticketId));
    return;
  }
  console.log(
    "Error. Passanger " + passangerId + " has already been created. It must be unique!"
  );
}
function addTrain(trainId, dispatch, destination, capacity) {
  if (findTrain(trainId) == undefined) {
    Trains.push(new Train(trainId, dispatch, destination, capacity));
    return;
  }
  console.log(
    "Error.  " + trainId + " has already been created. It must be unique!"
  );
}
function addSoldTicket(passangerId, ticketId) {
  if (findTicket(ticketId) == undefined) {
    console.log("Error. Ticket " + ticketId + " not found!");
    return;
  }
  if (findPassanger(passangerId) == undefined) {
    console.log("Error. Passanger " + passangerId + " not found!");
    return;
  }
  SoldTickets.push(new SoldTicket(passangerId, ticketId));
  var temp = (findTicket(ticketId)).trainId;
  var capac = (findTrain(temp)).capacity +1;
  //editTrain('capacity', temp, capac);
}

//Видалення
function deleteTicket(ticketId) {
  Tickets = Tickets.filter((p) => p.ticketId != ticketId);
}
function deletePassanger(passangerId) {
  Passangers = Passangers.filter((s) => s.passangerId != passangerId);
}
function deleteTrain(trainId) {
  Trains = Trains.filter((s) => s.trainId != trainId);
}
function deleteSoldTicket(passangerId, ticketId) {
  SoldTickets = SoldTickets.filter(
    (s) => s.passangerId != passangerId && s.ticketId != ticketId);
}

//Пошук
function findTicket(criteria) {
  return Tickets.find(
    (p) =>p.ticketId === criteria);
}
function findPassanger(criteria) {
  return Passangers.find((s) => s.passangerId === criteria);
}
function findTrain(criteria) {
  return Trains.find((m) => m.trainId === criteria);
}
function findMaxCapacityOfTrains(Trains) {
    return Math.max.apply(Math, Trains.map(function(o) { return o.capacity; }))
}
function findMinCapacityOfTrains(Trains) {
    return Math.min.apply(Math, Trains.map(function(o) { return o.capacity; }))
}
function cancelTicketPurchase(ticketId) {
    if(findTicket(ticketId) == undefined){
        console.log("Error. Ticket " + ticketId + " not found!");
        return;
    }
    var pasId = findTicket(ticketId).passangerId;
    deleteSoldTicket(pasId, ticketId);
  return ActiveProjects.filter((s) => s.performerId == performer.number);
}

//Редагування
function editTicket(criteria, idToChange, value) {
  let t = Tickets.find((p) => p.place === criteria || p.ticketId === criteria);
  switch (idToChange) {
    case 0:
      t.place = value;
      break;
    case 1:
      t.ticketId = value;
      break;
    case 2:
      t.trainId = value;
      break;
    default:
  }
}
function editPassanger(criteria, idToChange, value) {
  let t = Passangers.find((s) => s.name === criteria || s.passangerId === criteria);
  switch (idToChange) {
    case 0:
      t.name = value;
      break;
    case 1:
      t.phoneNumber = value;
      break;
    case 2:
      t.ticketId = value;
      break;
    default:
  }
}

function editTrain(criteria, idToChange, value) {
  let t = Trains.find(
    (s) =>
      s.dispatch === criteria || s.destination === criteria || s.capacity === criteria || s.trainId === criteria 
  );
  switch (idToChange) {
    case 0:
        t.trainId = value;
      break;
    case 1:
        t.dispatch = value;
      break;
    case 2:
      t.destination = value;
      break;
    case 3:
      t.criteria = value;
      break;
    default:
  }
}

addTicket(1,'Lviv',1);
addTicket(2,'Odesa',2);
addTicket(3, 'Dnipro',3);
addTicket(4, 'Dnipro',3);

addPassanger(1, 'Mykyta','0931111111',1);
addPassanger(2,'Anton','0932222222',2);
addPassanger(3,'Andrij','0933333333',3);
addPassanger(4, 'Marta','0934444444',4);

addTrain(1,"Kyiv","Lviv",1);
addTrain(2,"Kyiv","Odesa",1);
addTrain(3,"Kyiv","Dnipro",2);

addSoldTicket(1,1);
addSoldTicket(2,2);
addSoldTicket(3,3);
addSoldTicket(4,4);


//Вивід
console.log(Tickets);
console.log('\n');
console.log(SoldTickets);
console.log('\n');
console.log(Trains);
console.log('\n');
console.log(Passangers);
console.log('\n');
console.log(findMaxCapacityOfTrains(Trains));