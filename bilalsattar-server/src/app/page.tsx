"use client";

import React from "react";

const industries = [
  { name: "Agriculture", projects: 12 },
  { name: "Sports", projects: 8 },
  { name: "Mobile Connectivity", projects: 15 },
  { name: "Finance", projects: 10 },
  { name: "E-commerce", projects: 14 },
  { name: "Healthcare", projects: 7 },
];

const services = [
  {
    title: "Frontend Development",
    description:
      "Creating responsive and intuitive user interfaces using modern frameworks like React, Next.js, and Vue.js",
  },
  {
    title: "Backend Development",
    description:
      "Building robust server-side applications with Node.js, Python, and various database technologies",
  },
  {
    title: "Mobile Development",
    description:
      "Developing cross-platform mobile applications using React Native and Flutter",
  },
  {
    title: "Cloud Solutions",
    description:
      "Implementing and managing cloud infrastructure using AWS, Azure, and Google Cloud",
  },
];

export default function Home() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
      {/* Hero Section */}
      <div
        style={{
          textAlign: "center",
          marginTop: "80px",
          marginBottom: "80px",
        }}>
        <h1 style={{ fontSize: "48px", marginBottom: "24px" }}>
          Full Stack Developer
        </h1>
        <p
          style={{
            fontSize: "20px",
            maxWidth: "800px",
            margin: "0 auto",
            marginBottom: "32px",
          }}>
          With 10 years of experience crafting digital solutions across various
          industries. Specialized in building scalable web applications and
          delivering exceptional results.
        </p>
        <button
          style={{
            padding: "16px 32px",
            fontSize: "18px",
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}>
          Let's Work Together
        </button>
      </div>

      {/* Services Section */}
      <div style={{ marginBottom: "80px" }}>
        <h2
          style={{
            fontSize: "36px",
            textAlign: "center",
            marginBottom: "40px",
          }}>
          Services
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
          }}>
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                padding: "24px",
                border: "1px solid #eaeaea",
                borderRadius: "8px",
                backgroundColor: "white",
              }}>
              <h3 style={{ fontSize: "24px", marginBottom: "16px" }}>
                {service.title}
              </h3>
              <p style={{ color: "#666" }}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Industry Experience */}
      <div style={{ marginBottom: "80px" }}>
        <h2
          style={{
            fontSize: "36px",
            textAlign: "center",
            marginBottom: "40px",
          }}>
          Industry Experience
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "16px",
          }}>
          {industries.map((industry, index) => (
            <div
              key={index}
              style={{
                padding: "20px",
                border: "1px solid #eaeaea",
                borderRadius: "8px",
                textAlign: "center",
                backgroundColor: "white",
              }}>
              <h3 style={{ marginBottom: "8px" }}>{industry.name}</h3>
              <span
                style={{
                  backgroundColor: "#e8f0fe",
                  color: "#0070f3",
                  padding: "4px 12px",
                  borderRadius: "16px",
                  fontSize: "14px",
                }}>
                {industry.projects} Projects
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div
        style={{
          textAlign: "center",
          padding: "48px",
          marginBottom: "80px",
          border: "1px solid #eaeaea",
          borderRadius: "8px",
          backgroundColor: "white",
        }}>
        <h2 style={{ fontSize: "36px", marginBottom: "16px" }}>
          Ready to Build Something Amazing?
        </h2>
        <p style={{ fontSize: "20px", marginBottom: "32px" }}>
          Let's discuss how I can help bring your ideas to life.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
          <button
            style={{
              padding: "16px 32px",
              fontSize: "18px",
              backgroundColor: "#0070f3",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}>
            Contact Me
          </button>
          <button
            style={{
              padding: "16px 32px",
              fontSize: "18px",
              backgroundColor: "white",
              color: "#0070f3",
              border: "1px solid #0070f3",
              borderRadius: "8px",
              cursor: "pointer",
            }}>
            View Portfolio
          </button>
        </div>
      </div>
    </div>
  );
}
