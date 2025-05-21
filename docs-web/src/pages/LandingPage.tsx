import React from "react";
import { useNavigate } from "react-router-dom";
import { Download, Code, Copy } from "lucide-react";

import MainLayout from "../layouts/MainLayout";
import Button from "../components/common/Button";
import Container from "../components/common/Container";

import logo from "../assets/images/logo.svg";

import OverviewSection from "../components/features/Landing/Overview";
import FeaturesSection from "../components/features/Landing/Features";
import DemoSection from "../components/features/Landing/Demo";
import AvailableSection from "../components/features/Landing/Available";
import TestimonialSection from "../components/features/Landing/Testimonial";
import FaqsSection from "../components/features/Landing/Faqs";

const LandingPage = () => {
    const navigate = useNavigate();
  const [isCopied, setIsCopied] = React.useState(false);
  const codeSnippets = [
    "// @architext-rule: layer-boundary",
    "function enforceArchitecture() {",
    "  checkLayerDependencies();",
    "}",
    "export const config = {",
    "  strictMode: true,",
    "  autoComment: true",
    "};",

    // Python
    "# @architext_rule(layer_boundary)",
    "def analyze_complexity():",
    "    return cognitive_analysis()",
    "class ArchitectureConfig:",
    "    def __init__(self, strict=True):",
    "        self.strict = strict",
    "        self.auto_comment = True",
    "// @architext-rule: layer-boundary",
    "function enforceArchitecture() {",
    "  checkLayerDependencies();",
    "}",
    "export const config = {",
    "  strictMode: true,",
    "  autoComment: true",
    "};",

    // Python
    "# @architext_rule(layer_boundary)",
    "def analyze_complexity():",
    "    return cognitive_analysis()",
    "class ArchitectureConfig:",
    "    def __init__(self, strict=True):",
    "        self.strict = strict",
    "        self.auto_comment = True",
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText("npm init @architext/config@latest");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <MainLayout>
      <section className="bg-primary min-h-[80vh] flex items-center justify-evenly relative overflow-hidden mt-[9vh]">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 opacity-40">
          {/* Diagonal Logo Pattern */}
          {[...Array(8)].map((_, i) => (
            <img
              key={i}
              src={logo}
              alt=""
              className="absolute w-40 h-40 opacity-5 mix-blend-overlay"
              style={{
                transform: `rotate(-45deg) scale(${0.8 + i * 0.1})`,
                left: `${i * 15}%`,
                top: `${(i * 20) % 100}%`,
              }}
            />
          ))}

          {/* Random Code Sentences */}
          {codeSnippets.map((code, index) => (
            <span
              key={index}
              className="absolute text-secondary/20 font-mono text-xs md:text-sm pointer-events-none"
              style={{
                transform: `rotate(${Math.random() * 15 - 7.5}deg)`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: "blur(1px)",
              }}
            >
              {code}
            </span>
          ))}
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-[70vw] mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-accent mb-8 lg:mb-12">
              Where Architecture Meets Context
            </h1>

            <p className="text-secondary/80 text-lg md:text-xl mb-16 mx-auto max-w-2xl">
              An AI-powered VS Code extension that reviews your code, enforces
              architecture rules, generates smart comments, analyzes complexity,
              and keeps your project clean, consistent, and scalable.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Updated Code Snippet with Container component */}
              <Container className="flex items-center gap-4 w-full md:w-auto backdrop-blur-sm">
                <button
                  onClick={copyToClipboard}
                  className="text-secondary hover:text-accent transition"
                >
                  {isCopied ? (
                    <span className="text-green-500">✓</span>
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </button>
                <code className="text-secondary font-mono text-sm md:text-base">
                  npm init @architext/config@latest
                </code>
              </Container>

              {/* Buttons Group */}
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <Button
                  variant="primary"
                  className="w-full md:w-auto justify-center gap-2 flex items-center"
                >
                  <Download className="w-5 h-5" />
                  Install Extension
                </Button>

                <Button
                  variant="outline"
                  className="w-full md:w-auto justify-center gap-2 flex items-center"
                  onClick={() => { navigate("playground") }}
                >
                  <Code className="w-5 h-5" />
                  Live Playground
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
        <OverviewSection/>
        <FeaturesSection/>
        <DemoSection/>
        <AvailableSection/>
        <TestimonialSection/>
        <FaqsSection/>  
            
    </MainLayout>
  );
};

export default LandingPage;