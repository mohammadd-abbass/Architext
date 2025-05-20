import axios from "axios";
import {
  createPlaygroundRecord,
  getPlaygroundHistory,
} from "../models/playground.model.js";
import type {
  AnalysisResult,
  CodeComment,
  ComplexityResult,
} from "../../types/playground.js";

const FLASK_API_URL = process.env.FLASK_API_URL || "http://localhost:5000/ai";

export const analyzeCode = async (userId: number, code: string) => {
  try {
    const response = await axios.post<{ result: AnalysisResult }>(
      `${FLASK_API_URL}/analyze`,
      { code }
    );

    await createPlaygroundRecord(userId, "ANALYZE", code, response.data.result);
    return response.data.result;
  } catch (error) {
    await createPlaygroundRecord(userId, "ANALYZE", code, {
      error: "Analysis failed",
    });
    throw new Error("Code analysis failed");
  }
};

export const commentCode = async (userId: number, code: string) => {
  try {
    const response = await axios.post<{ comments: CodeComment[] }>(
      `${FLASK_API_URL}comment`,
      { code }
    );

    await createPlaygroundRecord(userId, "COMMENT", code, response.data);
    return response.data.comments;
  } catch (error: any) {
    await createPlaygroundRecord(userId, "COMMENT", code, {
      error: "Commenting failed",
      message: error.message,
    });
    throw new Error("Code commenting failed: " + error.message);
  }
};

export const checkComplexity = async (userId: number, code: string) => {
  try {
    const response = await axios.post<ComplexityResult>(
      `${FLASK_API_URL}/complexity`,
      { code }
    );

    await createPlaygroundRecord(userId, "COMPLEXITY", code, response.data);
    return response.data;
  } catch (error: any) {
    await createPlaygroundRecord(userId, "COMPLEXITY", code, {
      error: "Complexity check failed",
      message: error.message,
    });
    throw new Error("Complexity analysis failed: " + error.message);
  }
};
