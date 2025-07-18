"use strict";

// Practice Object CRUD, copying, and destructuring.
let product = {
	id: 101,
	name: "Laptop",
	price: 1200,
	details: {
		brand: "TechPro",
		specs: {
			cpu: "i7",
			ram: "16GB",
		},
	},
};

let cart = {
	items: [
		{ id: 101, qty: 1 },
		{ id: 202, qty: 2 },
	],
	customer: {
		name: "Alice",
		address: { city: "Bangkok", zip: "10110" },
	},
};

// Task 01: CRUD on an Object (After each step, log the product object.)
// 1️⃣ C – Create (Add new property)
// 👉 Add stock: true to product.
product.stock = 4;
//object.properties = value;

// 2️⃣ R – Read (Access property)
// 👉 Log product.details.brand and product.details.specs.cpu.
console.log(product.details.brand);//dot notation
console.log(product['details']['brand']);//bracket notation
console.log(product.details.specs.cpu);

// 3️⃣ U – Update (Change value)
// 👉 Update product.price to 999.
product.price = 999;
console.log(product.price);

// 4️⃣ D – Delete (Remove property)
// 👉 Delete product.details.specs.ram.
delete product.details.specs.ram;
console.log(product);


// Task 02: Copying Objects
// 5️⃣ Shallow copy (spread operator)
// 👉 Create productCopy = { ...product }.
const productCopy = {...product}
// Change productCopy.name = "Gaming Laptop".
productCopy.name = "Gaming Laptop";
// ✅ Log both product.name and productCopy.name.
console.log(product.name);
console.log(productCopy.name);

productCopy.details.specs.cpu = "core ultra";
console.log(product.details.specs.cpu)
console.log(productCopy.details.specs.cpu)

// 6️⃣ Deep copy (structuredClone)
// 👉 Create cartCopy = structuredClone(cart).
const cartCopy = structuredClone(cart);
// Change cartCopy.customer.address.city = "Chiang Mai".
cartCopy.customer.address.city = "Chiang Mai";
// ✅ Log cart.customer.address.city and cartCopy.customer.address.city.
console.log(cart.customer.address.city );
console.log(cartCopy.customer.address.city);


// Task 03: Destructuring
// 7️⃣ Basic destructuring
// 👉 Extract name and price from product into variables.
// const { name, price } = product;
// ✅ Log name and price.
// console.log(name, price);


// 8️⃣ Rename and default
// 👉 Destructure product so that name becomes productName.
// 👉 Also give stock a default value of false if it’s not in the object.
const {name:productName, stock = false} = product;
//ใส่ : คือการเเปลี่ยนชื่อ ใส่ = คือการ default ค่าเริ่มต้น
// ✅ Log productName and stock.
console.log(productName, stock);


// 9️⃣ Nested destructuring
// 👉 From product.details, extract brand and from product.details.specs, extract cpu in one destructuring statement.
const {details : {brand,specs : {cpu}}} = product;
// ✅ Log brand and cpu.
console.log(brand,cpu);