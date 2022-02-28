const pixabay = "https://cdn.pixabay.com/photo";
const fruitsImg = {
  apple: `${pixabay}/2016/11/18/13/47/apple-1834639__340.jpg`,
  cherry: `${pixabay}/2014/12/21/23/34/cherry-575547__340.png`,
  strawberry:`${pixabay}/2016/03/05/19/11/strawberry-1238295__340.jpg`,
  orange: `${pixabay}/2015/07/05/12/24/orange-832278__340.jpg`,
  raspberries: `${pixabay}/2018/06/04/23/42/raspberries-3454504__340.jpg`,
  blackberries: `${pixabay}/2016/07/24/23/35/blackberries-1539540__340.jpg`,
  banana: `${pixabay}/2012/04/05/00/32/banana-25339__340.png`,
  mandarin: `${pixabay}/2020/06/21/09/55/tangerine-5324176__340.jpg`,
}

const fruits = [ 
  {id: 1, img: fruitsImg.apple, title: "Apple", uom: "02", packSize: "02", perUnit: "$8,99", total: "$17.98"},
  {id: 2, img: fruitsImg.cherry, title: "Cherry", uom: "02", packSize: "02", perUnit: "$8,99", total: "$17.98"},
  {id: 3, img: fruitsImg.strawberry, title: "Strawberry", uom: "02", packSize: "02", perUnit: "$8,99", total: "$17.98"},
  {id: 4, img: fruitsImg.orange, title: "Orange", uom: "02", packSize: "02", perUnit: "$8,99", total: "$17.98"},
  {id: 5, img: fruitsImg.raspberries, title:"Raspberry", uom: "02", packSize: "02", perUnit: "$8,99", total: "$17.98"},
  {id: 6, img: fruitsImg.blackberries, title: "Blackberry", uom: "02", packSize: "02", perUnit: "$8,99", total: "$17.98"},
  {id: 7, img: fruitsImg.banana, title: "Banana", uom: "02", packSize: "02", perUnit: "$8,99", total: "$17.98"},
  {id: 8, img: fruitsImg.mandarin, title: "Mandarin", uom: "02", packSize: "02", perUnit: "$8,99", total: "$17.98"},
];

export default fruits;

