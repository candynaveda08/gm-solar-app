import { useState } from "react";

export default function ReviewForm() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !comment.trim()) {
      setMessage("Please complete your name and review.");
      return;
    }

    try {
      setIsSending(true);
      setMessage("");

      const response = await fetch("https://gm-solar-app-1.onrender.com/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          rating,
          comment,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "The review could not be submitted.");
      }

      setMessage("Thank you! Your review was submitted for approval.");
      setName("");
      setRating(5);
      setComment("");
    } catch (error) {
      setMessage(error.message || "The review could not be submitted.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      style={{
        background: "#ffffff",
        padding: "30px",
        borderRadius: "16px",
        boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
        margin: "40px auto",
        maxWidth: "760px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          color: "#061b3a",
          marginBottom: "8px",
          fontSize: "28px",
        }}
      >
        Customer Reviews
      </h2>

      <p
        style={{
          color: "#475569",
          marginBottom: "24px",
        }}
      >
        Share your experience with FLF Solar Services.
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "18px",
            border: "1px solid #cbd5e1",
            borderRadius: "8px",
            boxSizing: "border-box",
          }}
        />

        <div style={{ marginBottom: "20px" }}>
          <p
            style={{
              marginBottom: "8px",
              color: "#475569",
              fontWeight: "600",
            }}
          >
            Select your rating
          </p>

          <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                aria-label={`${star} star rating`}
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "34px",
                  color: star <= rating ? "#f59e0b" : "#cbd5e1",
                  padding: "2px",
                }}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        <textarea
          placeholder="Write your review..."
          rows="5"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "18px",
            border: "1px solid #cbd5e1",
            borderRadius: "8px",
            resize: "vertical",
            boxSizing: "border-box",
          }}
        />

        <button
          type="submit"
          disabled={isSending}
          style={{
            background: isSending ? "#94a3b8" : "#f59e0b",
            color: "#ffffff",
            padding: "12px 28px",
            border: "none",
            borderRadius: "8px",
            cursor: isSending ? "not-allowed" : "pointer",
            fontWeight: "700",
            fontSize: "15px",
          }}
        >
          {isSending ? "Submitting..." : "Submit Review"}
        </button>

        {message && (
          <p
            style={{
              marginTop: "18px",
              color: message.startsWith("Thank you") ? "#15803d" : "#b91c1c",
              fontWeight: "600",
            }}
          >
            {message}
          </p>
        )}
      </form>
    </section>
  );
}