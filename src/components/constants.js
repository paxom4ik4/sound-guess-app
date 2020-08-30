const imgageSrc = "./constants/images/";
const audioSrc = "./constants/sounds/";

const Nature = [
  {
    name: "Hail",
    ruName: "Град",
    imgSrc: `${imgageSrc}nature/hail.jpg`,
    audSrc: `${audioSrc}nature/hail.mp3`,
    desc: "Frozen particles from water, usually fall out in autumn",
    id: 0,
  },
  {
    name: "Rain",
    ruName: "Дождь",
    imgSrc: `${imgageSrc}nature/rain.jpg`,
    audSrc: `${audioSrc}nature/rain.mp3`,
    desc:
      "rain is the most common type of rainfall. not typical for dry climates",
    id: 1,
  },
  {
    name: "Snow",
    ruName: "Снег",
    imgSrc: `${imgageSrc}nature/snow.jpg`,
    audSrc: `${audioSrc}nature/snow.mp3`,
    desc: "You can sculpt different figures from the snow, if it is wet enough",
    id: 2,
  },
  {
    name: "Thunder",
    ruName: "Гром",
    imgSrc: `${imgageSrc}nature/thunder.jpg`,
    audSrc: `${audioSrc}nature/thunder.mp3`,
    desc:
      "Lightning is an electrical spark discharge in the atmosphere that occurs during a thunderstorm, manifested by a bright flash of light and an accompanying thunder.",
    id: 3,
  },
  {
    name: "Wind",
    ruName: "Ветер",
    imgSrc: `${imgageSrc}nature/wind.jpg`,
    audSrc: `${audioSrc}nature/wind.mp3`,
    desc: "Wind is a stream of air that moves near the earth's surface.",
    id: 4,
  },
];

const PublicTransport = [
  {
    name: "Bus",
    ruName: "Автобус",
    imgSrc: `${imgageSrc}public-transport/bus.jpg`,
    audSrc: `${audioSrc}public-transport/bus.mp3`,
    desc: "Bus is one of the types of public transport",
    id: 0,
  },
  {
    name: "Electric Train",
    ruName: "Электричка",
    imgSrc: `${imgageSrc}public-transport/electric-train.jpg`,
    audSrc: `${audioSrc}public-transport/electric-train.mp3`,
    desc:
      "Electric Train is one of the types of transport. You can go wherever you want between cities",
    id: 1,
  },
  {
    name: "Metro",
    ruName: "Метро",
    imgSrc: `${imgageSrc}public-transport/metro.jpg`,
    audSrc: `${audioSrc}public-transport/metro.mp3`,
    desc:
      "Metro is one of the most popular type of public transport. It is the best way to get from one point of city straight to another",
    id: 2,
  },
  {
    name: "Tram",
    ruName: "Трамвай",
    imgSrc: `${imgageSrc}public-transport/tram.jpg`,
    audSrc: `${audioSrc}public-transport/tram.mp3`,
    desc:
      "Tram is not very popular type transport, but rides is very atmospheric, especially in late evening",
    id: 3,
  },
  {
    name: "Trolley Bus",
    ruName: "Троллейбус",
    imgSrc: `${imgageSrc}public-transport/trolley-bus.jpg`,
    audSrc: `${audioSrc}public-transport/trolley-bus.mp3`,
    desc: "Trolley Bus is same as bus, but more eco-friendly",
    id: 4,
  },
];

const Transport = [
  {
    name: "Car",
    ruName: "Автомобиль",
    imgSrc: `${imgageSrc}transport/car.jpg`,
    audSrc: `${audioSrc}transport/car.mp3`,
    desc: "Car is used for driving and getting relax.",
    id: 0,
  },
  {
    name: "Helicopter",
    ruName: "Вертолет",
    imgSrc: `${imgageSrc}transport/helicopter.jpg`,
    audSrc: `${audioSrc}transport/helicopter.mp3`,
    desc:
      "Helicopter is one of the fly types of transport. You can go wherever you want!",
    id: 1,
  },
  {
    name: "Motorcycle",
    ruName: "Мотоцикл",
    imgSrc: `${imgageSrc}transport/motorcycle.jpg`,
    audSrc: `${audioSrc}transport/motorcycle.mp3`,
    desc:
      "Motorcycle is used to get unusual experience! It's amazing to drive.",
    id: 2,
  },
  {
    name: "Plain",
    ruName: "Самолет",
    imgSrc: `${imgageSrc}transport/plain.jpg`,
    audSrc: `${audioSrc}transport/plain.mp3`,
    desc: "Plain is also fly type transport. Its much faster than helicopter",
    id: 3,
  },
  {
    name: "Ship",
    ruName: "Корабль",
    imgSrc: `${imgageSrc}transport/ship.jpg`,
    audSrc: `${audioSrc}transport/ship.mp3`,
    desc:
      "The ship moves on water. You can take a cruise or a trip around the world",
    id: 4,
  },
];

const Animals = [
  {
    name: "Bear",
    ruName: "Медведь",
    imgSrc: `${imgageSrc}animals/bear.jpg`,
    audSrc: `${audioSrc}animals/bear.mp3`,
    desc:
      "The bear lives in the forest. A dangerous predatory beast. Hibernates in winter",
    id: 0,
  },
  {
    name: "Cat",
    ruName: "Кот",
    imgSrc: `${imgageSrc}animals/cat.jpg`,
    audSrc: `${audioSrc}animals/cat.mp3`,
    desc: "Lovely pet. Often plays the role of a hero of a meme (2010)",
    id: 1,
  },
  {
    name: "Dog",
    ruName: "Собака",
    imgSrc: `${imgageSrc}animals/dog.jpg`,
    audSrc: `${audioSrc}animals/dog.mp3`,
    desc: "Dog is a friend of man. Pretty smart animal",
    id: 2,
  },
  {
    name: "Owl",
    ruName: "Сова",
    imgSrc: `${imgageSrc}animals/owl.jpg`,
    audSrc: `${audioSrc}animals/owl.mp3`,
    desc:
      "Owls live in the forest. They have good eyesight and can turn their heads almost 360 degrees.",
    id: 3,
  },
  {
    name: "Tiger",
    ruName: "Тигр",
    imgSrc: `${imgageSrc}animals/tiger.jpg`,
    audSrc: `${audioSrc}animals/tiger.mp3`,
    desc:
      "Tiger is a dangerous predator. Develops high speed and has an interesting color",
    id: 4,
  },
];

const Birds = [
  {
    name: "Crow",
    ruName: "Ворон",
    imgSrc: `${imgageSrc}birds/crow.jpg`,
    audSrc: `${audioSrc}birds/crow.mp3`,
    desc: "Ravens (lat.Corvus) are a genus of birds from the Corvidae family.",
    id: 0,
  },
  {
    name: "Dove",
    ruName: "Голубь",
    imgSrc: `${imgageSrc}birds/dove.jpg`,
    audSrc: `${audioSrc}birds/dove.mp3`,
    desc:
      "Doves, (lat.Columba), is a genus of birds from the family of pigeons",
    id: 1,
  },
  {
    name: "Eagle",
    ruName: "Орел",
    imgSrc: `${imgageSrc}birds/eagle.jpg`,
    audSrc: `${audioSrc}birds/eagle.mp3`,
    desc: "Eagles (lat.Aquila) are a genus of large birds of the hawk family.",
    id: 2,
  },
  {
    name: "Magpie",
    ruName: "Сорока",
    imgSrc: `${imgageSrc}birds/magpie.jpg`,
    audSrc: `${audioSrc}birds/magpie.mp3`,
    desc:
      "The magpie, or the common magpie, or the European magpie (Latin Pica pica) is a bird of the corvid family from the genus magpie.",
    id: 3,
  },
  {
    name: "Tit",
    ruName: "Синица",
    imgSrc: `${imgageSrc}birds/tit.jpg`,
    audSrc: `${audioSrc}birds/tit.mp3`,
    desc:
      "The great tit, or big tit (lat.Parus major), is a common bird from the tit family, the order of passerines.",
    id: 4,
  },
];

const Songs = [
  {
    name: "Arctic Monkeys",
    ruName: "Арктические обезьяны",
    imgSrc: `${imgageSrc}songs/am.jpg`,
    audSrc: `${audioSrc}songs/am.mp3`,
    desc: "This section needs no description. Just enjoy the music",
    id: 0,
  },
  {
    name: "Queen",
    ruName: "Королева",
    imgSrc: `${imgageSrc}songs/bf.jpg`,
    audSrc: `${audioSrc}songs/bf.mp3`,
    desc: "This section needs no description. Just enjoy the music",
    id: 1,
  },
  {
    name: "Radiohead",
    ruName: "Radiohead",
    imgSrc: `${imgageSrc}songs/rc.jpg`,
    audSrc: `${audioSrc}songs/rc.mp3`,
    desc: "This section needs no description. Just enjoy the music",
    id: 2,
  },
  {
    name: "The Beatles",
    ruName: "Битлз",
    imgSrc: `${imgageSrc}songs/tb-lb.jpg`,
    audSrc: `${audioSrc}songs/tb-lb.mp3`,
    desc: "This section needs no description. Just enjoy the music",
    id: 3,
  },
  {
    name: "The Smiths",
    ruName: "The Smiths",
    imgSrc: `${imgageSrc}songs/ts.jpg`,
    audSrc: `${audioSrc}songs/ts.mp3`,
    desc: "This section needs no description. Just enjoy the music",
    id: 4,
  },
];
export { Nature, PublicTransport, Transport, Animals, Birds, Songs };
