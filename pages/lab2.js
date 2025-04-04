import React, { useState } from "react";
export default function Home() {
  const [name, setName] = useState("");
  const [view, setView] = useState("grid");

  const users = [
    { name: "Temujin", surname: "Сойл-Эрдэнэ", items: ["keyboard", "mouse"], img: "/images/ad.jpg", title: "developer" },
    { name: "Anduul", surname: "Gomez", items: ["iphone", "laptop"], img: "/images/se.jpg", title: "mode" },
    { name: "Azzaya", surname: "Grande", items: ["iphone", "laptop"], img: "/images/ss.jpg", title: "teacher" },
    { name: "Aydualet", surname: "Bieber", items: ["iphone", "laptop"], img: "/images/jus.jpg", title: "singer" },
    { name: "Serjee", surname: "Swift", items: ["iphone", "laptop"], img: "/images/ta.jpg", title: "developer" },
    { name: "Narka", surname: "Grande", items: ["iphone", "laptop"], img: "/images/ss.jpg", title: "model" },
    { name: "Anand", surname: "Bieber", items: ["iphone", "laptop"], img: "/images/jus.jpg", title: "singer" },
    { name: "Oyunbileg", surname: "Swift", items: ["tablet", "keyboard"], img: "/images/ad.jpg", title: "model" },
    { name: "Erkhes", surname: "Minaj", items: ["camera", "headphones"], img: "/images/ad.jpg", title: "singer" },
    { name: "Minori", surname: "Bieber", items: ["iphone", "earphones"], img: "/images/jus.jpg", title: "odel" },
    { name: "Khulan", surname: "Minaj", items: ["monitor", "mouse"], img: "/images/ni.jpg", title: "modelr" },
    { name: "Yesui", surname: "Swift", items: ["headphones", "tablet"], img: "/images/ad.jpg", title: "singer" },
    { name: "Telmuun", surname: "Minaj", items: ["iphone", "tablet"], img: "/images/ni.jpg", title: "singer" },
    { name: "Gunsenynin", surname: "Gomez", items: ["laptop", "keyboard"], img: "/images/ad.jpg", title: "model" },
    { name: "Khantushig", surname: "Bieber", items: ["headphones", "laptop"], img: "/images/jus.jpg", title: "model" },
    { name: "Anar", surname: "Swift", items: ["camera", "tripod"], img: "/images/ta.jpg", title: "model" },
    { name: "Chinguun", surname: "Gomez", items: ["iphone", "keyboard"], img: "/images/se.jpg", title: "Designer" },
    { name: "Ayden anand", surname: "Bieber", items: ["headphones", "laptop"], img: "/images/jus.jpg", title: "Developer" },
    { name: "Bataa", surname: "Swift", items: ["iphone", "laptop"], img: "/images/ad.jpg", title: "Artist" }
  ];

  const filteredUsers = users.filter(user =>
    `${user.name} ${user.surname}`.toLowerCase().includes(name.toLowerCase())
  );

  return (
    <div>
      <input
        className="fixed top-4 left-4 placeholder-shown:border-gray-500 p-2 m-5 rounded text-gray-500"
        placeholder="Нэрээ бичнэ үү."
        type="text"
        onChange={(e) => setName(e.target.value)}
      />

      <div style={{ padding: "20px", textAlign: "center", color: "white", marginTop: "60px" }}></div>

      <div
        style={{
          display: view === "grid" ? "grid" : "block",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
          padding: "20px",
          backgroundColor: "white",
        }}
      >
        {filteredUsers.map((user, index) => (
          <div
            key={index}
            style={{
              border: "1px solid",
              borderRadius: "8px",
              padding: "15px",
              textAlign: "center",
              backgroundColor: "gray",
              color: "white",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              display: "flex",
              flexDirection: view === "grid" ? "column" : "row",
              alignItems: "center",
            }}
          >
            <img
              src={user.img}
              alt={user.name}
              style={{
                width: view === "grid" ? "100%" : "150px", 
                height: view === "grid" ? "150px" : "auto",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: view === "grid" ? "10px" : "0",
                marginRight: view === "list" ? "15px" : "0",
              }}
            />
            <div>
              <h3 style={{ margin: "10px 0", fontSize: "1.2rem" }}>{user.name}</h3>
              <p style={{ margin: "5px 0" }}>{user.surname}</p>
              <p style={{ margin: "5px 0" }}>{user.title}</p>
              <p style={{ margin: "5px 0" }}>
                <strong>Items:</strong> {user.items.join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button
  onClick={() => setView(view === "grid" ? "list" : "grid")}
  style={{
    position: "fixed",
    top: "20px", 
    right: "20px",
    padding: "10px 20px",
    backgroundColor: "#808080",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
  }}
>
        {view === "grid" ? "Switch" : "Back"}
      </button>
    </div>
  );
}
