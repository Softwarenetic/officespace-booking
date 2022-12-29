cd ../packages
cd frontend_admin
npm i
yarn build
sudo cp -r ./build /var/www/html/admin/build
cd ../frontend_user
npm i
yarn build
sudo cp -r ./build /var/www/html/user/build
cd ../backend
npm i
pm2 --name backend start npm -- start
sudo nginx -s reload
