cd ../packages/backend
npm i
pm2 --name backend start npm -- start
echo "backend started"
sudo nginx -s reload
echo "nginx restarted"
