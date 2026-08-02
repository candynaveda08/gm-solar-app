import { useEffect, useState } from "react";

export default function AllReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://gm-solar-app-1.onrender.com/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        const approved = data.filter((review) => review.approved);
        setReviews(approved);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "50px auto",
        padding: "20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#1d4ed8",
          fontSize: "48px",
          marginBottom: "10px",
        }}
      >
        Customer Reviews
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#666",
          fontSize: "18px",
          marginBottom: "40px",
        }}
      >
        See what our customers are saying about FLF Solar Services.
      </p>

      {reviews.length === 0 ? (
        <p style={{ textAlign: "center" }}>No reviews available.</p>
      ) : (
        reviews.map((review) => (
          <div
            key={review._id}
            style={{
              background: "#fff",
              borderRadius: "18px",
              padding: "35px",
              marginBottom: "30px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              maxWidth: "750px",
              margin: "30px auto",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: "#1d4ed8",
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "32px",
                fontWeight: "bold",
                margin: "0 auto 20px",
              }}
            >
              {review.name.charAt(0).toUpperCase()}
            </div>

            <h2
              style={{
                margin: "0",
                color: "#222",
                fontSize: "28px",
              }}
            >
              {review.name}
            </h2>

            <div
              style={{
                color: "#f5b623",
                fontSize: "26px",
                margin: "15px 0",
              }}
            >
              {"⭐".repeat(review.rating)}
            </div>

            <p
              style={{
                color: "#555",
                fontSize: "18px",
                lineHeight: "1.8",
                fontStyle: "italic",
              }}
            >
              "{review.comment}"
            </p>
          </div>
        ))
      )}

      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        <button
          onClick={() => (window.location.href = "/")}
          style={{
            background: "#1d4ed8",
            color: "#fff",
            border: "none",
            padding: "14px 35px",
            borderRadius: "10px",
            fontSize: "17px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}