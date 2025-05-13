#!/bin/sh
set -e  # Exit immediately if any command fails

# These now run at container startup, not build time
echo "Running Prisma migrations..."
npx prisma migrate deploy

echo "Running Prisma Seeder..."
# npx prisma db seed  # Uncomment when ready

echo "Starting server..."
exec npm start