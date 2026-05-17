const prisma = require("./config/prisma");

async function main() {
  await prisma.employee.createMany({
    data: [
      {
        name: "Rahul",
        locality: "Madhapur",
        office: "HITEC City",
        preferredTransport: "Carpool",
      },
      {
        name: "Sneha",
        locality: "Madhapur",
        office: "HITEC City",
        preferredTransport: "Metro",
      },
      {
        name: "Arjun",
        locality: "Gachibowli",
        office: "Financial District",
        preferredTransport: "Shuttle",
      },
      {
        name: "Priya",
        locality: "Gachibowli",
        office: "Financial District",
        preferredTransport: "Carpool",
      },
      {
        name: "Kiran",
        locality: "Kukatpally",
        office: "HITEC City",
        preferredTransport: "Metro",
      },
    ],
  });

  console.log(" Employees seeded successfully");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });