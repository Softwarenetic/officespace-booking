cd ../packages
cd frontend_admin
npm i
yarn build
sudo cp -r ./build /var/www/html/admin/build
echo "admin built"
cd ../frontend_user
npm i
yarn build
sudo cp -r ./build /var/www/html/user/build
echo "user built"
cd ../backend
npm i
pm2 --name backend start npm -- start
echo "backend started"
sudo nginx -s reload
echo "nginx restarted"
