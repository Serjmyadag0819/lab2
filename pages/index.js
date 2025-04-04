import React from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const navigateToPage = (url) => {
    router.push(url);
  };

  return (
    <div style={styles.container}>
      <p style={styles.title}>Project</p>

      <img
        src="/images/nest.ico"
        alt="Image"
        style={styles.image}
      />

      <div style={styles.buttonContainer}>
        <button
          onClick={() => navigateToPage("/lab1")}
          style={styles.button("#A8DADC")}
        >
          hicheel 1
        </button>

        <button
          onClick={() => navigateToPage("/lab3")}
          style={styles.button("#FFE156")}
        >
          hicheel 2
        </button>

        <button
          onClick={() => navigateToPage("/lab4")}
          style={styles.button("#F9C74F")}
        >
          hicheel 3
        </button>

        <button
          onClick={() => navigateToPage("/lab2")}
          style={styles.button("#90BE6D")}
        >
          hicheel 4
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    position: "relative",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#F1F3F5",
    minHeight: "100vh",
    padding: "20px",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "30px",
    letterSpacing: "2px",
  },
  image: {
    position: "absolute",
    top: "20px",
    right: "20px",
    width: "80px",
    height: "auto",
    borderRadius: "50%",
    border: "2px solid #ddd",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "30px",
  },
  button: (bgColor) => ({
    padding: "12px 30px",
    fontSize: "16px",
    margin: "12px",
    backgroundColor: bgColor,
    color: "#333",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    fontWeight: "bold",
    textTransform: "uppercase",
  }),
};
