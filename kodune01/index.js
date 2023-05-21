
let pakapikk1 = [1000, 2000, 3000]
let pakapikk2 = [4000]
let pakapikk3 = [5000, 6000]
let pakapikk4 = [7000, 8000, 9000]
let pakapikk5 = [10000]

let koigipakapikkudetoidud = [pakapikk1, pakapikk2, pakapikk3, pakapikk4, pakapikk5];
let koigipakapikkudekalorid = [];
for (let pakapikutoidud of koigipakapikkudetoidud) {
 let pakapikukalorid = 0;

 for (let toidukalorid of pakapikutoidud) {
    pakapikukalorid += toidukalorid;
 }

 koigipakapikkudekalorid.push(pakapikukalorid);
}
console.log(koigipakapikkudekalorid);

let maxKalorid = Math.max(...koigipakapikkudekalorid);
console.log('võitja:', maxKalorid);
