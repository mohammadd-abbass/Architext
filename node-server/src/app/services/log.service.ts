import { createLogEntry, getLogsByUserId } from '../models/log.model.js';
import geoip from 'geoip-lite';

export const createLog = async (userId: number, ipAddress: string, userAgent?: string) => {
  const geo = (geoip.lookup(ipAddress) || {}) as geoip.Lookup;

  const log = await createLogEntry({
    userId,
    ipAddress,
    city: geo.city,
    country: geo.country,
    latitude: geo.ll?.[0],
    longitude: geo.ll?.[1],
    userAgent,
  });

  return log;
};

export const getUserLogs = async (userId: number) => {
  const logs = await getLogsByUserId(userId);
  return logs;
};
