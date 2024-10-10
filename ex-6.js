const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  // Start coding here
  let index = carCollection.indexOf(carBrand);
  if (index >= 0) {
    return `${carBrand} already exists in position ${
      index + 1
    } of the car collection.`;
  } else {
    return `New car collection is: toyota,fiat,honda,bmw,${carBrand}`;
  }
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.
