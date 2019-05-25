@echo off

echo "Starting the frontend and backend in the background( when they start the frontend will open in a new tab )"

Start "Backend"  "start_backend.bat" &
Start "Frontend" "start_frontend.bat" &

pause