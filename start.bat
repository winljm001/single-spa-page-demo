
cd header-project

start "header Service" yarn start

cd ../
cd side-project

start "side Service" yarn start

cd ../
cd footer-project

start "footer Service" yarn start

cd ../
cd content-project

start "content Service" yarn serve