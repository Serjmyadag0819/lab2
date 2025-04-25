import { useState } from "react";

export default function Lab1() {
  const data = [
    {
      date: "2025-04-24 13:37",
      product: "Phone",
      item: "Camera, Case, Charger",
      phone: "900.000",
      email: "hshsh@gmail.com",
      productImage: "/images/ip.webp",
    },
    {
      date: "2025-04-24 13:37",
      product: "Earphone",
      item: "Charger, Case",
      phone: "780.000",
      email: "heyud@gmail.com",
      productImage: "/images/airpod.webp",
    },
    {
      date: "2025-04-24 13:37",
      product: "Mouse",
      item: "Keyboard, Window",
      phone: "34.000",
      email: "serje@gmail.com",
      productImage: "/images/mouse.webp",
    },
    {
      date: "2025-04-24 13:37",
      product: "Case",
      item: "Box, Slime ",
      phone: "9.000.000",
      email: "muhdhd2@gmail.com",
      productImage: "/images/case.webp",
    },
  ];

  const headers = ["Date", "Product", "Item", "Price", "Email", ""];

  const [searchQuery, setSearchQuery] = useState("");
  const filteredData = data.filter((row) =>
    row.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.item.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex gap-x-4 p-4 bg-gray-300">
      <div className="w-[20%] bg-white h-[95vh] rounded-xl text-black flex flex-col items-center justify-start">
        <img src="/images/nest.jpg" alt="Logo" className="w-24 h-auto mt-4" />
        <p className="text-xl font-semibold text-gray-700">11в Г.Сэржмядаг</p>
        <div className="flex flex-col w-full mt-8 space-y-1 justify-between">
          {Array.from({ length: 7 }).map((_, i) => (
            <button key={i} className="px-4 py-2 bg-gray-200 text-gray-600">{`Lab ${i + 1}`}</button>
          ))}
        </div>
      </div>

      <div className="w-[80%] bg-white h-[95vh] rounded-xl text-black overflow-auto p-6">
        <div className="flex items-center mb-4 space-x-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 border rounded-md w-40"
          />
          <button
            onClick={() => setSearchQuery("")}
            className="px-3 py-2 bg-gray-700 text-white rounded-md"
          >
            Search
          </button>
        </div>
        <table className="w-full table-auto">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="text-left text-sm text-gray-500 pb-2 px-3 py-2 bg-gray-100"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="text-sm text-gray-800"
                style={{
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  marginBottom: "8px",
                  border: "1px solid #e5e7eb",
                }}
              >
                <td className="py-2 px-3 bg-gray-100 rounded-l-xl">{row.date}</td>
                <td className="py-2 px-3 bg-gray-100 flex items-center gap-2">
                  <img
                    src={row.productImage}
                    alt={row.product}
                    className="w-8 h-8 object-cover rounded"
                  />
                  {row.product}
                </td>
                <td className="py-2 px-3 bg-gray-100">{row.item}</td>
                <td className="py-2 px-3 bg-gray-100">{row.phone}</td>
                <td className="py-2 px-3 bg-gray-100">{row.email}</td>
                <td className="py-2 px-3 bg-gray-100 rounded-r-xl">
                  <button className="bg-yellow-400 text-black px-2 py-1 rounded text-xs">View</button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded text-xs">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


