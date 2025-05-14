import axios from 'axios';
import {
  createArchitectureSession,
  createArchitectureMessage,
  updateSessionStatus,
} from '../models/ai.model.js';

const FLASK_API_URL = process.env.FLASK_API_URL || 'http://localhost:5000';

