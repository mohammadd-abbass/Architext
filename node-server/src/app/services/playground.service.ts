import axios from "axios";
import {
  createPlaygroundRecord,
  getPlaygroundHistory,
} from "../models/playground.model.js";
import type {
  AnalysisResult,
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

export const commentCode = async (
  userId: number,
  code: string,
  language: string
) => {
  try {
    const response = await axios.post(`${FLASK_API_URL}/ai/generateComments`, {
      code,
      language,
    });

    const resultString = JSON.stringify(response.data);

    await createPlaygroundRecord(userId, "COMMENT", code, resultString);

    return response.data;
  } catch (error: any) {
    const errPayload = JSON.stringify({
      error: "Commenting failed",
      message: error.message,
    });

    await createPlaygroundRecord(userId, "COMMENT", code, errPayload);
    throw new Error("Code commenting failed: " + error.message);
  }
};

export const checkComplexity = async (
  userId: number,
  code: string,
  language: string
) => {
  try {
    console.log("Hello");
    const response = await axios.post(
      `${FLASK_API_URL}/ai/calculateComplexity`,
      { 
        code, 
        language 
    });

    const resultString = JSON.stringify(response.data);

    await createPlaygroundRecord(userId, "COMPLEXITY", code, resultString);

    return response.data;
  } catch (error: any) {
    const errPayload = JSON.stringify({
      error: "Calculate complexity failed",
      message: error.message,
    });

    await createPlaygroundRecord(userId, "COMPLEXITY", code, errPayload);
    throw new Error("Code complexity failed: " + error.message);
  }
};

export const getHistory = async (userId: number) => {
  try {
    return await getPlaygroundHistory(userId);
  } catch (error: any) {
    throw new Error("Failed to get history: " + error.message);
  }
};
