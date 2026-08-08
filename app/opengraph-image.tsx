import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#09090b",
          color: "white",
          fontFamily: "sans-serif",
          overflow: "hidden",
        }}
      >
        {/* Background Glow */}

        <div
          style={{
            position: "absolute",
            top: -180,
            left: -180,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(37,99,235,.45), transparent)",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: -200,
            right: -200,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(14,165,233,.35), transparent)",
          }}
        />

        {/* Main Content */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px",
            width: "100%",
          }}
        >
          <div
            style={{
              color: "#60a5fa",
              fontSize: 30,
              fontWeight: 700,
              marginBottom: 24,
            }}
          >
            Software Engineer
          </div>

          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.1,
            }}
          >
            Saishankar Vanam
          </div>

          <div
            style={{
              fontSize: 34,
              marginTop: 24,
              color: "#d4d4d8",
              maxWidth: 850,
              lineHeight: 1.4,
            }}
          >
            Java • Spring Boot • React • AWS • Microservices •
            Cloud Native Applications
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 50,
              gap: 16,
            }}
          >
            {["Java", "Spring Boot", "React", "AWS"].map((item) => (
              <div
                key={item}
                style={{
                  padding: "14px 26px",
                  borderRadius: 999,
                  background: "rgba(37,99,235,.15)",
                  border: "2px solid rgba(37,99,235,.3)",
                  color: "#93c5fd",
                  fontSize: 24,
                  fontWeight: 600,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size
  );
}