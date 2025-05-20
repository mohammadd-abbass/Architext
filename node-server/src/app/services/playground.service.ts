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

const FLASK_API_URL = process.env.FLASK_API_URL || "http://localhost:5000/";

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

export const commentCode = async (userId: number, code: string, language: string) => {
    try {

      const response = await axios.post(
        `${FLASK_API_URL}/ai/generateComments`,
        { code, language }
      );
  
    const comments = response.data.code;
    const resultString = JSON.stringify(response.data);
  
      await createPlaygroundRecord(userId, "COMMENT", code, resultString);
  
      return comments;
    } catch (error: any) {
      const errPayload = JSON.stringify({
        error: "Commenting failed",
        message: error.message,
      });
  
      await createPlaygroundRecord(userId, "COMMENT", code, errPayload);
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

export const getHistory = async (userId: number) => {
  try {
    return await getPlaygroundHistory(userId);
  } catch (error: any) {
    throw new Error("Failed to get history: " + error.message);
  }
};
