@echo off

start cmd /k "cd base&&yarn start" 
start cmd /k "cd header-project&&yarn start" 
start cmd /k "cd side-project&&yarn start" 
start cmd /k "cd footer-project&&yarn start" 
start cmd /k "cd content-project&&yarn serve" 
