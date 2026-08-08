import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const size = {
  width: 1200,
  height: 600,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#09090b",
          color: "#ffffff",
          fontFamily: "Inter, sans-serif",
          overflow: "hidden",
        }}
      >
        {/* Background */}

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg,#09090b 0%,#111827 45%,#1e293b 100%)",
          }}
        />

        {/* Blue Glow */}

        <div
          style={{
            position: "absolute",
            top: -150,
            left: -120,
            width: 450,
            height: 450,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(37,99,235,.45), transparent)",
          }}
        />

        {/* Cyan Glow */}

        <div
          style={{
            position: "absolute",
            right: -180,
            bottom: -180,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(6,182,212,.35), transparent)",
          }}
        />

        {/* Content */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "70px",
            width: "100%",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 24,
            }}
          >
            <div
              style={{
                width: 70,
                height: 70,
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg,#2563eb,#06b6d4)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                fontSize: 30,
                fontWeight: 800,
              }}
            >
              SV
            </div>

            <div
              style={{
                color: "#60a5fa",
                fontSize: 28,
                fontWeight: 700,
              }}
            >
              Software Engineer
            </div>
          </div>

          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.1,
            }}
          >
            Saishankar Vanam
          </div>

          <div
            style={{
              marginTop: 22,
              color: "#d4d4d8",
              fontSize: 30,
              lineHeight: 1.4,
              maxWidth: 900,
            }}
          >
            Building scalable enterprise applications using
            Java, Spring Boot, React, AWS, Microservices,
            Next.js and modern cloud technologies.
          </div>

          <div
            style={{
              display: "flex",
              gap: 14,
              marginTop: 42,
              flexWrap: "wrap",
            }}
          >
            {[
              "Java",
              "Spring Boot",
              "React",
              "AWS",
              "Next.js",
              "TypeScript",
            ].map((tech) => (
              <div
                key={tech}
                style={{
                  padding: "12px 22px",
                  borderRadius: 999,
                  border: "2px solid rgba(96,165,250,.25)",
                  background: "rgba(37,99,235,.12)",
                  color: "#bfdbfe",
                  fontSize: 22,
                  fontWeight: 600,
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size
  );
}